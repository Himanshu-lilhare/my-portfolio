import React from 'react'
import { FaRegIdBadge } from 'react-icons/fa'
import styled from 'styled-components'
import projectimg from "../assets/Images/project.jpg"
import { ProjectsData } from '../data/ProjectData'
import Anchor from '../subComponents/Anchor'
import Logo from '../subComponents/Logo'
import PowerButton from '../subComponents/PowerButton'
import SocialMediaIcons from '../subComponents/SocialMediaIcons'
import ProjectComp from './ProjectComp'

const Projects = () => {
const MainContainer=styled.div`
background: url(${projectimg}); background-size: cover;
background-repeat: no-repeat;
height: 100vh; background-attachment: fixed;
background-position: center; 
overflow: hidden;
`
const Container=styled.div`
  background-color: ${props=>`rgba(${props.theme.bodyRgba},0.8)`}  ;
  width: 100% auto ; height:100%; position: relative; 
  padding-bottom:5rem; overflow-y:scroll; 
 &::-webkit-scrollbar {
  display: none;
}
`
const Center=styled.div`
  display: flex; justify-content: center;
  padding-top: 4.5rem; 
`
const Grid=styled.div`
 display: grid;
    grid-template-columns: repeat(1,minmax(calc(10rem + 15vw),1fr));
   place-items: center;
  width:70%;

  /* border: 3px solid blue; */


`
  return (
  <MainContainer>
<Container>
<Logo/>
<SocialMediaIcons/>
<Anchor/>
<PowerButton/>
<Center>
  <Grid>
  {
    ProjectsData.map((ele,index)=>{
      return <ProjectComp id={index+100} data={ele}/>
    })
  }
  </Grid>
</Center>
</Container>
  </MainContainer>
  )
}

export default Projects