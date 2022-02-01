import React, { useState, useEffect } from "react";
import Product from "./Product.js";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="small-container">
      <h2 className="title">Featured Products</h2>

      <div className="row">
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
