import Jobs from "./hoverComponents/Jobs";

import Recruiter from "./hoverComponents/Recruiter";
import Tools from "./hoverComponents/Tools";
import Companie from "./hoverComponents/Companie";

import Services from "./hoverComponents/Services";

import More from "./hoverComponents/More";

import Login from "./hoverComponents/Login";

import ForEmployers from "./hoverComponents/ForEmployers";

import styled from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Navbar({ handleLoginpopup }) {
  return (
    <>
      <div className={styled.flexContainer}>
        <div className={styled.imgTag}>
          <Link to="./" style={{ cursor: "pointer" }}>
            <img
              src="https://static.naukri.com/s/4/100/i/naukri_Logo.png"
              alt="j"
            />
          </Link>
        </div>

        <div className={styled.flexItemLeft}>
          <ul>
            <li>
              <span href="#">
                {" "}
                <Jobs />{" "}
              </span>
            </li>
            <li>
              <span href="#">
                {" "}
                <Recruiter />{" "}
              </span>
            </li>
            <li>
              <span href="#">
                {" "}
                <Tools />
              </span>
            </li>
            <li>
              <span href="#">
                <Companie />{" "}
              </span>
            </li>
            <li>
              <span href="#">
                <Services />{" "}
              </span>
            </li>
            <li>
              <span href="#">
                <More />{" "}
              </span>
            </li>
            <li>
              <span href="#">
                {" "}
                <Login handleLoginpopup={handleLoginpopup} />
              </span>
            </li>
          </ul>
        </div>

        <div className={styled.flexItemRight}>
          <span href="#">
            <ForEmployers />{" "}
          </span>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
    </>
  );
}
