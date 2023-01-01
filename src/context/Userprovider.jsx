import React from 'react'
import {Context} from "./Context"




const Userprovider = ({props}) => {

  const [user , setUser] = React.useState({
    name:"shyam"
  })
   
  return (
   <>
      <Context.Provider value={user}>
      {props}
      </Context.Provider>  
   </>
  )
}

export default Userprovider
 