import Sec from "./Sec";
import styled from "./Main.module.css";
import { useState } from "react";
import It from "./It";
import Manuf from "./Manufac";
import Services from "./Services";

export default function Main() {
  const [showdiv, setShowdiv] = useState("Sec");
  const handleShow = (data) => {
    setShowdiv(data);
  };
  return (
    <>
      <div className={styled.Up}>
        <img
          src="https://company.naukri.com/homepage21/synechron-ns-tp-15jan2020.gif"
          alt=""
        />
        <img
          src="https://company.naukri.com/homepage21/hcl-rs-tp-4june2021.gif"
          alt=""
        />
        <img
          src="https://company.naukri.com/homepage21/genpact-vk-tp-2feb2021.gif"
          alt=""
        />
        <img
          src="https://company.naukri.com/homepage21/cognizant-hs-tp-21sep2018.gif"
          alt=""
        />
        <img
          src="https://company.naukri.com/homepage21/covance-cl-tp-24jun2021.gif"
          alt=""
        />

        <img
          src="https://company.naukri.com/homepage21/fis-rs-tp-11may2021.gif"
          alt=""
        />
      </div>

      <div className={styled.container} id={styled.cont}>
        <div></div>

        <div className={styled.Image} id={styled.LeftImage}>
          <img
            src="https://company.naukri.com/homepage21/cognizant-hs-tp-21sep2018.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/virtusa-ns-tp-29nov2019.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/jio-vk-tp-24dec2021.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/techmahindra-rs-tp-16jul2021.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/lti-ak-tp-24mar2020.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/Incedo-vk-tp-6mar2021.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/xoriant-rs-tp-26apr2021.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/accolite-rs-tp-12jul2021.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/oracle-ns-tp-24june2020.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/amat-cl-tp-20june2020.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/airtel-cl-tp-11mar2021.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/technosoft-vs-tp-19nov2020.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/mphasis-ns-tp-14may2018.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/lnt-cl-tp-11mar2021.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/birlasoft-rs-tp-9feb2021.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/datamatics-vk-tp-24june2020.gif"
            alt=""
          />

          <img
            src="https://bms.naukimg.com/banner/banners2016/cyient_120X45_2782015.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/infosys-cl-tp-3apr2015.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/invesco-vk-tp-7jan2019.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/hexaware-rs-tp-22jun2021-1.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/sykes-c-tp-6nov2019.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/amazon-cl-tp-18mar2021.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/ust-ns-tp-10mar2021.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/visiblealpha-rs-tp-24jun2021.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/springernature-ns-tp-18mar2021.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/blueyonder-rs-tp-10may2021.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/allianz-cl-tp-21june2016.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/ptc-rs-tp-25may2021.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/Tata-ak-tp-7feb2020.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/wf-ns-tp-1apr2020.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/br-ak-tp-2jul2019.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/ion-cl-tp-23jan2017.gif"
            alt=""
          />

          <img
            src="https://company.naukri.com/homepage21/prokama-hs-tp-7jun2019.gif"
            alt=""
          />
          <img
            src="https://company.naukri.com/homepage21/clearwater-rs-tp-30apr2021.gif"
            alt=""
          />
        </div>

        {/* Best Palce To work ======>>>>>>> */}

        <div className={styled.Midbox} id={styled.midBox}>
          <h2 style={{ marginTop: "8px", marginLeft: "20px" }}>
            Best Place to Work
          </h2>

          <a
            style={{
              cursor: "pointer",
              textDecoration: showdiv === "Sec" ? "underline" : "none",
              textUnderlineOffset: "7px",
              textDecorationColor: "rgb(74,144,226)",
              textDecorationThickness: "5px"
            }}
            onClick={() => {
              handleShow("Sec");
            }}
          >
            All Sectors
          </a>
          <a
            style={{
              cursor: "pointer",
              textDecoration: showdiv === "It" ? "underline" : "none",
              textUnderlineOffset: "7px",
              textDecorationColor: "rgb(74,144,226)",
              textDecorationThickness: "5px"
            }}
            onClick={() => {
              handleShow("It");
            }}
          >
            Information Technology
          </a>
          <a
            style={{
              cursor: "pointer",
              textDecoration: showdiv === "Manuf" ? "underline" : "none",
              textUnderlineOffset: "7px",
              textDecorationColor: "rgb(74,144,226)",
              textDecorationThickness: "5px"
            }}
            onClick={() => {
              handleShow("Manuf");
            }}
          >
            Manufacturing
          </a>
          <a
            style={{
              cursor: "pointer",
              textDecoration: showdiv === "Services" ? "underline" : "none",
              textUnderlineOffset: "7px",
              textDecorationColor: "rgb(74,144,226)",
              textDecorationThickness: "5px"
            }}
            onClick={() => {
              handleShow("Services");
            }}
          >
            Services
          </a>

          <hr></hr>
          {showdiv === "Sec" ? (
            <Sec />
          ) : showdiv === "It" ? (
            <It />
          ) : showdiv === "Manuf" ? (
            <Manuf />
          ) : showdiv === "Services" ? (
            <Services />
          ) : null}
        </div>

        {/* Right Part Satarted */}

        <div id={styled.rightBox} className={styled.rightPart}>
          <div className={styled.firstCard}>
            <>
              <>
                {" "}
                <h5>Search Jobs on the Go !!!</h5>
              </>
              <>
                <img
                  src="https://static.naukri.com/s/7/0/assets/images/src/widgets/download-app-link-wdgt/v1/assets/appInstallImg.9d15407f.png"
                  alt=""
                />
              </>
            </>

            <p>
              Download the Naukri app for free & browse from a variety of jobs
              based on your preferences
            </p>

            <>
              <input type="number" Placeholder="Mobile No" />
            </>

            <>
              <button>Send Me Download Link</button>
            </>

            <small>Aviable on both iOS & Android</small>
            <br></br>
            <a>Google Play</a>
            <a>App Store</a>
          </div>

          <div className={styled.cardSecond}>
            <h4>Get best matched jobs directly in your mail.</h4>
            <p>
              Tell us what kind of a job you are looking out for and stay
              updated with latest opportunities.
            </p>
            <small>No registration required!</small>
            <button>Create Job Alert</button>
          </div>

          <div className={styled.cardthird}>
            <h4>Naukri JobSpeak</h4>
            <img
              src="https://static.naukri.com/s/7/0/assets/images/src/widgets/naukri-job-speak-wdgt/v1/njs-bg.74cb2db9.png"
              alt=""
            />

            <p>
              A monthly Job Index that provides insight into hiring trends in
              your city, job function and industry.
            </p>

            <a href="https://">View the latest edition</a>
          </div>

          <div className={styled.fourthCard}>
            <img
              src="https://static.naukri.com/s/7/0/assets/images/src/widgets/fast-forward-wdgt/v1/ffLogo.799817e8.png"
              alt=""
            />
            <h5>Naukri Resume Score - Free</h5>
            <small>
              Get your FREE resume feedback report and know the improvement
              areas in your resume within 30 seconds
              <a href="https://">Read More</a>
            </small>
            <h5>Reach out to more recruiters</h5>
            <p>
              Become a Featured Applicant on Naukri and Increase your profile
              views by up to 3 times.<a href="https://">Read More</a>
            </p>
            <hr></hr>
            <small>
              Call 1800-572-5557 now! (Toll-Free) for JobSeeker services
            </small>{" "}
            <br></br>
            <button>Know More</button>
          </div>

          <div className={styled.fifthCard}>
            <img
              src="https://static.naukri.com/s/7/0/assets/images/src/widgets/naukri-learning-wdgt/v3/nlLogo.c6a62185.png"
              alt=""
            />
            <p>500+ courses to help you get better jobs</p>
            <button>Explore More</button>
            <br></br>
            <small>Call 1800-103-4702 now! (Toll-Free)</small>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
