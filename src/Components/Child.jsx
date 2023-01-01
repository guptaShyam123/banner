import { ConstructionOutlined } from "@mui/icons-material";
import React from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Child = () => {
  const [data, setdata] = React.useState([
    {
      id: 1,
      name: "shyam",
    },
    {
      id: 2,
      name: "ram",
    },

    {
      id: 3,
      name: "govind",
    },
    {
      id: 4,
      name: "harry",
    },
    {
      id: 5,
      name: "paras",
    },
  ]);

  const add = () => {

   
    const x = data.filter((value) => value[0]);
    console.log("x is", x);

    setdata(data);
  };

  const [value, setValue] = React.useState("");
  const [newval, setVal] = React.useState([]);
  const click = () => {
    const update = [...newval, value];

    setTimeout(() => {
      return setVal(update);
    }, 2000);

    console.log("update", update);
  };

  const dele = (i) => {
    const updates = newval.filter((ele, id) => {
      return i != id;
    });
    setVal(updates);
  };
  console.log(newval);

  const [show, setShow] = React.useState(true);

  const toggle = () => {
    setShow(!show);
  };

  const [count , setCount]= React.useState(0)

  const counts = ()=>{
     setCount(count+1);
  }
 
  React.useEffect(()=>{
    // toggle();
    //counts()
    //  setTimeout(counts , 2000)
    
  },[count])


  const [datas , setDatas]= React.useState([])

  const getdata = async ()=>{
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/")
   
      const data = await res.json()
  
         setDatas(data)

    }catch(err){
      console.log(err)
    }
     
   
 
  }

  console.log("my datas is" , datas)
    const items = datas?.find((is)=> is.title)
    console.log("items is" , items)
    React.useEffect(()=>{
    getdata()
    } , [])

    const [newdata , setNew] = React.useState({
      name:"shyam"
     })

     const [news , setNews] = React.useState(false)

       

        const clickss = ()=>{
           setNews(
            news)
        }

  return (
    <>
      <p>hello</p>
      {data.map((i) => {
        return (
          <>
            <div key={i.id}>
              <p>{i.name}</p>
              <button onClick={() => add()}>click</button>
            </div>
          </>
        );
      })}

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={click}>add</button>

      {newval.map((data, i) => {
        return (
          <>
            <div key={i}>
              <div>{data}</div>
              <div>
                <button onClick={() => dele(i)}>delete</button>
              </div>
            </div>
          </>
        );
      })}
      <p>newval length is {newval?.length}</p>
      <button onClick={toggle}>toggleme</button>
      <div style={{ background: show ? "red" : "pink" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        laudantium necessitatibus velit, possimus commodi cumque mollitia non
        doloremque ipsum earum nobis dolore recusandae architecto fuga
        repellendus rerum pariatur quasi accusantium. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Nisi architecto iste mollitia
        possimus quasi harum fuga est blanditiis ipsa, a laboriosam corporis
        voluptatibus ad consectetur doloremque sed ullam pariatur corrupti.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad laudantium
        assumenda reiciendis, at vitae necessitatibus! Aliquid sunt, nemo
        ducimus, dicta unde excepturi reiciendis molestiae corporis minima ipsam
        consectetur dolorem dolor. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. At, ipsum! Id dignissimos repellendus aliquid, quasi,
        molestias nulla possimus, mollitia dolor corporis voluptas sit odio!
        Praesentium provident maxime odit minus recusandae.
      </div>
      <p>value is {count} </p>
      <button onClick={counts}></button>
      {
        datas?.map((i)=>{
          return (
            <>
               <p>{i?.body}</p>
                <p>{i?.userID}</p>
                <p>{i?.id}</p>
                <p>{i?.title}</p>
            </>
          )
        })
      }

      <Link to="/home" state={{newdata:newdata}}>
      <button>click me send</button>
      </Link>
       
     
    <button onClick={clickss}>click me</button>
    <p> shyam</p>
  
      
      
      </>
  );
};

export default Child;
