import React from "react";
import styled from "styled-components";
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function Service() {
  return (
    <div>
      <div>
        <h2>Services</h2>
      </div>
      <Flex>
        <div>
          <div>
            <h3>Banking</h3>
            <p>Sopra Banking Software</p>
          </div>
          <div>
            <h3>BPO/KPO</h3>
            <p>Sopra Banking Software</p>
          </div>
              </div>
              <div>
          <div>
            <h3>Credit Bureau</h3>
            <p>CRIF India</p>
          </div>

              </div>

        <div>
          <div>
            <h3>Education</h3>
            <p>Leadership Boulevard Pvt Ltd.</p>
            <p>NIIT Ltd.</p>
          </div>
        </div>
      </Flex>
    </div>
  );
}
