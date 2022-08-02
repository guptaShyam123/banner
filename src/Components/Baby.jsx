import React from 'react'
import baby from '../Images/ladki.png'

const Baby = () => {
  return (
   <>
   <div >
   <img  style={{width:'100%'}}src={baby} />
   <div style={{}}>
   <p style={{marginLeft:'800px' , color:'#121212' , fontFamily:'Poppins' , letterSpacing:'5px' , marginTop:'-450px'}}>ABOUT US</p>
   <p style={{marginLeft:'800px' , color:'#111D5E' , fontFamily:' Poppins', fontSize:' 40px', fontWeight:'bolder', marginRight:'300px'}}>Welcome to Katon Learning</p>
   <p style={{fontSize:'15px' , marginLeft:'800px' , color:'#565656' , fontWeight:'500' , fontFamily:' Poppins', marginRight:'180px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmon tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
   <p style={{color:'black' , marginLeft:'800px' , fontWeight:'bolder' , fontSize:'15px' ,fontFamily:'Poppins'}}>We Have 15 Years of Working Experience</p>
   <button style={{backgroundColor:'#00bee3' , fontSize:'12px' , height:'40px' , width:'100px' , marginLeft:'800px' , borderRadius:'20px' , color:'white' , border:'none' , marginTop:'10px' }}>Read More</button>
   </div>
   </div>
   </>
  )
}

export default Baby