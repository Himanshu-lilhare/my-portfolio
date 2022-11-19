import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ProjectComp = (props) => {
  const { name, tags, imgSrc } = props.data;

  const border = keyframes`
   from{
    transform: rotate(0deg);
   }
   to{
    transform:rotate(-360deg);
   }
 `;
  const Box = styled(NavLink)`
    /* width: calc(10rem + 15vw); */
    /* border: 2px solid blue; */
    width: 48%;
    /* text-decoration: none;
    min-height: 25rem; */
    height: 23rem;
  
    position: relative;
    border-radius: 10px;
    padding: 2px;
    color: ${(props) => props.theme.text};
    backdrop-filter: blur(4px);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    overflow: hidden;
    margin-bottom: 20px;
    @media only screen and (max-width:370px){
    height:19rem
   
  }
  @media only screen and (max-width:1200px){
    width:100%;
  }
    &::before {
      content: "";
      z-index: 1;
      position: absolute;
      width: 800px;
      height: 800px;

      background-image: conic-gradient(black 20deg, transparent 120deg);
      animation: ${border} 6s linear infinite;
    }
    .innerdiv {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 3;
      background-color: #f0f0f0;
      padding: 0rem 0.8rem;
      border-radius: 10px;
    }
 
    /* &:hover{
    color:${(props) => props.theme.body};
    background-color:${(props) => props.theme.text} ;
} */
  `;
  const Image = styled.div`
    background-image: url(${imgSrc});
    background-size: cover;
    background-position: top;
    transition: ease-in-out 5s;
    margin-top:1rem;
    width: 100%;
    height: 60%;
    border:2px solid black;
    @media only screen and (max-width:370px){
    height: 40%;
  }

    ${Box}:hover & {
      background-position: bottom;
     }
 

  `;
  const Title = styled.h4`
    color: inherit;
    padding: 0.7rem 0.5rem;
    text-align: center;
    font-family: "Karla", sans-serif;
    font-weight: 500;
    border-bottom: 1px solid ${(props) => props.theme.text};
    font-size: 1.1em;
    @media only screen and (max-width:370px){
     font-size:0.8em;
  }
  
  `;
  const Hashtags = styled.div`
    padding: 0.5rem 0;

    text-align: center;
    @media only screen and (max-width:370px){
     font-size:0.7em;
  }
  `;
  return (
    <Box to={{ pathname: "dhf" }}>
      <div className="innerdiv">
        <Image />
        <Title>{name}</Title>
        <Hashtags>{tags.map((e, index) => `      #${e}`)}</Hashtags>
      </div>
    </Box>
  );
};

export default ProjectComp;
