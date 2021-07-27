import { useRef, useState } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import LoginPage from "./AfterLoginComponents/LoginPage";
import { Homepage } from "./LandingPage/Home";
import { LogininLpage } from "./LoginComponents/Login";
import { Register } from "./RegisterComponents/Register";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/loginPage">
          <LoginPage />
        </Route>
      </Switch>
      {/* <Register/> */}
    </div>
  );
}
