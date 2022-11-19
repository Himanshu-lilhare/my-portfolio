import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import song from "../assets/audio/music.mp3"
const SoundBar = () => {
    const [play,setplay]=useState(false)
    const [audio,setaudio]=useState(new Audio(song))
  
 const Box=styled.div`
 display: flex; cursor: pointer; position: fixed; 
 width: 100px; height: 100px;
 top: 2.5rem; left: 14rem; z-index: 10; 
 &>*:nth-child(even){
    animation-delay: 0.7s;
 } 
 @media  only screen and (max-width:600px){
top: 6rem; left: 1rem;
}
 `
 const updown=keyframes`
    0%{
       transform:scaleY(1);
    }
   50%{
    transform:scaleY(2);
    }
    100%{
        transform:scaleY(1);
    }
 `
 const Line=styled.span`
    background-color: ${props=>props.theme.text};
    border: 1px solid ${props=>props.theme.body};
    height: 20px; width: 1px; margin-right: 3px;
    animation: ${updown} 2s linear infinite ;
    animation-play-state: ${play ? "running" : "paused"};

 ` 
function handlePlay(){
    if(!play){
            audio.play()
            setplay(true) 
          }else{
              audio.pause()
              audio.load()
              setplay(false)
       }
      }
  return (
   

   <Box onClick={handlePlay} >
 
{
    [...Array(5)].map(()=>{
        return <Line play={play}></Line>
    })
}
  
   </Box>
  )
}

export default SoundBar