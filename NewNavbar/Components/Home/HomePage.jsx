

import styled from "./HomePage.module.css";

export default function HomePage() {
    


    return (
        <>
            <div className={ styled.SalesEnquiry}>
                <div></div>
                <div className={ styled.imageSection}>
                    <h5>NAUKRI EMPLOYER ZONE</h5>
                    <h4>Hiring is Simpler, Smarter & Faster with naukri</h4>

                    <img src="https://static.naukri.com/s/7/1290/i/homepage-banner.f33d0942.png" alt="" />
                </div>
                <div className={styled.InputForm}>
                    <div className={styled.TopOption}>
                            <a>Sales Enquiry</a>
                            <a>Login/Register</a>
                     </div>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="number" placeholder="Mobile Number"/>
                        <input type="text"  placeholder="Company Name"/>
                        <input type="email" placeholder="Email Id"/>
                        <input type="text" placeholder="City"/>
                        <div className={styled.selectors}>
                            <select>
                            <option value=""></option>
                            <option value="">I am Looking For Recruiter solution</option>
                            <option value="">I am Jobseeker</option>
                        </select>
                         </div>
                         
                        <div className={styled.checkBox}>
                             <input  type="checkbox" /> <span>Get a callBack</span><br />
                        </div>

                        <div className={styled.but}>
                             <button>Get A Call</button>
                        </div>
                        
                    </form>
                </div>
                <div></div>


                {/*<<<<<<<<<<============= Midd section Of Home Page ===========>>>>>>>> */}
                <section>

                </section>
           </div>
            </>
    )
}