import React, { useRef } from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  popover: {
    // pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

export default function ForEmployers() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const anchorElement = useRef();

  const handlePopoverOpen = (elementRef) => {
    setAnchorEl(elementRef.current);
  };

  const handlePopoverClose = () => {
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
        FOR EMPLOYERS
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
        onMouseEnter={() => handlePopoverOpen(anchorElement)}
        onMouseLeave={handlePopoverClose}
        disableRestoreFocus
      >
        <div
          onMouseEnter={() => handlePopoverOpen(anchorElement)}
          onMouseLeave={handlePopoverClose}
        >
          <a>Buy Online</a>
          <br />

          <a>Employer Login</a>
        </div>
      </Popover>
    </div>
  );
}
