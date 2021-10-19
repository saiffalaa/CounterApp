import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ProductDetails.css";
const ProductDetails = ({ match }) => {
  const id = match.params.id;
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProductItem();
  });
  const getProductItem = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .finally(() => setIsLoading(false));
  };
  const { title, category, description, image, price, rating } = product;
  console.log(product);
  return (
    <>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <div className="w-75 d-flex flex-column justify-content-center align-items-center">
          <figure className="w-25">
            <img className="w-100" src={image} alt="" />
          </figure>
          <h3>{title}</h3>
          <p>Price: EGP {price}</p>
          <p>Category: {category}</p>
          <p>Description: {description}</p>
          <p>
            rate: {rating?.rate} <i class="bi bi-star"></i> count:{" "}
            {rating?.count}
          </p>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
