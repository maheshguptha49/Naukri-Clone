 

import styled from "./Home.module.css";

import Products from "./Products";

import SalesEnquiry from "./SalesEnquiry";
import HomePage from "./HomePage";

export default function Home(){
    return (
        <>
            <div className={ styled.navBar }>

                <div></div>

                <div className={ styled.image}>
                    <img src="https://static.naukri.com/s/4/100/i/naukri_Logo.png" alt="" />
                </div>

                <div className={styled.homeProduct}>
                     
                    <ul>
                        <li><a>Home</a></li>
                        <li> <Products /></li>
                    </ul>
                </div>

                <div></div>

                <div className={ styled.callSection}>
                    <small>India Sales Toll Free(9:30 Am to 6:30PM)</small><br />
                    <small>< SalesEnquiry /> </small>
                     
                </div>

                <div className={styled.cart}>
                   <a href="https://">Cart</a>
                    <a  href="https://">Jobseeker</a>
                </div>
                
            </div>
             <HomePage />
        </>
    );
}
