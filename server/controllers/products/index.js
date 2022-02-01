import express from "express";
// import model
import User from "../../models/User.js";
import Product from "../../models/Product.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) {
      return res.status(404).json({ msg: "Not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});

export default router;
