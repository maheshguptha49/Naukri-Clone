
 
import Jobs from "./hoverComponents/Jobs";

import Recruiter from "./hoverComponents/Recruiter";
import Tools from "./hoverComponents/Tools";
import Companie from "./hoverComponents/Companie";

import Services from "./hoverComponents/Services";

import More from "./hoverComponents/More";

import Login from "./hoverComponents/Login";

import ForEmployers from "./hoverComponents/ForEmployers";
 
import styled from "./Navbar.module.css";
import SearchBar from "./SearchBar";

export default function Navbar() {
    

    return <>
        
        <div className={styled.flexContainer}>
            
            <div className={styled.imgTag}>

                <img src="https://static.naukri.com/s/4/100/i/naukri_Logo.png" />
            </div>
            

            <div className={styled.flexItemLeft}>
                 <ul>
                 <li><a  href="https://"> <Jobs /> </a></li>
                 <li><a  href="https://"> <Recruiter /> </a></li>
                 <li><a  href="https://"> <Tools /></a></li>
                  <li><a  href="https://"><Companie /> </a></li>
                 <li><a  href="https://"><Services /> </a></li>
                 <li><a  href="https://"><More /> </a></li>
                 <li><a href="https://"> <Login /></a></li>
                    
            </ul>
            </div>

            <div className={styled.flexItemRight}>
                <a href="https://"><ForEmployers /> </a>
            </div>
             
        </div>
        <div>
            <SearchBar />
        </div>
        </>
    
}