 
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/HomeNavbar";

import LoginPage from "./LoginPage/LoginPage";

import Main from "./Components/midComponents/Main";


 

function App() {
  return (
    <div className="App">
       <Navbar /> 
      {/* < Home /> */}
      <LoginPage />
      <Main />
      
    </div>
  );
}

export default App;
