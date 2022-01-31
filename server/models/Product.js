import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema();

const productModel = new mongoose.model("Product", productSchema, "products");
export default productModel;
