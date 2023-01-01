import React, { useRef } from 'react'

const Check = () => {

    let inputref = useRef()
    const handle = ()=>{
       const x =   inputref.current.value0=1 
        const y  = inputref.current.value1=2
        const z = inputref.current.value0+inputref.current.value1
        

    }
  return (
    <>
   <input type="text" ref = {inputref} />
   <button onClick={handle}>click me</button>
    </>

  )
}

export default Check