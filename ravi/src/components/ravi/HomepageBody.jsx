import React from "react";
import BestPlaceToWork from "../../components/bestPlacetoWork/BestPlaceToWork";
import Companies from "../../components/companies/Companies";
import Employers from "../../components/companies/Employers";
import styled from "styled-components";

const BodyMain = styled.div`
  width: 90vw;
 
`;
const Main = styled.div`
  display: flex;
`;
export default function HomepageBody() {
  return (
    <div>
      <BodyMain>
        <Companies />
        <Main>
          <Employers />
          <BestPlaceToWork />
        </Main>
      </BodyMain>
    </div>
  );
}
