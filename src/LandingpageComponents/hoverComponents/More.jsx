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

export default function MORE() {
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
       MORE
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
              <div className={styled.morePage}  onMouseEnter={()=>handlePopoverOpen(anchorElement)}
        onMouseLeave={handlePopoverClose}>
                  <div>
                      <h4>Career Tools</h4>
                      <p>Naukri Blog</p>
                      <p>FAQ</p>
                      <p>Take Home Calculator</p>
                      
                      
                          <h4>Study Abrod</h4>
                          <p>MBA</p>
                          <p>MS</p>
                          <p>SOP</p>
                          <p>GMAT</p>
                          <p>IELTS</p>
                       
                  </div>
                  <div>
                      <h4>Top Courcses & Colleges</h4>
                      <p>MBA</p>
                      <p>MBA College In India</p>
                      <p>Top MBA Colleges</p>
                      <p>Engineering</p>
                      <p>Top Engineering Colleges</p>
                      <p>BBA/BBM</p>
                      <p>BHM</p>
                      <p>BCA,DCA,BSc,CS/IT</p>
                  </div>
                  <div>
                      <h4>TOP EXAMS</h4>
                      <p>JEE Main</p>
                      <p>JEE Advanced</p>
                      <p>BCECE</p>
                      <p>GATE</p>
                      <p>CAT</p>
                      <p>SNAP</p>
                      <p>MAT</p>
                      <p>NEET</p>
                      <p>SBI PO</p>
                      <p>IBPS PO</p>
                  </div>
        </div>
      </Popover>
    </div>
  );
}
