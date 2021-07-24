import React from 'react'
import { useState } from 'react'
import InformationTechnology from './InformationTechnology'
import Manufacturing from './Manufacturing'
import Service from './Service'
import styled from 'styled-components'
// import Flex from '../styles/Flex'

export default function BestPlaceToWork() {
    const [all, setAll] = useState(true);
    const [it,setIt]=useState(false)
    const [manuf,setManuf]=useState(false)
    const [serv,setServ]=useState(false)
    const MainDiv = styled.div`
        border: 2px solid black;     
       
    `

    const FlexDiv = styled.div`
        display:flex;
         justify-content: space-evenly;
    `
    
    const BestPlace = styled.div`
    border:1px solid black;
    min-width:80%
   
    > div{
        border: 1px solid black;       
    }
    p{
        color:teal;
    }
    `
    
    const handleAll = () => {
        setAll(true);
        setIt(false);
        setManuf(false);
        setServ(false);
    }
    const handleIt = () => {
        setAll(false);
        setIt(true);
        setManuf(false);
        setServ(false);
    }
    const handleManuf = () => {
        setAll(false);
        setIt(false);
        setManuf(true);
        setServ(false);
    }
    const handleServ = () => {
        setAll(false);
        setIt(false);
        setManuf(false);
        setServ(true);
    }

    return (
        <div>
            <MainDiv>
                <h1>Best Place to Work</h1>
                <FlexDiv>
                <p onClick={handleAll} >All Sectors</p>
                <p onClick={handleIt} >Information Technology</p>
                <p onClick={handleManuf} >Manufacturing</p>
                <p onClick={handleServ} >Services </p>

                </FlexDiv>

                <BestPlace>
                    {
                        all?(<><InformationTechnology /><Manufacturing /><Service/></>):it?(<InformationTechnology />):manuf?(<Manufacturing />):serv?<Service/>:<></>
                }              
                
                
                </BestPlace>
            </MainDiv>
        </div>
    )
}
