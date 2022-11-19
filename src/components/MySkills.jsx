import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { bubbleData } from '../data/bubblesdata'
import { skillData } from '../data/skillsdata'
import Logo from '../subComponents/Logo'

import PowerButton from '../subComponents/PowerButton'
import SocialMediaIcons from '../subComponents/SocialMediaIcons'
import { darkTheme } from './Themes'
import UnderConstruction from './UnderConstruction'

const MySkills = () => {
const Main=styled.div`
 background-color: ${props=>props.theme.text};
 overflow: hidden;
width: 100vw; height: 100vh; position: relative; display: flex;
 justify-content: space-evenly; align-items: center;
  `
  const Container=styled.div`
    width: 400px; height :400px ; border: 1px solid white;
    z-index: 2; display: flex ; flex-direction: column; 
 padding: 1rem 0.5rem; padding-bottom: 0; border-radius:0 30px 0 30px ;
  `
  const animate=keyframes`
  from{
    transform: translateY(100vh) scale(0);
  }
  to{
    transform: translateY(-10vh) scale(1);
  }
`
  const Background=styled.div`
position: absolute;
top: 0; bottom: 0; left: 0; right: 0;
width: 100vw; height: 100vh;
background-color: black;
 z-index: 0;
 display: flex;
 span{
  width: 30px; height: 10px; z-index: 0; background-color: white;
  margin-right: 1rem; border-radius: 50%;
  animation: ${animate} 5s linear infinite;
  animation-duration: calc( 120s / var(--i));
 }
`




  return (

    <UnderConstruction/>
//     <ThemeProvider theme={darkTheme}>
// <Main>
//  <Background>
//  {
//   bubbleData.map((e,index)=>{
//     return <span key={index+300} style={{'--i':`${e}`}}></span>
//   })
//  }

//  </Background>
//   <SocialMediaIcons theme="dark"/>
//   <Logo theme="dark"/>
//   <PowerButton/>
  
//   {
//     skillData.map((e,index)=>{
//       return <Container key={index+400}>
//          <h1  style={{textAlign:"center",marginBottom:"2rem",padding:"10px 0",borderTop:"1px solid white",borderBottom:"1px solid white",color:"white",fontSize:"calc(16px + 1vw)"}}>{e.head}</h1>
//          <p style={{marginBottom:'3rem',color:"white",fontSize:"calc(16px + 0.3vw)"}}>{e.description}</p>
//          <div style={{color:"white"}}>
//           <h3>Skills.</h3>
//           <p style={{marginLeft:"15px",marginTop:"10px"}}>{e.skills}</p>
//          </div>
//       </Container>
//     })
//   }
// </Main>
// </ThemeProvider>
  )
}

export default MySkills