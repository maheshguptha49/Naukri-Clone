import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { GoogleLogin101 } from "../LoginComponents/Googlelogin101";
import { Education } from "./Education";
import styles from "./Register.module.css";

export function Register({ gotoHomePage }) {
  const fileRef = useRef();
  const buttonRef = useRef();
  const [resumeurl, SetResumeurl] = useState();
  const [formData, setFormdata] = useState({});
  const [file, setMyfile] = useState("");
  const [filep, setMyfilep] = useState("");
  // http://localhost:3000/rprofiles
  const [loginPageR, setLoginPageR] = useState(false);
  const NameInput = useRef();
  const EmailInput = useRef();
  var id = 1;
  useEffect(() => {
    let arr = localStorage.getItem("rprofiles");
    if (arr !== null) {
      console.log("use effett running");
      id += arr.length;
    }
    handleGoogleData();
  }, []);
  function handleGoogleData() {
    let arr = localStorage.getItem("gprofile");
    if (arr !== null) {
      arr = JSON.parse(arr);
      let { Name, Email, imageurl } = arr[0];
      NameInput.current.value = Name;
      EmailInput.current.value = Email;
      alert('you dont need to upload image of your"s we got it from google ');
      let obj1 = { Name: Name, Email: Email, imageurl };
      setFormdata({ ...formData, ...obj1 });
    }
  }
  // console.log(id, "id outside");
  const [personal, SetPersonal] = useState(true);
  const handleShow = () => {
    SetPersonal(personal ? false : true);
  };
  const urlConverter = (data) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        if (reader.readyState === 2) {
          resolve(reader.result);
        }
      };
      reader.readAsDataURL(data);
    });
  };
  function check(data) {
    let inpcount = 0;
    for (let key in data) {
      if (key === "Name") {
        inpcount++;
      } else if (key === "Email") {
        inpcount++;
      } else if (key === "Course") {
        inpcount++;
      } else if (key === "Skills") {
        inpcount++;
      } else if (key === "Password") {
        inpcount++;
      } else if (key === "University") {
        inpcount++;
      } else if (key === "Passing year") {
        inpcount++;
      } else if (key === "Specialization") {
        inpcount++;
      }
    }
    if (inpcount >= 8) {
      console.log("inp count", inpcount, data);
      return true;
    }
    return false;
  }

  const handleSubmit = () => {
    if (check(formData)) {
      PostFormdatainls(formData);
      setLoginPageR(true);
    } else {
      alert(
        "Please fill in all details go back if you want by clicking on personal"
      );
    }
  };
  const handleChangen = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };
  function getDatafromLs(nameofurl, url) {
    let arr = localStorage.getItem("rprofiles");
    if (arr === null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }
    let bool = false;

    for (let i = 0; i < arr.length; i++) {
      for (let key in arr[i]) {
        if (key === "id") {
          console.log(arr[i][key], id, "arrkey id");
          if (arr[i][key] === id) {
            arr[i][nameofurl] = url;
            bool = true;
            break;
          }
        }
      }
      if (bool) {
        break;
      }
    }
    if (!bool) {
      let obj = { id: id, [nameofurl]: url };
      arr.push(obj);
    }
    localStorage.setItem("rprofiles", JSON.stringify(arr));
  }
  function PostFormdatainls(data) {
    console.log("id in func", id);
    let arr = localStorage.getItem("rprofiles");
    if (arr === null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }
    let bool = false;
    for (let i = 0; i < arr.length; i++) {
      let f = arr[i].id;
      if (f !== undefined) {
        if (f === id) {
          bool = true;
          arr[i] = { ...arr[i], ...data };
          break;
        }
      }
    }
    if (!bool) {
      data.id = id;
      arr.push(data);
    }
    id++;
    console.log(id, "id plus plus end");
    localStorage.setItem("rprofiles", JSON.stringify(arr));
  }
  const handleChangef = (e) => {
    setMyfile(e.target.files[0]);
    console.log(e.target.files[0], "hvvh", file, "aft");
    urlConverter(e.target.files[0]).then((res) => {
      getDatafromLs("resumeurl", res);
    });
  };
  const handleUpload = () => {
    fileRef.current.click();
    console.log("clicking");
    buttonRef.current.style.background = "#fcfcfc";
    setTimeout(() => {
      buttonRef.current.style.background = "rgb(27,188,155)";
    }, 500);
  };
  // refp////////////
  const fileRefp = useRef();
  const buttonRefp = useRef();
  const handleChangefp = (e) => {
    setMyfilep(e.target.files[0]);
    urlConverter(e.target.files[0]).then((res) => {
      getDatafromLs("imageurl", res);
    });
  };

  const handleUploadp = () => {
    fileRefp.current.click();
    buttonRefp.current.style.background = "#fcfcfc";
    setTimeout(() => {
      buttonRefp.current.style.background = "rgb(27,188,155)";
    }, 500);
  };
  const handleGooglesubmitclick = (data1) => {
    console.log(data1, "hello");
    let { name, email, imageUrl } = data1;
    let arr = [{ Name: name, Email: email, imageurl: imageUrl }];
    localStorage.setItem("gprofile", JSON.stringify(arr));
  };
  const handleGoogleSubmit = (data) => {
    handleGooglesubmitclick(data);
    handleGoogleData();
  };

  if (loginPageR) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className={styles.banner}>
        <div onClick={handleShow}>
          <span>Personal</span>{" "}
          <span
            style={{ background: personal ? "white" : "transparent" }}
          ></span>
        </div>
        <div onClick={handleShow}>
          <span>Education</span>{" "}
          <span
            style={{ background: !personal ? "white" : "transparent" }}
          ></span>
        </div>
      </div>
      {/* second div */}
      {personal ? (
        <div style={{ display: "flex" }}>
          <div className={styles.personal}>
            <div>
              <p>Name </p>
              <input
                onChange={handleChangen}
                type="text"
                name="Name"
                placeholder="Enter your full name"
                ref={NameInput}
              />
            </div>
            <div>
              <p>
                Email ID<span>*</span>{" "}
              </p>
              <input
                onChange={handleChangen}
                type="text"
                name="Email"
                placeholder="Enter your active email  to recieve relevent job updates"
                ref={EmailInput}
              />
            </div>
            <div>
              <p>
                Create Password <span>*</span>{" "}
              </p>
              <input
                onChange={handleChangen}
                type="password"
                name="Password"
                placeholder="Minimum 6 characters"
              />
            </div>
            <div>
              <p>
                Mobile Number <span>*</span>{" "}
              </p>
              <input
                onChange={handleChangen}
                type="text"
                minLength="10"
                maxLength="10"
                name="MobileNumber"
                placeholder="Where recruiter to contact you"
              />
            </div>
            <div>
              <p>
                Current City <span>*</span>{" "}
              </p>
              <input
                onChange={handleChangen}
                type="text"
                name="City"
                placeholder="Tell us about your current city"
              />
            </div>
            <div>
              <p>Upload Your Image </p>
              <input
                style={{ display: "none" }}
                ref={fileRefp}
                onChange={(e) => {
                  handleChangefp(e);
                }}
                type="file"
              />
              <button
                ref={buttonRefp}
                onClick={handleUploadp}
                style={{
                  background: "rgb(27,188,155)",
                  border: "none",
                  color: "white"
                }}
              >
                {" "}
                Upload Image
              </button>
            </div>
            <div>
              <p>Upload Resume </p>
              <input
                style={{ display: "none" }}
                ref={fileRef}
                onChange={(e) => {
                  handleChangef(e);
                }}
                type="file"
              />
              <button
                ref={buttonRef}
                onClick={() => {
                  console.log("clicked ");
                  handleUpload();
                }}
                style={{
                  background: "rgb(27,188,155)",
                  border: "none",
                  color: "white"
                }}
              >
                {" "}
                Upload Resume
              </button>
            </div>
            <div style={{ marginLeft: "0%" }}>
              {" "}
              <input type="checkbox" />
              <span style={{ marginLeft: "-20%" }}>
                I agree to the <span>Terms and Conditions </span> and{" "}
                <span>Privacy Policy </span> governing the use of Naukri.com
              </span>
            </div>
            <div
              onClick={() => {
                // handleSubmit();
                handleShow();
              }}
            >
              <span>Register Now</span>
            </div>
          </div>

          {/* another educ */}
          <div>
            <p> OR Fill my details from </p>
            <div>
              <GoogleLogin101 handleGoogleSubmit={handleGoogleSubmit} />
            </div>
          </div>
        </div>
      ) : (
        <Education handleChangen={handleChangen} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
