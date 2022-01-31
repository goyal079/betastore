import express from "express";

// import model
import Products from "../../models/Product.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});

export default router;
