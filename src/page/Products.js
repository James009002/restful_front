import React, { useEffect } from "react";
import CallAPITest from "../component/CallAPITest";


export default function Products() {

  useEffect(()=>{
    getProductsList();
  })

  const getProductsList = () =>{
    const url = "test/products"
    CallAPITest.getProducts(url);
  }

  return (
    <div>
      <h1>熱門商品</h1>

    </div>
  );
}
