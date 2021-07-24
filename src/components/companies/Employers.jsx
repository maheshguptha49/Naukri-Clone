import React from 'react'
import styled from 'styled-components'

export default function Employers() {
    const EmployCss = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    `
    return (
        <div>
            <EmployCss>

            <img src="em-airtel.gif" alt="" />
            <img src="em-jio.gif" alt="" />
            <img src="em-lti.gif" alt="" />
            <img src="em-oracle.gif" alt="" />
            <img src="em-techmahindra.gif" alt="" />
            <img src="em-virtusa.gif" alt="" />
            </EmployCss>
            
        </div>
    )
}
