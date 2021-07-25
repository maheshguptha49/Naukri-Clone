import { useState } from "react";
import { PopUp } from "./ApplyPop";
import styled from "./LoginPage.module.css";
export function Test({ Item }) {
  const [apply, setApply] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function Apply() {
    if (!apply) {
      setApply(true);
      setOpen(true);
    }
  }

  return (
    <div key={Item.id} className={styled.image} style={{ margin: "20px 0" }}>
      <div>{apply ? "applied" : null}</div>
      <PopUp
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        Item={Item}
      />
      <h3 style={{ marginLeft: "0px" }}>
        {Item.rec !== undefined ? Item.rec : null}
      </h3>
      <img
        style={{
          float: "right",
          width: "80px ",
          height: "80px "
        }}
        src={Item.image}
        alt=""
      />
      <h4>{Item.job}</h4>
      <p>{Item.name}</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSq39i9zrTEioIYOwYxEmpJUXvYz2Xmy_zw&usqp=CAU"
        alt=""
      />{" "}
      <span>
        {Math.floor(Math.random(2) * 3)} - to{" "}
        {Math.floor(Math.random(2) * 3 + 2)} Yrs
      </span>
      <br />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBFYrdBTWHU3W0JkOxuBaDTaEdZBEpCFfRw&usqp=CAU "
        alt=""
      />{" "}
      <small>{Item.location}</small>
      <br></br>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWz93g9V8xIS1yApm62ez9QTwVmNHxF-I5TZP8qDJn8HNlzfDh2hf0ZiYrhapRO6BV9TA&usqp=CAU"
        alt=""
      />{" "}
      <div
        className={styled.applyDiv}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>
          {Item.salaryMin} to {Item.salaryMax} P A
        </p>
        <p className={styled.apply} onClick={Apply}>
          {apply ? "you already Applied" : "Apply"}
        </p>
      </div>
    </div>
  );
}
