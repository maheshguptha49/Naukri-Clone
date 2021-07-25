import { Link } from "react-router-dom";
import styled from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styled.container}>
      <div className={styled.InputBox}>
        <h2>Find A Job at India's No.1 Job Site</h2>
        <form>
          <input type="text" placeholder="Skills,Designations,Companies" />
          <input type="text" placeholder=" Enter Location..." />
          <button>Search</button>
        </form>
      </div>
      <div className={styled.SmallDiv}>
        <h4>Get Personalised Jobs !!!!!</h4>
        <p>
          Tell us what kind of a job you are looking out for and stay updated
          with latest opportunities{" "}
        </p>
        <Link to="/register" style={{ textDecoration: "none" }}>
          {" "}
          <button>Register </button>{" "}
        </Link>{" "}
        <br></br>
      </div>
    </div>
  );
}
