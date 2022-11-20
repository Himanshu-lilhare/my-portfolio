import React, { useEffect, useRef, useState } from 'react'
import { Link} from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import Logo from '../subComponents/Logo'
import PowerButton from '../subComponents/PowerButton'
import SocialMediaIcons from '../subComponents/SocialMediaIcons'
import centerlogo from "../assets/Images/Centerlogo.png"
import Intro from './Intro'
import { motion } from 'framer-motion'


const Main = () => {
const [click,setClick]=useState(false)
const moveRef=useRef(null)

function handleCenter(){
  setClick(prev=>!prev)
}
const MainContainer=styled.div`
        background-color: ${props=>props.theme.body};
        width: 100vw; height: 100vh; overflow: hidden; 
        position: relative; 
        h1,h2,h3,h4,h5,h6{
            font-family: 'Karla',sans-serif;}
`
const Container=styled.div`
    padding: 2rem;
`
const Contact=styled(Link)`

  position: absolute; top:2.2rem;
   /* right:calc(1rem + 2vw); */
   right: 2rem;
  text-decoration: none; z-index: 10;

  &>:first-child{
    color:${props=>props.theme.text};
  @media  only screen and (max-width:791px){
  color: ${props=>props.clicked && props.theme.body};
  font-size: 16px;
  }

}

 
  `
 const Blog=styled(Link)`
   color:${props=>props.theme.text};
  position: absolute; top:50%;
  transform: translate(-50%,-50%);
  right:2rem;
  text-decoration: none; z-index: 1;

  @media  only screen and (max-width:791px){
    transform: rotate(90deg);
    right: 0.5rem;
    top: 60%;
    }

 ` 
 const  About=styled(Link)`
color:${props=>props.clicked?props.theme.body : props.theme.text};
position:absolute ; top:50%;
transform: translate(-50%,-50%);
left:5.5rem;
text-decoration: none; z-index: 1;

@media  only screen and (max-width:791px){
    transform: rotate(-90deg);
    left: 0.5rem;
    top: 40%;
    }
` 
const BottomBar=styled.div`
  position: absolute; bottom: 1rem; left: 0; right: 0;
 height: 2rem; display: flex;
  justify-content: space-evenly; 
`
const Projects=styled(Link)`
 color:${props=>props.clicked?props.theme.body : props.theme.text};
text-decoration: none; z-index: 1;

@media  only screen and (max-width:791px){
     color: black;
    }
`
const Skills=styled(Link)`
 color:${props=>props.theme.text};
text-decoration: none; z-index: 1;
`
const Rotate=keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`
const Change=keyframes`
  from{top: 50%; left: 50%; 
  } to{top:85%; left: 92%;}
`
const BackChange=keyframes`
  from{top:85%; left: 92%;}
  to{ top: 50%;left: 50%;
  }
`

const Center=styled.button`

  position: absolute; top: ${props => props.clicked ? '85%' : '50%'}; 
  left:  ${props => props.clicked ? '92%' : '50%'};; transform: translate(-50%,-50%);
  outline : none; border: none;background-color:transparent;
  cursor: pointer;
  border-radius: 50%;
  display: flex; flex-direction: column; justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  animation: ${props=>props.clicked ? Change : BackChange} 0.5s linear;
  & >:first-child{
    animation: ${Rotate} infinite 1.5s linear;
}
& >:last-child{
    display: ${props=>props.clicked ? "none" : "inline-block"  };
    padding-top: 1rem;
    font-weight:"500"; font-size:"17px";
  }
  @media  only screen and (max-width:791px){
     &>img{
      width: ${props=>props.clicked ? "70px" : "130px" };
      height: ${props=>props.clicked ? "70px" : "130px" };
    }
    & >:last-child{
      font-size: 12px;
  }
  
 }
 @media  only screen and (max-width:449px){
     
     &>img{
       width: ${props=>props.clicked ? "50px" : "130px" };
       height: ${props=>props.clicked ? "50px" : "130px" };
     }
  }
`
const width=keyframes`
  from{ width: 0%;}
  to{ width: 100%;}
`
const DarkDiv=styled.div`
  position: absolute; top: 0; bottom: 0; right: 50%; 
  height: 100%; z-index: 1; background-color: black;
  width: ${props=>props.clicked ? "100%" : "0%"};
  animation:${width} 1.5s linear;
  /* transition:height 0.5s ease ; */
  @media  only screen and (max-width:791px){
   right: 0; height:50%; left: 0; top: 0;
 }
`

useEffect(()=>{
  
window.addEventListener("mousemove",(e)=>{

// moveRef.current.className="trail"
moveRef.current.style=`left:${e.clientX - 20}px;
top:${e.clientY - 30}px;
border:2px solid white;
z-index:10;
`

//  gsap.to(moveRef,{
//   x:e.clientX,
//   y:e.clientY,
//   stagger:-0.1
//  })
})
},[])
 
  return (
    <MainContainer  >
         <div className='trail' ref={moveRef} >

        </div>
   <Container>
    <PowerButton/>
    <Logo theme={click ?"dark":"light"}/>
    <SocialMediaIcons theme={click ? "dark":"light"}/>
    <Contact clicked={click} target="_blank" to={{pathname:"mailto:rajlilhare200@gmail.com"}} >
   <motion.h3 
   initial={{y:-200}}
   transition={{type:"spring",duration:1.5,delay:1}}
   animate={{y:0}}
   >
     say Hi
   </motion.h3>
    </Contact>
    {
    click ? <DarkDiv clicked={click}/> : null
  }
<Center  clicked={click}>
  <img onClick={()=>handleCenter()} width={click ? "50vw" : "200vw"} height={click ? "50vh" : '200vw'} src={centerlogo} alt="centerlogo" />
  <span style={{ letterSpacing:"1px"}}>
    Click Here To See
  </span>
</Center>

    <Blog to="/blogs">
    <motion.h3 
       initial={{x:+200}}
       transition={{type:"spring",duration:1.5,delay:1}}
       animate={{x:0}}
    >
BLOG
   </motion.h3>
    </Blog>
    <About to="/about" clicked={click}>
    <motion.h3
       initial={{x:-200}}
       transition={{type:"spring",duration:1.5,delay:1}}
       animate={{x:0}}
    >
ABOUT
   </motion.h3>
    </About>

  <BottomBar>
  <Projects to='/projects' clicked={click}>
    <motion.h3
       initial={{y:200}}
       transition={{type:"spring",duration:1.5,delay:1}}
       animate={{y:0}}
    >
PROJECTS
   </motion.h3>
    </Projects>
 
    <Skills to="/skills" >
    <motion.h3
       initial={{y:200}}
       transition={{type:"spring",duration:1.5,delay:1}}
       animate={{y:0}}
    >
SKILLS
   </motion.h3>
    </Skills>
  </BottomBar>
  </Container>
  {
    click ? <Intro/> : null
  }
    </MainContainer>
  )
}

export default Main