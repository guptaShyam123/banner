import React from "react";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { data } from "./data";

const Practice2 = () => {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify({ data: data }));
    getproduct();
  });

  const { id } = useParams();

  const getproduct = () => {
    const result = data.find((value) => value.id === parseInt(id));
    setProduct(result);

    console.log(result);
  };
  console.log("my product" , product)

  console.log("product length", Object.keys(product).length);
  const u = JSON.parse(localStorage.getItem("data"));

  return (
    <>
      <img src={product.image} />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button>add to bag</button>
    </>
  );
};

export default Practice2;
