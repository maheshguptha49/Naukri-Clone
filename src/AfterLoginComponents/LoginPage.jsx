import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import styled from "./LoginPage.module.css";
import axios from "axios";
import { sendToLocal } from "./postData.js";
import { Test } from "./Test";
import { Link, useLocation } from "react-router-dom";
import { FooterL } from "../FooterComponents/Footer";
import { searchL, showResults } from "../LandingpageComponents/search";
import { v4 as uuid } from "uuid";
function GetFromLocal() {
  let arr = localStorage.getItem("jobsdata");
  if (arr !== null) {
    arr = JSON.parse(arr);
    if (arr.length !== undefined) {
      return arr;
    }
  }
  // console.log(data11)
}
const mainarr = GetFromLocal();
export default function LoginPage() {
  const [loginData, setLoginData] = useState({});
  const [data11, setData11] = useState([]);
  const [nqdata, setNQdata] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const inputref = useRef();
  const locationHook = useLocation();
  useEffect(() => {
    handleLogindata();
    setData11(GetFromLocal());
    handleParams();
  }, []);
  function handleParams() {
    if (!locationHook.search) {
      return;
    }
    let [nsearch, nlocation] = locationHook.search?.split("&&&");
    nsearch = nsearch.split("");
    let nsearch1 = "";
    for (let i = 9; i < nsearch.length; i++) {
      nsearch1 += nsearch[i];
    }
    nsearch1 = nsearch1.split("+");
    nsearch1 = nsearch1.join(" ");
    let nlocation1 = "";
    for (let i = 10; i < nlocation.length; i++) {
      nlocation1 += nlocation[i];
    }
    nlocation1 = nlocation1.split("+");
    nlocation1 = nlocation1.join(" ");
    let ans1 = showResults(nsearch1, mainarr, "job");
    let ans2 = showResults(nsearch1, mainarr, "name");
    let ans3 = showResults(nlocation1, mainarr, "location");
    let ans = [...ans1, ...ans2, ...ans3];
    setData11(ans);
  }

  function handleLogindata() {
    let arr = localStorage.getItem("rprofiles");
    if (arr !== null) {
      arr = JSON.parse(arr);
      setLoginData(arr[0]);
    }
  }
  function getJobsData() {
    let q = inputSearch;
    let ans1 = showResults(q, mainarr, "job");
    let ans2 = showResults(q, mainarr, "name");
    let ans3 = showResults(q, mainarr, "location");

    let ans = [...ans1, ...ans2, ...ans3];

    setData11(ans);
  }
  function handleChange(e) {
    let q = e.target.value;
    setInputSearch(e.target.value);
    let ans1 = searchL(q, mainarr, "job");
    let ans2 = searchL(q, mainarr, "name");
    let ans3 = searchL(q, mainarr, "location");
    let ans = [...ans1, ...ans2, ...ans3];
    setNQdata(ans);
  }
  function handleClick(data) {
    inputref.current.value = data;
    setNQdata([]);
  }
  return (
    <>
      <Navbar />
      <div className={styled.upper}>
        <div className={styled.inputBox}>
          <div>
            <input
              type="text"
              placeholder="Search by job skils"
              onChange={handleChange}
              ref={inputref}
            />
            <div style={{ display: nqdata.length > 0 ? "block" : "none" }}>
              {nqdata.map((item, ind) => {
                return (
                  <div
                    key={ind}
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              getJobsData();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className={styled.parent}>
        <div></div>

        {/* First Card =======>>>>>>>> */}

        <div className={styled.card}>
          <div className={styled.winner}>
            <img
              src="https://static.naukri.com/s/0/0/i/ambition_box.png"
              alt=""
            />

            <div>
              <h4>Winners Announced!</h4>
              <p>
                AmbitionBox Best Places to Work in India 2021, Employee Choice
                Awards
              </p>
            </div>
            <div>
              <button>View all winners</button>
            </div>
          </div>

          <h3>JOBS</h3>
          {data11.map((item) => {
            return <Test key={uuid()} Item={item} />;
          })}
          {/* Second card =======>>>>>>>>>>>>> */}

          <div className={styled.image}>
            <a href="https://">MANAGE ALERTS</a>
            <a href="https://">CREATE ALERTS</a>
            <h4> New Jobs in My Job Alerts</h4>
            <hr />
            <h4>Softaculous Ltd is hiring C++ Developer (Freshers) </h4>
            <p>Softaculous Ltd</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSq39i9zrTEioIYOwYxEmpJUXvYz2Xmy_zw&usqp=CAU"
              alt=""
            />{" "}
            <span>0-1 Years</span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBFYrdBTWHU3W0JkOxuBaDTaEdZBEpCFfRw&usqp=CAU "
              alt=""
            />{" "}
            <small>Mumbai,Mumbai Suburban,Dadar</small>
            <br></br>
            <img
              src="https://image.shutterstock.com/image-vector/vector-gear-reload-icon-arrow-260nw-1627674925.jpg"
              alt=""
            />
            <span> c++,jQuery,HTML,SQL</span>
            <br></br>
            <img
              src="https://static.thenounproject.com/png/3514602-200.png"
              alt=""
            />
            <span>
              {" "}
              Candidate must be good in C++ knowledge Proven experience in
              writing clean code,oberving...
            </span>{" "}
            <br></br>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWz93g9V8xIS1yApm62ez9QTwVmNHxF-I5TZP8qDJn8HNlzfDh2hf0ZiYrhapRO6BV9TA&usqp=CAU"
              alt=""
            />{" "}
            <span>200,000 - 300,000 PA</span>
            <a>Posted 3 days ago</a>
            {/* ========>>>>>>> 2nd Part =========>>>>>>>>>>> */}
            <div>
              <hr />
              <h4>Associate Principal Software D3evelopment Engineer</h4>
              <p>Ingram Micro</p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSq39i9zrTEioIYOwYxEmpJUXvYz2Xmy_zw&usqp=CAU"
                alt=""
              />{" "}
              <span>8-13 Years</span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBFYrdBTWHU3W0JkOxuBaDTaEdZBEpCFfRw&usqp=CAU "
                alt=""
              />{" "}
              <small>Mumbai</small>
              <br></br>
              <img
                src="https://image.shutterstock.com/image-vector/vector-gear-reload-icon-arrow-260nw-1627674925.jpg"
                alt=""
              />
              <span>
                {" "}
                KeyskillsJava,Software Development,C #,Sql
                Server,Javascript,Entity Framework,Mvc,Jquery,Asp . Net....
              </span>
              <br></br>
              <img
                src="https://static.thenounproject.com/png/3514602-200.png"
                alt=""
              />
              <span>
                JDBachelor s Degree in Computer Science or equivalent Hands-on
                experience with the construction of complex engineering
                solutions and ....
              </span>{" "}
              <br></br>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWz93g9V8xIS1yApm62ez9QTwVmNHxF-I5TZP8qDJn8HNlzfDh2hf0ZiYrhapRO6BV9TA&usqp=CAU"
                alt=""
              />{" "}
              <span>Not Disclosed</span>
              <a href="http://">VIEW ALL</a>
            </div>
          </div>

          {/* Aplication summary  saved job */}
          <div className={styled.aplication}>
            <div>
              <h3>Aplication Summary</h3>
              <hr></hr>

              <p>Daily Limit of Application:50</p>
            </div>
            <div>
              <h3>Saved Job(s)</h3>
              <hr></hr>
              <p>You Have 0 saved job(s) till Now.</p>
              <a href="https://">VIEW ALL</a>
            </div>
          </div>

          {/* Recruiters */}

          <div>
            <div
              style={{ marginTop: "15px", fontSize: "25px", fontStyle: "bold" }}
            >
              Recruiters
            </div>
            <div className={styled.recruiter}>
              <h3 style={{ paddingTop: "8px" }}>02 New Recruiter Messages</h3>

              <hr></hr>
              <h4>Winspark Innovations Learning Private Limited</h4>
              <p>Job | Job Opening for Inside Sales - Planet Spark-Edutech</p>

              <a href="https://">VIEW ALL</a>
            </div>
          </div>

          <div className={styled.cont}>
            <h3>Recruiter Connections</h3>
            <hr></hr>
            <div className={styled.connection}>
              <div>
                <h1>00</h1>
                <h1>00</h1>
              </div>
              <div>
                <p>Credits</p>
                <p>Purched</p>
                <p>Credits </p>
                <p>Remaining</p>
              </div>
              <div className={styled.but}>
                <p>
                  Buy recruiter connections credits to contact more recruiters
                  hiring in your domain.
                </p>
                <button>BUY CREDITS</button>
              </div>
            </div>
            <a href="http://">VIEW ALL</a>
          </div>

          {/*<<<<<<<<<<<<<<<<================ Bouutom card =========================>>>>>>>>>>>>> */}

          <div className={styled.box}>
            <h3>Recruiters hiring for candidates like you</h3>
            <hr></hr>

            <div className={styled.buttom}>
              <div>
                <img
                  src="https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1499076882rp3258852_medium4"
                  alt=""
                />
              </div>
              <div>
                <h3>Jeri Prince</h3>
                <p>HCL Technologies Limited Bengaluru /Bangalore</p>
              </div>
              <div className={styled.ancer}>
                <a href="https://">SEND MESSAGE</a>
              </div>
              <div>
                <button>FOLLOW</button>
              </div>

              <div>
                <img
                  src="https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1467699918rp2805384_medium4"
                  alt=""
                />
              </div>
              <div>
                <h3>Swapnil Shukla</h3>
                <p>
                  Amazon Development Centre India Private Limited Hyderabad /
                  Secunderabad
                </p>
              </div>
              <div className={styled.ancer}>
                <a href="https://" alt="">
                  SEND MESSAGE
                </a>
              </div>
              <div>
                <button>FOLLOW</button>
                <a href="https://">VIEW ALL</a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Part Stareted ========>>>>>>>>>> */}

        <div className={styled.profile}>
          <div className={styled.ProfileCard}>
            <img src={loginData.imageurl} alt="" />
            <h3>{loginData.Name}</h3>
            <p>
              {loginData.Course + " " + loginData.Specialization} from{" "}
              {loginData.University}
            </p>

            <div className={styled.performance}>
              <a href="https://n" alt="">
                Profile Completeness(Excellent){" "}
              </a>{" "}
              <a href="http://">92%</a>
            </div>
            <div className={styled.bar1}>
              <div className={styled.bar}></div>
            </div>
            <div className={styled.details}>
              <p>01 Details missing</p>
              <a href="https://n" alt="">
                ADD DETAILS
              </a>
            </div>

            <div id={styled.but}>
              <button>UPDATE PROFILE</button>
            </div>

            <small>Profile Performance</small>
            <div className={styled.twoBox}>
              <div>
                <bold>0</bold>
                <p>Search Appearancess</p>
              </div>
              <div>
                <bold>2</bold>
                <p>Recruiter actions</p>
              </div>
            </div>

            <div className={styled.last}>
              <small>Get porfessional help to increase cv views.</small>
            </div>
          </div>

          {/* Card 2 Of Row 2 */}

          <div className={styled.TopCompanies}>
            <h3>Top Companies Hiring</h3>
            <hr></hr>
            <div>
              <a href="https://companies.naukri.com/idctechnologies-jobs/">
                <img
                  src="https://companies.naukri.com/idctechnologies-jobs/wp-content/uploads/sites/864/2014/06/logo1.gif"
                  alt=""
                />
              </a>
            </div>

            <div className={styled.IDC}>
              <div>
                <a href="https://" alt="">
                  Aveva
                </a>
                <br></br>
                <a href="https://" alt="">
                  Calyx
                </a>
                <br></br>
                <a href="https://" alt="">
                  CrowdStrike
                </a>
                <br></br>
                <a href="https://" alt="">
                  Healthedge Technology
                </a>
                <br></br>
                <a href="https://" alt="">
                  IHS Markit
                </a>
                <br></br>
                <a href="https://" alt="">
                  Newgen Software
                </a>
                <br></br>
                <a href="https://" alt="">
                  Pegasystems
                </a>
                <br></br>
                <a href="https://" alt="">
                  Seclore
                </a>
                <br></br>
                <a href="https://" alt="">
                  Sophos
                </a>
                <br></br>
                <a href="https://" alt="">
                  TIBCO Software
                </a>
                <br></br>
              </div>
              <div>
                <a href="https://" alt="">
                  Bentley
                </a>
                <br></br>
                <a href="https://" alt="">
                  CDK Global(INDIA)
                </a>
                <br></br>
                <a href="https://" alt="">
                  Druva Data solution
                </a>
                <br></br>
                <a href="https://" alt="">
                  Hexagon
                </a>
                <br></br>
                <a href="https://" alt="">
                  ION Trading
                </a>
                <br></br>
                <a href="https://" alt="">
                  Paysafe
                </a>
                <br></br>
                <a href="https://" alt="">
                  Saama Technology
                </a>
                <br></br>
                <a href="https://" alt="">
                  Sierra Cedar
                </a>
                <br></br>
                <a href="https://" alt="">
                  SOTI India
                </a>
                <br></br>
                <a href="https://" alt="">
                  Vertafore India Pvt.
                </a>
                <br></br>
              </div>
            </div>
            <div id={styled.tag}>
              <a href="https://">VIEW ALL</a>
            </div>
          </div>

          {/* Card 3rd Of Left Row */}

          <div className={styled.thirdCard}>
            <a href="https://">
              <img
                src="https://static.naukri.com/s/4/123/i/ffLogo.png"
                alt=""
              />{" "}
            </a>

            <div>
              <h5>Naukri Services you might be interested in</h5>
            </div>
            <div>
              <h5>Be a Priority Applicant</h5>
              <p>
                Increase your chances of getting shortlisted for the applied
                jobs and receiving calls from recruiters.
              </p>
              <a href="https://"> KNOW MORE</a>
            </div>

            <div>
              <h5>Increase your visibility by up to 3 times</h5>
              <p>
                Get your profile marked as 'Featured' and get a higher rank when
                recruiters search for resumes.
              </p>
              <a href="https://">KNOW MORE</a>
            </div>

            <div>
              <small>Call 1800-572-5557 now! (Toll-free)</small>
            </div>
          </div>

          {/* Fourth card of Left Row =======>>>>>>>>>>> */}

          <div className={styled.fourthCard}>
            <h3>FAQ</h3>
            <hr></hr>
            <div>
              <p>
                <a href="https://www.naukri.com/faq/job-seeker">Click Here</a>{" "}
                For frequently asked questions.
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <FooterL />
    </>
  );
}
