import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { searchL } from "./search";
import styled from "./SearchBar.module.css";

export default function SearchBar() {
  const [jobsdata, setJobsdata] = useState([]);
  const [qdata, setQdata] = useState([]);
  const [nqdata, setNQdata] = useState([]);
  const nInput = useRef();
  const lInput = useRef();
  useEffect(() => {
    let data = getData();
    setJobsdata(data);
  }, []);
  function getData() {
    let arr = localStorage.getItem("jobsdata");
    if (arr !== null) {
      arr = JSON.parse(arr);
      return arr;
    }
  }
  function handleChangeN(e) {
    let q = e.target.value;
    let ans1 = searchL(q, jobsdata, "job");
    let ans2 = searchL(q, jobsdata, "name");
    let ans = [...ans1, ...ans2];
    setNQdata(ans);
  }
  function handleChangeL(e) {
    let q = e.target.value;
    let ans = searchL(q, jobsdata, "location");
    setQdata(ans);
  }
  const handleClickL = (data) => {
    lInput.current.value = data;
  };
  const handleClickN = (data) => {
    nInput.current.value = data;
  };
  return (
    <div className={styled.container}>
      <div className={styled.InputBox}>
        <h2>Find A Job at India's No.1 Job Site</h2>
        <form>
          <div className={styled.searchBox}>
            <div>
              <input
                type="text"
                style={{ padding: "0 12px" }}
                placeholder="Skills,Designations,Companies,Exp"
                onChange={handleChangeN}
                ref={nInput}
              />
              <div style={{ display: nqdata.length > 0 ? "block" : "none" }}>
                {nqdata.map((item, d) => {
                  return (
                    <div
                      key={d}
                      onClick={() => {
                        handleClickN(item);
                        setNQdata([]);
                      }}
                    >
                      {" "}
                      {item}{" "}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styled.searchBox}>
            <div>
              <input
                type="text"
                style={{ padding: "0 12px" }}
                placeholder=" Enter Location..."
                onChange={handleChangeL}
                ref={lInput}
              />
              <div style={{ display: qdata.length > 0 ? "block" : "none" }}>
                {qdata.map((item, d) => {
                  return (
                    <div
                      key={d}
                      onClick={() => {
                        handleClickL(item);
                        setQdata([]);
                      }}
                    >
                      {" "}
                      {item}{" "}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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
