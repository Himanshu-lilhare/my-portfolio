import React from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton'

const UnderConstruction = () => {

    const UnderConstruction=styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    `
    const title=keyframes`
        0%{
            transform: scale(0);
            }
            50%{
                transform: scale(1);
            }
            100%{
                transform: scale(0);
            }
    `
    const Title=styled.h1`
        color: white;
        font-weight: 400;
        letter-spacing: 4px;
        border-bottom: 1px solid white;
        animation: ${title}  infinite 4s linear;
        animation: name duration timing-function delay iteration-count direction fill-mode;
       
    `
  return (
    <UnderConstruction>
        <PowerButton/>
<Title>
    Under Construction
</Title>
    </UnderConstruction>
  )
}

export default UnderConstruction