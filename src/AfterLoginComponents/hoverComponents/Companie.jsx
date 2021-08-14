import React, { useRef } from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styled from "./morePage.module.css";

const useStyles = makeStyles((theme) => ({
  popover: {
    // pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

export default function COMPANIES() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const anchorElement = useRef();

  const handlePopoverOpen = (anchorElementRef) => {
    console.log("opening");
    setAnchorEl(anchorElementRef.current);
  };

  const handlePopoverClose = () => {
    console.log("closing");

    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        ref={anchorElement}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={() => handlePopoverOpen(anchorElement)}
        onMouseLeave={handlePopoverClose}
      >
        COMPANIES
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        onMouseEnter={() => handlePopoverOpen(anchorElement)}
        onMouseLeave={handlePopoverClose}
      >
        <div
          className={styled.cursorclass}
          onMouseEnter={() => handlePopoverOpen(anchorElement)}
          onMouseLeave={handlePopoverClose}
        >
          <p>Browser All Companies</p>
          <p>About Companies</p>
          <p>Interview Questions</p>
          <p>Write Company Review</p>
          <p>Write interview Advice</p>
          <p>Company Reviews</p>
          <p>Company Salaries</p>
        </div>
      </Popover>
    </div>
  );
}
