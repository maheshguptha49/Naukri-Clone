import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
// import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "0px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    outline: 0
  }
}));
export function PopUp({ Item, open, handleClose, handleOpen }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Congratulations!</h2>
      <p id="simple-modal-description">
        You have applied for {Item.job} in{" "}
        <span style={{ fontWeight: "550" }}>{Item.name} </span> Company
        <br />
        We will get back to You shortly keep smiling and hope for the best:)
      </p>
    </div>
  );
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
