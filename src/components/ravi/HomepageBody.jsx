import React from 'react'
import BestPlaceToWork from '../../components/bestPlacetoWork/BestPlaceToWork';
import Companies from '../../components/companies/Companies';
import Employers from '../../components/companies/Employers';
import styled from 'styled-components';


export default function HomepageBody() {
             const Main = styled.div`
    display:flex;
  
  `
  const BodyMain = styled.div`
  width:98vw;
  
  `
    return (

        <div>
      <BodyMain>
      <Companies />
      <Main>
      <Employers/>
      <BestPlaceToWork />
        </Main>
        </BodyMain>
        </div>
    )
}
