import express from "express";
// import model
import User from "../../models/User.js";
import Product from "../../models/Product.js";
const router = express.Router();
import {
  productRules,
  errorMiddleware,
} from "../../middlewares/validations/index.js";
import verifyToken from "../../middlewares/auth/index.js";
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

/*
    API EndPoint : /api/products/:id
    Method : DELETE
    Payload : req.params.id and  Extract _id from access token (x-auth-token from headers)
    Access Type : Private/Admin
    Description : Delete Product by ID
*/
//response format : Product deleted succesfully

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const admin = await User.findById(req.user._id);
    if (!admin.isAdmin) {
      return res
        .status(403)
        .json({ msg: "Permission denied! Missing Admin Access" });
    }
    const deleted = await Product.findOneAndDelete({ _id: req.params.id });

    // if (!deleted) {
    //   return res.status(404).json({ msg: "User Not Found" }); // not working properly
    // }
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

/*
    API EndPoint : /api/products
    Method : POST
    Payload : Extract _id from access token (x-auth-token from headers)
    Access Type : Private/Admin
    Description : Insert a New Product
*/
//response format is product object

router.post(
  "/",
  verifyToken,
  productRules(),
  errorMiddleware,
  async (req, res) => {
    try {
      const admin = await User.findById(req.user._id);
      if (!admin.isAdmin) {
        return res
          .status(403)
          .json({ msg: "Permission denied! Missing Admin Access" });
      }
      const newProduct = new Product(req.body);
      newProduct.user = req.user._id;
      await newProduct.save();
      res.status(200).json({
        _id: newProduct._id,
        name: newProduct.name,
        price: newProduct.price,
        brand: newProduct.brand,
        description: newProduct.description,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  }
);
/*
    API EndPoint : /api/products/:id
    Method : PUT
    Payload : req.params.id and  Extract _id from access token (x-auth-token from headers)
    Access Type : Private/Admin
    Description : Update a Product
*/
//response format is updated product object

/*
    API EndPoint : /api/products/:id/reviews
    Method : POST
    Payload : req.params.id (productid) and  Extract _id from access token (x-auth-token from headers), rating,comment
    Access Type : Private/User
    Description : Create a New Review for a Product
*/
//response format is product object
//Logical Validation
// 1) Do not let a user to review same product twice
//2) Update the rating and no of reviews fields

/*
    API EndPoint : /api/products/top
    Method : GET
    Access Type : PUBLIC
    Description : Sort top 3 products according to the rating
*/

export default router;
