import express from "express";
// import model
import User from "../../models/User.js";
import Product from "../../models/Product.js";
const router = express.Router();

/*
    API EndPoint : /api/products/
    Method : GET
    Payload : None
    Access Type : Public
    
    Description : Getting all the products
*/

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

/*
    API EndPoint : /api/user/:id
    Method : GET
    Payload : Request.Params.id
    Access Type : Public
    
    Description : List the produt matching the id
*/

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

export default router;
