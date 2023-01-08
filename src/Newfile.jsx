import React from "react";

export const datas = async () => {
   
  const res = await fetch("https://fakestoreapi.com/products/1");

  const data = res.json();
   
  const result = Object.keys(data).map((key) => data[key]);
  console.log("nes" , result)
};


