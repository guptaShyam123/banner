import React, { useEffect } from "react";
import img from "../Images/image23.png";
import img1 from "../Images/jon.png";
import { useNavigate, Link } from "react-router-dom";
import {data} from "./data"
import useSWR from 'swr'



const Practice1 = () => {

  
  
  

  const [first, setFirst] = React.useState("");
  const [second, setSecond] = React.useState(0);
  const [third, setThird] = React.useState(0);

  const [datas , setDatas] = React.useState([
    {
      id:1,
      name:"shyam",
      status:"developer"
    }
  ])

  const click1 = () => {
    setSecond(second + 1);
  };
  const click2 = () => {
    setThird(third + 1);
  };

   const [state, setData] = React.useState([]);
  // const x = data;
  // console.log(data);
  // React.useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(data));
  //   // setData(state)
  // }, [data]);

 
  return (
    <>
      {
        data.map((i) => {
        return (
          <>
            <div key={i.id}>
              <Link to={`pr2/${i.id}`}>
                <img style={{ cursor: "pointer" }} src={i.image} />
              </Link>
            </div>

            <p></p>
          </>
        );
      })}
    
          
    </>
  );
};

export default Practice1;
