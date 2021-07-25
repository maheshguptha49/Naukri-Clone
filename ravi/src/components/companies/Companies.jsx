import React from 'react';
import styled from 'styled-components';

export default function Companies() {
    const CompanyCss = styled.div`
        display:flex;
        flex-direction:row;
        justify-content: space-between
    `
    return (
        <div>
            <CompanyCss>

            <img src="cp-cognizant.gif" alt="cognizant" />
            <img src="cp-covance.gif" alt="covance" />
            <img src="cp-fis.gif" alt="fis" />
            <img src="cp-genpact.gif" alt="genpact" />
            <img src="cp-hcl.gif" alt="hcl" />
            <img src="cp-synechron.gif" alt="synechron" />
            </CompanyCss>

        </div>
    )
}
