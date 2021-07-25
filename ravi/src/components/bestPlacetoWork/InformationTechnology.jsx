import React from 'react'
import styled from "styled-components";
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function InformationTechnology() {
 
    
    return (
        <div>

            <div>
                <h2>Information Technology</h2>
            </div>
            <Flex>
                <div>
            <div >
                <h3>Analytics</h3>
                <p> Course5 Intelligence Pvt Ltd.</p>
                <p> LatentView Analytics Pvt Ltd.</p>
                <p> RMS Risk Management Solutions India Pvt Ltd</p>
            </div>
            <div >
                <h2>ChipDsg/Semicond. </h2>
               <p> einfochips (An Arrow Company)</p>
               <p> Globalfoundries Engineering Pvt Ltd.</p>
               <p> KLA-Tencor Software India Pvt Ltd</p>
               <p> Maxim Integrated</p>
             
                    </div>
                </div>
                <div>
                
            <div>
                <h2>Cloud Computing </h2>
                <p> Protera Technologies</p>
                <p> Secure - 24 IT Services Pvt Ltd.</p>
            </div>
            <div >
                <h2>Engineering Services </h2>
                <p> DesignTech Systems Ltd.</p>
                <p> Robert Bosch Engineering & Business Solution Ltd.</p>
                    </div>
                    </div>
            <div>
                <h2>Financial Services & Software </h2>
                <p> Atyeti IT Services Pvt Ltd.</p>
                <p> DTCC</p>
                <p> Edelman Financial Engines, LLC</p>
                <p> Factset Systems Inc. </p>
                <p> Fidelity International</p>
                </div>
                </Flex>
        </div>
    )
}
