import React, { useRef } from 'react'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
const Logo = (props) => {

  const ref=useRef()
const Logo=styled.h1`
content: "FC";
display: inline-block;
color: ${props=>props.color==="dark"? darkTheme.text:darkTheme.body}; 
position: fixed; top: 2rem; left: 2rem; z-index: 3;
@media  only screen and (max-width:791px){
     font-size: 24px;
     font-weight: 600;
     left: 1rem;
  }
@media  only screen and (max-width:357px){
  font-size: 21px;
 
}

    `
  return (
      <Logo ref={ref} color={props.theme}>
        FIT CODER
      </Logo>
  )
}

export default Logo