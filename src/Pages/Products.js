import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import style from "./Products.module.css"
import { Link } from 'react-router-dom';

function Products() {

  const [products, setProducts] = useState([]);


  const getApi = async () => {
    const response = await axios("https://fakestoreapi.com/products");
    setProducts(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getApi();
  }, [])


  return (
    <div><h1>This is products page</h1>
    
    <div className={style.products}>
      {products.map((item) => {
        return <Link to={`/details/${item.id}`} key={item.id} className = {style.product}>
          <h6>{item.category}</h6>
          <p>{item.title}</p>
          <img style={{width:"100px"}} src={item.image} alt="" />
        </Link>
      })}
    </div>
    
    </div>
  )
}

export default Products