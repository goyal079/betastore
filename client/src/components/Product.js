import React from "react";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <div className="col-3">
      <a href="product_details.html">
        <img src={product.image} />
      </a>
      <h2>{product.name}</h2>
      <h3 style={{ color: "#ff235b" }}>
        {product.rating} from {product.numReviews}
      </h3>
      <Rating rating={product.rating} />
      <h1>$50.00</h1>
    </div>
  );
}

export default Product;
