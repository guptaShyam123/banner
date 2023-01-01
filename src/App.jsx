import React, { createContext } from "react";
import Banner from "./Components/Banner";
import Phone from "./Components/Phone";
import Baby from "./Components/Baby";
import Boy from "./Components/Boy";
import Sliders from "./Components/Sliders";
import Check from "./Components/Check";
import Nav from "./Components/Nav";
import Child from "./Components/Child";
import { Button } from "@mui/material";
import "./App.css"

// import Child from "./Components/Child";
import Prac from "./Components/Prac";
import Practice1 from "./Components/Practice1";
import Practice2 from "./Components/Practice2";
import Shop from "./Components/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userprovider from './context/Userprovider';
import Home from "./Components/Home";
import { Provider } from "react-redux";
import Firebaseform from "./Components/Firebaseform";

// const data1 = createContext()



const App = () => {
 
  const x = "shyam"
  return (
    // <Check text={{name:'ram'}} data={{key:'paras'}}/>

  
 
    <BrowserRouter>
  
      <Routes>
     
        <Route path="/" element={<Practice1 />} />
        <Route path="/shop" element={<Shop />} />
          <Route path="/pr2/:id" element={<Practice2 />}/>
          <Route path="/child" element={<Child />}/>
          <Route path="/home" element={<Home x={x} />}/>
          <Route path="/baby" element={<Baby />}/>
          <Route path="/firebase" element={<Firebaseform />}/>
          
        
       
      </Routes>
      
    </BrowserRouter>
   
  );
};

export default App;
// export {data , data1}
