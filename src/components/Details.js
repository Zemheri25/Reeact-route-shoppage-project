import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Details.module.css";
import Bag from "../assets/Bag";
import Back from "../assets/Back";

function Details() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1)
  };

  const handleCheck = () => {
    navigate("/checkout")
  }

  let { id } = useParams();
  const getApi = async () => {
    const response = await axios(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
    
  };

  useEffect(() => {
    getApi();
  }, [id]);

  return (
    <div className={style.detailsWrapper}>
      <div className={style.detailsNav}>
        <Back onClick={handleBack} />
        <Bag onClick={handleCheck}/>
      </div>
      <h5>{product?.description}</h5>
      <h6>{product?.category}</h6>
      <p>{product?.title}</p>
      <img style={{ width: "100px" }} src={product?.image} />
    </div>
  );
}

export default Details;
