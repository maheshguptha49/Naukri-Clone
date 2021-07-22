import { useRef, useState } from "react";
import { GoogleLogin101 } from "../Logincomponents/Googlelogin101";
import { Education } from "./Education";
import styles from "./Register.module.css";

export function Register() {
  const fileRef = useRef();
  const buttonRef = useRef();
  const [resumeurl, SetResumeurl] = useState();
  const [formData, setFormdata] = useState({});
  const [file, setMyfile] = useState("");
  const [filep, setMyfilep] = useState("");

  const [personal,SetPersonal]=useState(true)
  const handleShow=()=>{
    SetPersonal(personal?false:true)
  }
  var obj={}
  const urlConverter = (file,url) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        let data=reader.result
        console.log('readed',url)
       obj[url]=data
      }
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = () => {
    let urlp='imageurl'
    let url='resumeurl'
    if(filep!==""){
      urlConverter(filep,urlp)
    }
    if(file!==""){
      urlConverter(file,url)
    }
  setTimeout(()=>{
      // console.log(obj,"submit set timeout function")
      let data=obj
      setFormdata({...formData,...data})   
    console.log(formData,'submit set timeout function');

  },1000)
  };
  const handleChangen = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };
  const handleChangef = (e) => {
    setMyfile(e.target.files[0]);
  };
  const handleUpload = () => {
    fileRef.current.click();
    buttonRef.current.style.background = "#fcfcfc";
    setTimeout(()=>{
      buttonRef.current.style.background = "rgb(27,188,155)";
    },500)
  };
// refp////////////
  const fileRefp=useRef()
  const buttonRefp=useRef()
  const handleChangefp = (e) => {
    setMyfilep(e.target.files[0]);
  };
  
  const handleUploadp = () => {
    fileRefp.current.click();
    buttonRefp.current.style.background = "#fcfcfc";
    setTimeout(()=>{
      buttonRefp.current.style.background = "rgb(27,188,155)";
    },500)
  };
  return (
    <div>
      <div className={styles.banner}>
        <div onClick={handleShow}>
          <span>Personal</span> <span style={{background:personal?'white':'transparent'}}></span>
        </div>
        <div onClick={handleShow}>
          <span>Education</span > <span style={{background:!personal?'white':'transparent'}}></span>
        </div>
      </div>
      {/* second div */}
     {
       personal?
     <div style={{display:'flex'}}>
        <div className={styles.personal}>
          <div>
            <p>Name </p>
            <input
              onChange={handleChangen}
              type="text"
              name="Name"
              placeholder="Enter your full name"
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
              onChange={handleChangefp}
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
              onChange={handleChangef}
              type="file"
            />
            <button
              ref={buttonRef}
              onClick={handleUpload}
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
          <div style={{marginLeft:'0%'}}>
            {" "}
            <input type="checkbox" />
            <span style={{marginLeft:'-25%'}}>
              I agree to the <span>Terms and Conditions </span> and{" "}
              <span>Privacy Policy </span> governing the use of Naukri.com
            </span>
          </div>
          <div onClick={()=>{
            handleSubmit()
            handleShow()
          }}>
            <span>Register Now</span>
          </div>
        </div>

        {/* another educ */}
        <div >
            <p> OR Fill my details from </p>
            <div> <GoogleLogin101/> </div>
        </div>
      </div>
     :<Education handleChangen={handleChangen} handleSubmit={handleSubmit}/>}
    </div>
  );
}
