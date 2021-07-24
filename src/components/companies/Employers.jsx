import React from 'react'
import styled from 'styled-components'
 const EmployCss = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding:2rem;
    margin-right:2rem;
    `

export default function Employers() {
   
    const style1={marginBottom:'1rem'}
    return (
        <div>
            <EmployCss>
            <h4>Top Employers</h4>    
            <img src="em-airtel.gif" alt="" style={style1} />
            <img src="em-jio.gif" alt="" style={style1}/>
            <img src="em-lti.gif" alt="" style={style1}/>
            <img src="em-oracle.gif" alt="" style={style1}/>
            <img src="em-techmahindra.gif" alt="" style={style1} />
            <img src="em-virtusa.gif" alt="" style={style1}/>
            </EmployCss>
            
        </div>
    )
}
