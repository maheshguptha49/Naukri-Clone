import { useEffect, useRef, useState } from "react";
import { FooterL } from "../FooterComponents/Footer";
import Navbar from "../LandingpageComponents/Navbar";
import { LogininLpage } from "../LoginComponents/Login";
import Main from "./midComponents/Main.jsx";
import styles from "./Home.module.css";
import { sendToLocal } from "../AfterLoginComponents/postData";
export function Homepage() {
  const [loginpopup, setLoginpopup] = useState(false);
  var count = 0;
  useEffect(() => {
    if (count === 0) {
      // localStorage.clear();
      count++;
    }
    sendToLocal();
  }, [count]);
  const handleLoginpopup = () => {
    setLoginpopup(true);
  };
  const handleLoginpopupClose = () => {
    setLoginpopup(false);
  };
  return (
    <div>
      <Navbar handleLoginpopup={handleLoginpopup} afterlogin={false} />
      <Main />
      <FooterL />
      {loginpopup ? (
        <div className={styles.loginpage}>
          <LogininLpage handleLoginpopupClose={handleLoginpopupClose} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
