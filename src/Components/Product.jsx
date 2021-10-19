import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
const Product = (props) => {
  const {
    product: { title, image, id, price },
  } = props;
  return (
    <div className="wid d-flex  mb-3  align-items-center shadows hov">
      <Link to={`shop/product-details/${id}`}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <figure className="w-50">
            <img className="w-100" src={image} alt="" />
          </figure>
          <div>
            <p className="fw-bold">{title}</p>
            <p>Price: EGP {price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
