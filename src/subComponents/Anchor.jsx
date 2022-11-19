import React, { useEffect, useRef } from 'react'
import { FaAnchor, FaLink } from 'react-icons/fa'
import styled from 'styled-components'
import chainicon from '../assets/Images/chain.png'
const Anchor = () => {
    const ref=useRef(null)
    const hiddenRef=useRef(null)

//     useEffect(()=>{
// function handleScroll(){
//          let scrollPostion=window.scrollY
//          let windowSize=window.innerHeight
//          let bodyHeight=document.body.offsetHeight
//          let diff=Math.max(bodyHeight-(scrollPostion+windowSize))
//          let diffP=(diff*100)/(bodyHeight-windowSize)
//          ref.current.style.transform=`translateY(${-diffP}%)`
//          if(window.scrollY>5){
//             hiddenRef.current.style.display="none"
//          }else{
//             hiddenRef.current.style.display="block"
//          }
         
//          console.log(scrollPostion,windowSize,bodyHeight,diff,diffP)
// }
// window.addEventListener("scroll",handleScroll)
// return()=>window.removeEventListener("scroll",handleScroll)
// },[]) 

useEffect(()=>{
    window.addEventListener('scroll',()=>{
        console.log("scrolled")
    })
},[])

     
const Container=styled.div`
position:relative; 
`
const Slider=styled.div`
  position:fixed; top:0; right:2rem; display: flex; align-items: center;
  flex-direction: column; transform: translateY(-50%);

 .chain{
    transform: rotate(135deg);
 }
`
const Predisplay=styled.div`
  position: absolute; top: 0; right: 2rem; 
`
  return (
  <Container>
    <Slider ref={ref}>
        {
  [...Array(25)].map((e,index)=>{
    return <FaLink id={index+200} fontSize={25} className="chain"/>
})
}
  <FaAnchor style={{fontSize:"70px"}}/>


    </Slider>
  </Container>
  )
}

export default Anchor