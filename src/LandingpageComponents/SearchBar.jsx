import { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { searchL } from "./search";
import styled from "./SearchBar.module.css";
export function getLsdata(key) {
  let arr = localStorage.getItem(key);
  if (arr === null) {
    return null;
  }
  arr = JSON.parse(arr);
  return arr;
}
export default function SearchBar() {
  const [jobsdata, setJobsdata] = useState([]);
  const [qdata, setQdata] = useState([]);
  const [nqdata, setNQdata] = useState([]);
  const nInput = useRef();
  const lInput = useRef();
  const [nsearch, setNsearch] = useState("");
  const [nlocation, setNlocation] = useState("");
  const history = useHistory();
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
    setNsearch(e.target.value);
  }
  function handleChangeL(e) {
    let q = e.target.value;
    let ans = searchL(q, jobsdata, "location");
    setQdata(ans);
    setNlocation(e.target.value);
  }
  const handleClickL = (data) => {
    lInput.current.value = data;
    // setNlocation(data);
  };
  const handleClickN = (data) => {
    nInput.current.value = data;
    setNsearch(data);
  };

  function handleSearch() {
    let arr = getLsdata("rprofiles");
    if (!arr) {
      alert("please login first");
      return;
    }
    let f = nsearch;
    let g = nlocation;
    if (f === "") {
      f = "empty";
    }
    if (g === "") {
      g = "empty";
    }
    f = nsearch.split(" ");
    f = f.join("+");
    setNsearch(f);
    g = nlocation.split(" ");
    g = g.join("+");
    setNlocation(g);
    history.push(`/loginpage?nsearch=${f}&&&nloaction=${g}`);
  }
  return (
    <div className={styled.container}>
      <div className={styled.InputBox}>
        <h2>Find A Job at India's No.1 Job Site</h2>
        <form onSubmit={(e) => e.preventDefault()}>
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
          <button onClick={handleSearch}>Search</button>
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
