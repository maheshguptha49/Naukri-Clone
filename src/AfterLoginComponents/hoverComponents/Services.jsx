import React,{useRef} from 'react';
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

export default function SERVICE() {
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
        SERVICE
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
           <div className={styled.morePage} onMouseEnter={()=>handlePopoverOpen(anchorElement)}
        onMouseLeave={handlePopoverClose}>
                  <div>
                      <h4>Resume Writing</h4>
                      <p>Text Resume</p>
                      <p>Resume Quality Score-Free</p>
                      <p>Resume Samples</p>
                      
                       
                          <h4>Jobs For You</h4>
                          <p>Jobs4U</p>
                           
                     
                  </div>
                  <div>
                      <h4>Recruiter Reach</h4>
                      <p>Resume Display</p>
                      <p>Recruiter Connection</p>
                      <p>Priority Aplicant</p>
                      <h4>Other</h4>
                      <p>Help/FAQ</p>
                      <p>Career Advice</p>
                      <p>Contact Us</p>
                      <h4>Monthly Subscriptions</h4>
                      <p>Basic & Premium Plans</p>
                  </div>
                  <div>
                      <h4>Certifications</h4>
                      <p>Data Science</p>
                      <p>Machine Learning</p>
                      <p>Big Data</p>
                      <p>Programming</p>
                      <p>Busness Analytics</p>
                      <p>Project Management</p>
                      <p>Web Design</p>
                      <p>Marketing</p>
                      <p>Banking</p>
                      <p>Logistics and Supply Chain</p>
                  </div>
        </div>
      </Popover>
    </div>
  );
}
