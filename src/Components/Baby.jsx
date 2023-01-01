import React from "react";
import { data } from "./data";




const Baby = () => {
  const  [cart , setCart]= React.useState([])
  
  const add = (i)=>{
    const items = data?.filter((x)=> x.id == i.id)
      
   return setCart([...cart , items])
    
  }
  console.log(cart)
  
  return (
    <>
     {
      data.map((i)=>{
        return (
          <>
           <img src={i.image} />
           <p>{i.text}</p>
           <div>
           <button onClick={()=> add(i)}>add to cart</button>
           </div>
          </>
        )
      })
     }
     {
      cart?.map((i)=>{
   return(
    <>
    <img src={i.image} />
    <button>remove</button>
    </>
   )
      })
     }
     
    </>
  );
};

export default Baby;
