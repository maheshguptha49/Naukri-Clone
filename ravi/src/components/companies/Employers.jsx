import React from 'react'
import styled from 'styled-components'

export default function Employers() {
    const EmployCss = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    padding:2.5rem;
   height:100%
   
    `
    return (
        <div>
            <EmployCss>
            <h3>Top Employers </h3>
            <img src="em-airtel.gif" alt="" />
            <img src="em-jio.gif" alt="" />
            <img src="em-lti.gif" alt="" />
            <img src="em-oracle.gif" alt="" />
            <img src="em-techmahindra.gif" alt="" />
            <img src="em-virtusa.gif" alt="" />
            <img src="em-infosys.gif" alt="" />
            <img src="em-alianz.gif" alt="" />
            </EmployCss>
            
        </div>
    )
}
