import React from "react";
import productData from "../products.js";
import Product from "./Product.js";
const Products = () => {
  return (
    <div className="small-container">
      <h2 className="title">Featured Products</h2>

      <div className="row">
        {productData.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
