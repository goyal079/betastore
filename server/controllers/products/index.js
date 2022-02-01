import express from "express";
import products from "../../products.js";
// import model
import Products from "../../models/Product.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});

router.get("/:id", (req, res) => {
  const product = products.find((ele) => ele._id == req.params.id);
  res.json(product);
});
export default router;
