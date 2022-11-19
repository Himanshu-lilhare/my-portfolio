import React from 'react'
import styled from 'styled-components'
import profilepic from "../assets/Images/profile-img.png"
import { motion } from 'framer-motion'
const Intro = ()=> {

  // background:linear-gradient(to right,${props=>props.theme.body} 50%,
  //   ${props=>props.theme.text}  50%) bottom,
  //     linear-gradient(to left,${props=>props.theme.text} 50%,
  //     ${props=>props.theme.body} 50%) top ;

const Box=styled(motion.div)`
 width: 65vw; height:55vh ; display:flex; 

   background:linear-gradient(to right,${props=>props.theme.body} 50%,
    ${props=>props.theme.text} 50%) bottom,
     linear-gradient(to left,${props=>props.theme.text} 50%,
     ${props=>props.theme.body} 50%) top ;

 position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);
 background-repeat: no-repeat; background-size: 100% 2px;
 z-index: 1;
  border-left: 2px solid ${props=>props.theme.body}; 
 border-right: 2px solid ${props=>props.theme.text};
  
 @media  only screen and (max-width:791px){
    flex-direction: column;
    width: 55vw; height:65vh ; display:flex; 

    background:linear-gradient(to right,${props=>props.theme.body} 50%,
    ${props=>props.theme.text} 50%) bottom,
     linear-gradient(to left,${props=>props.theme.text} 50%,
     ${props=>props.theme.body} 50%) top ;

position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);
background-repeat: no-repeat; background-size: 100% 2px;
z-index: 1; 

   
}
`
const SubBox=styled.div`
 width: 50%; position: relative; display: flex; 
 

 .pic{
  display: flex;
    position: absolute; bottom: 0; left: 50%; transform: translate(-50%,0);
    width: 100%; height: auto;
    @media  only screen and (max-width:791px){
    height: 100%; width: auto;
    }
 }


 @media  only screen and (max-width:791px){
     width: 100%;
     height: 50%;
     justify-content: center;
    }

`
const Text=styled.div`
padding-left:2rem ;
font-size: calc(0.5em + 1.5vw); color:white ;
 cursor: pointer; display: flex; flex-direction: column;
justify-content: space-evenly; 
&>:last-child{
    color: ${props=>`rgba(${props.theme.bodyRgba}0.6)`};
    font-size: calc(0.5em + 1.5vw);
    font-weight: 300;
}
@media  only screen and (max-width:791px){
    align-items:center;
    width: 100%;

   padding-left:0;
  text-align:center;
    }
`

  return (
   <Box initial={{height:0}}
   animate={{height:'55vh'}}
   transition={{type:'spring',duration:2,delay:1 }}

   >
  <SubBox>
    <Text>
        <h1>
            Hi There,
        </h1>
        <h2 style={{fontWeight:"300",letterSpacing:"1.5px"}}>
            I'm HIMANSHU
        </h2>
        <h6>
            I'm FullStack Developer
        </h6>
    </Text>
  </SubBox>
  <SubBox>
    <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1,delay:2}}
    >
        <img className='pic'  src={profilepic} alt="profilepic" />
    </motion.div>
  </SubBox>
   </Box>
  )
}

export default Intro