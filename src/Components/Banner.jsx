import React from 'react'
import styled from 'styled-components'
import aaa from '../Images/image23.png'
import jon from '../Images/jon.png'
import jons from '../Images/22.png'


const Banner = () => {
  return (
    <>

    <center><div style={{gridTemplateColumns:'auto auto auto' , gap:'40px' , display:'inline-grid' , flexWrap:'wrap' , marginTop:'10vh'}} >
    <div style={{boxShadow:'10px 10px 34px rgba(0, 0, 0, 0.25' , alignContent: 'center' , alignItems: 'center' , justifyContent: 'center' , height:'340px' , width:'300px' , borderRadius:'20px' , padding:'20px'}}>
     <div style={{backgroundColor:'lightgray' , borderRadius:'20px' , height:'280px ' , width:'300px'  , marginLeft:'-2px'}}>
    <img src={jon} style={{height:'250px' ,marginTop:'29px' , marginLeft:'2px'}} />
    </div>
    <p style={{fontSize:'20px' , color:'#111d5e' , fontFamily:'Poppins' ,marginLeft:'-15px'}} >Jonathan Roberts</p>
    <p style={{color:'#00bee3' , fontFamily:'Poppins' , marginLeft:'-20px' , fontStyle:'italic' , marginTop:'-20px' , fontWeight:'bolder' , fontSize:'14px'}}>Founder/Teacher</p>
    
    </div>
    <div style={{boxShadow:'10px 10px 34px rgba(0, 0, 0, 0.25' , alignContent: 'center' , alignItems: 'center' , justifyContent: 'center' , height:'340px' , width:'300px' , borderRadius:'20px' , padding:'20px'}}>
    <div style={{backgroundColor:'lightgray' , borderRadius:'20px' , height:'280px ' , width:'300px'  , marginLeft:'-2px'}}>
   <img src={jons} style={{height:'250px' ,marginTop:'29px' , marginLeft:'2px'}} />
   </div>
   <p style={{fontSize:'20px' , color:'#111d5e' , fontFamily:'Poppins' ,marginLeft:'-15px'}} >Adam Green</p>
   <p style={{color:'#00bee3' , fontFamily:'Poppins' , marginLeft:'-20px' , fontStyle:'italic' , marginTop:'-20px' , fontWeight:'bolder' , fontSize:'14px'}}>Founder/Teacher</p>
   
   </div>
   <div style={{boxShadow:'10px 10px 34px rgba(0, 0, 0, 0.25' , alignContent: 'center' , alignItems: 'center' , justifyContent: 'center' , height:'340px' , width:'300px' , borderRadius:'20px' , padding:'20px'}}>
   <div style={{backgroundColor:'lightgray' , borderRadius:'20px' , height:'280px ' , width:'300px'  , marginLeft:'-2px'}}>
  <img src={aaa} style={{height:'250px' ,marginTop:'29px' , marginLeft:'2px'}} />
  </div>
  <p style={{fontSize:'20px' , color:'#111d5e' , fontFamily:'Poppins' ,marginLeft:'-15px'}} >Adam Green</p>
  <p style={{color:'#00bee3' , fontFamily:'Poppins' , marginLeft:'-20px' , fontStyle:'italic' , marginTop:'-20px' , fontWeight:'bolder' , fontSize:'14px'}}>Founder/Teacher</p>
  
  </div>
  </div>
  </center>
    </>

  )
}

export default Banner