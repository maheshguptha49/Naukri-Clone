import React from 'react'
import styled from "styled-components";
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function Manufacturing() {
    return (
      <div>
        <div>
          <h2>Manufacturing</h2>
        </div>
        <Flex>
          <div>
            <div>
              <h3>Air Compressors </h3>
              <p>ELGI Equipments Ltd. </p>
            </div>
            <div>
              <h3>Apparel </h3>
              <p>Shahi Exports Pvt Ltd. </p>
            </div>
          </div>
          <div>
            <div>
              <h3> Auto/Auto Equip.</h3>
              <p>CLAAS India</p>
              <p> International Tractors Limited</p>
              <p> JBM Group</p>
              <p> Royal Enfield Schaeffler Group</p>
            </div>
          </div>
          <div>
            <h3> CRO</h3>
            <p> Parexel</p>
            <p> PPD Pharmaceutical Development India Pvt Ltd.</p>
            <p> Syneos Health</p>
          </div>
        </Flex>
      </div>
    );
}
