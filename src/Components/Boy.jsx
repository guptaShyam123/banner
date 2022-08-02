import React from 'react'
import aaaa from '../Images/aaaa.png'
import styled from 'styled-components'
const Boy = () => {

    const  Images = styled.img`
    width:100%;
     height:530px;
    `

    const Stylepara = styled.p`
    margin-left:200px;
      color:white;
       font-family:Poppins;
       font-size:40px;
        font-weight:bolder;
         margin-right:800px;
     margin-top:-400px;

     @media only screen and (min-width: 1200px) {
        margin-right:600px;
        margin-left:200px;
      font-size:35px;
     }
    
    `

    const Stylebigpara = styled.p`
    font-size:15px ;
     margin-left:200px ;
      color:#565656 ;
       font-weight:500;
         font-family:Poppins;
          margin-right:880px;
         margin-top:-20px;
        color:#FFFFFF; 
        @media only screen and (min-width: 1200px) {
            font-size:12px ;
            margin-left:200px ;
            margin-right:660px;
        }
        
    `
    const StyleButton = styled.button`
    background-color:#00bee3 ;
     font-size:12px ;
     height:40px;
      width:120px;
  margin-left:200px ;
   border-radius:20px ;
    color:white ;
     border:none ;
      margin-top:20px;
    `
  return (
    <>
      <Images  src={aaaa} />
      <Stylepara >Improve Your Skill With Katon</Stylepara>
      <Stylebigpara >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmon tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Stylebigpara>
      <StyleButton >Read More</StyleButton>
      </>
  )
}

export default Boy