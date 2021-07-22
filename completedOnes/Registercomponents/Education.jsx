import styles from "./Register.module.css";

export function Education({handleChangen,handleSubmit}){
  
   return (
    <div>
      
      {/* second div */}
     {
     <div style={{display:'flex'}} className={styles.education}>
        <div className={styles.personal}>
          <div>
            <p>Highest Qualification </p>
            <input type="text" placeholder="Enter your Highest Qualification"/>
          </div>
          <div>
            <p>
              Course<span>*</span>{" "}
            </p>
            <input
              onChange={handleChangen}
              type="text"
              name="Course"
              placeholder="Enter which Course you have done"
            />
          </div> 
          <div>
            <p>
              Specialization <span>*</span>{" "}
            </p>
            <input
              onChange={handleChangen}
              type="text"
              name="Specialization"
              placeholder="Enter your Specialization"
            />
          </div>
          <div>
            <p>
              University/College <span>*</span>{" "}
            </p>
            <input
              onChange={handleChangen}
              type="text"
              minLength="10"
              maxLength="10"
              name="MobileNumber"
              placeholder="Enter your University/college name"
            />
          </div>
          <div>
            <p>
              Passing Year <span>*</span>{" "}
            </p>
            <input
              onChange={handleChangen}
              type="text"
              name="City"
              placeholder="Enter your Passing year"
            />
          </div>
          <div>
            <p>
              Skills  <span>*</span>{" "}
            </p>
            <input
              onChange={handleChangen}
              type="text"
              name="City"
              placeholder="Enter your Skills"
            />
          </div>
          
         
          <div className={styles.continue} onClick={handleSubmit}>
            <span>Continue</span>
          </div>
        </div>

        
      </div>
     }
    </div>
  );
}