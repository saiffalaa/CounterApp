import React, { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((prod) => prod.json())
      .then(
        (resolve) => setProducts(resolve),
        (error) => console.log("error", error)
      )
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="mt-5">
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-around">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Shop;
