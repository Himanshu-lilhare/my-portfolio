import React from 'react'
import styled from 'styled-components'
import {BsInstagram,BsLinkedin,BsTwitter,BsYoutube} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { darkTheme } from '../components/Themes'
import { motion } from 'framer-motion'
const SocialMediaIcons = (props) => {
const Icons=styled.div`
 display: flex; flex-direction: column; align-items: center;
position: fixed; bottom: 0; left: 2rem; z-index: 3; 

&>*:not(:last-child){
 margin: 0.5rem 0;
}
@media  only screen and (max-width:791px){

  left: 0.7rem;
  &>*:not(:last-child){
 margin: 0.2rem 0;
}
  & > * svg{
    
      color: black;
     }
    }
`

const Line=styled(motion.span)`
    width: 2px; height: 8rem; background-color: ${props=>props.color==="dark"? darkTheme.text: darkTheme.body};

    @media  only screen and (max-width:791px){
    background-color:black ;
   width: 1px;
    }
`
  return (
  <Icons>
    <motion.div
    
    initial={{scale:(0)}}
    transition={{type:'spring',duration:1,delay:0.5}}
    animate={{scale:[0,1.5,1]}}
    >
 <Link 
 style={{color:`${props.theme==="dark"? "white": "black"}`}} target="_blank" to={{pathname:"https://www.linkedin.com/in/himanshu-lilhare-41b631227/"}}>
    <BsLinkedin style={{fontSize:'23px'}}/>
    </Link> 
    </motion.div>
    <motion.div
    
    initial={{scale:(0)}}
    transition={{type:'spring',duration:1,delay:0.8}}
    animate={{scale:[0,1.5,1]}}
    >
        <Link 
        style={{color:`${props.theme==="dark"? "white": "black"}`}} target="_blank" to={{pathname:"https://www.instagram.com/rajlilhare27/"}}>
        <BsInstagram style={{fontSize:'23px'}}/>
        </Link>
 </motion.div>
    <motion.div 
    initial={{scale:(0)}}
    transition={{type:'spring',duration:1,delay:1}}
    animate={{scale:[0,1.5,1]}}
    >
    <Link 
    style={{color:`${props.theme==="dark"? "white": "black"}`}} target="_blank" to={{pathname:"https://www.youtube.com/channel/UCDawYeJt95F2-cwc6JqfS2w"}}>
    <BsYoutube style={{fontSize:'23px'}}/>
        </Link>
    </motion.div>
    <motion.div 
    initial={{scale:(0)}}
    transition={{type:'spring',duration:1,delay:1.3}}
    animate={{scale:[0,1.5,1]}}>
    <Link 
    style={{color:`${props.theme==="dark"? "white": "black"}`}} target="_blank" to={{pathname:"https://twitter.com/rajlilhare200"}}>
    <BsTwitter style={{fontSize:'23px'}}/>
    </Link>
 
    </motion.div>
    <Line 
    color={props.theme}
     initial={{height:0}}
     transition={{type:"spring",duration:1,delay:0.8}}
     animate={{height:'8rem'}}
    />
  </Icons>

  )
}

export default SocialMediaIcons
