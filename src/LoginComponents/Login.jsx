import { useState } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { GoogleLogin101 } from "./Googlelogin101";
import styles from "./Login.module.css";
export function LogininLpage({ handleLoginpopupClose }) {
  const [formData, setFormdata] = useState({});
  const [loginerror, setLoginerror] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loginPageR, setLoginPageR] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };
  const handleGooglesubmit = (data) => {
    console.log(data, "hello");
    let { name, email, imageUrl } = data;
    let arr = [{ Name: name, Email: email, imageurl: imageUrl }];
    localStorage.setItem("gprofile", JSON.stringify(arr));
    setRedirect(true);
  };
  const handleSubmit = () => {
    let bool = false;
    let arr = localStorage.getItem("rprofiles");
    if (arr !== null) {
      arr = JSON.parse(arr);
      for (let i = 0; i < arr.length; i++) {
        if (
          arr[i].Email === formData.Email &&
          arr[i].Password === formData.Password
        ) {
          console.log("succesful login");
          setLoginerror("");
          bool = true;
          setLoginPageR(true);
          break;
        }
      }
      if (!bool) {
        setLoginerror("Please enter correct details");
      }
    } else {
      setLoginerror("please register first ");
    }
  };

  if (redirect) {
    return <Redirect to="./register" />;
  }
  if (loginPageR) {
    return <Redirect to="./loginpage" />;
  }
  return (
    <div className={styles.cont1}>
      <div
        style={{ cursor: "pointer", marginTop: "20px" }}
        onClick={handleLoginpopupClose}
      >
        X
      </div>
      <div>
        <div>Login</div>
        <div
          onClick={() => {
            setRedirect(true);
          }}
        >
          Register for free
        </div>
      </div>
      <div>
        <div>Email ID / Username</div>
        <div>
          <input
            type="text"
            placeholder="Enter your Email ID/Username"
            name="Email"
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <div>Password</div>
        <div>
          {" "}
          <input
            name="Password"
            type="password"
            placeholder="Enter your Password"
            onChange={handleChange}
          />
        </div>
        <div>
          Forgot Password?
          <p style={{ color: "red" }}>{loginerror}</p>
        </div>
      </div>
      <div>
        <div onClick={handleSubmit}>
          <button>Login</button>
        </div>
        <div>Use OTP to Login</div>
      </div>
      <div>
        <span>or</span>
      </div>
      <div>
        <div>
          <GoogleLogin101 handleGoogleSubmit={handleGooglesubmit} />
        </div>
        <div>
          {" "}
          <img
            src="https://i.pinimg.com/564x/63/a2/31/63a231592efca78f2bcbc02267eb37be.jpg"
            alt=""
          />{" "}
          <span className={styles.fclass}>Sign in With Facebook</span>{" "}
        </div>
      </div>
    </div>
  );
}
