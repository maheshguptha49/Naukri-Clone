import GoogleLogin from "react-google-login";
export function GoogleLogin101({handleGoogleSubmit}) {

  const responseGoogle = (response) => {
    handleGoogleSubmit(response.profileObj)
  }
  return <div>
    <GoogleLogin
      clientId="540150846345-jnu1rjkv0th6rnl9l762ld83l0ceiuel.apps.googleusercontent.com"
      buttonText="Sign in With Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  </div>
}
//540150846345 - jnu1rjkv0th6rnl9l762ld83l0ceiuel.apps.googleusercontent.com
// google client id is above
//google secret key
// mXsv_s08Y4pk3szfft6hTlo -
