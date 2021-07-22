import { useState } from "react"
import { GoogleLogin101 } from "./Googlelogin101"
import styles from './Login.module.css'
export function LogininLpage() {

  const [formData, setFormdata] = useState({})
  const handleChange = (e) => {
    let { name, value } = e.target
    setFormdata({ ...formData,[name]:value })
  }
  const handleGooglesubmit = (data) => {
    console.log(data,"hello")
  }
  const handleSubmit = () => {
    console.log(formData)
  }
  return <div className={styles.cont1}>
    <div>X</div>
    <div>
      <div>Login</div>
      <div>Register for Free</div>
    </div>
    <div>
      <div>Email ID / Username</div>
      <div>
        <input type="text" placeholder="Enter your Email ID/Username" name="username" onChange={handleChange}/>
      </div>
    </div>
    <div>
      <div>Password</div>
      <div> <input name="password" type="password" placeholder="Enter your Password" onChange={handleChange}/></div>
      <div>Forgot Password?</div>
    </div>
    <div>
      <div onClick={handleSubmit} ><button >Login</button></div>
      <div>Use OTP to Login</div>
    </div>
    <div ><span>or</span></div>
    <div>
      <div><GoogleLogin101 handleGoogleSubmit={handleGooglesubmit} /></div>
      <div> <img src="https://i.pinimg.com/564x/63/a2/31/63a231592efca78f2bcbc02267eb37be.jpg" alt="" /> <span className={styles.fclass}>Sign in With Facebook</span> </div>
    </div>
  </div>
}