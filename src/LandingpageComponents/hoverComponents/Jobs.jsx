import React, {useRef} from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from "./morePage.module.css";

const useStyles = makeStyles((theme) => ({
  popover: {
    // pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function Jobs() {
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
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={()=>handlePopoverOpen(anchorElement)}
        onMouseLeave={handlePopoverClose}
      >
        JOBS
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        onMouseEnter={()=>handlePopoverOpen(anchorElement)}
        onMouseLeave={handlePopoverClose}
        disableRestoreFocus
      >
        
        <div className={styled.jobs} onMouseEnter={()=>handlePopoverOpen(anchorElement)}
        onMouseLeave={handlePopoverClose}>

          <div>
            
            <p>Search jobs</p>
            <p>Advanced Search</p>
            <p>Create Free job Alert</p>
            <p>Register Now</p>
          </div>

          <div>
            <p>Jobs by Location</p>
             <p>Job by Skill</p>
            <p>Jobs by Designation</p>
            <p>Job by Company</p>
            <p>Jobs by Category</p>
            <p>Browse All Jobs</p>
          </div>
        </div>
         

      </Popover>
    </div>
  );
}
