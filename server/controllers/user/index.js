import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();

// importing models
import User from "../../models/User.js";
// importing validations
import {
  errorMiddleware,
  registrationRules,
  loginRules,
} from "../../middlewares/validations/index.js";
// importing helpers
import generateToken from "../../helpers/generateToken.js";
// import verifyToken from "../../middlewares/auth/index.js";
router.get("/", (req, res) => {
  res.send("Getting user successfully");
});

/*
      API EndPoint : /api/users/register
      Method : POST
      Payload : Request.Body - fullname,email,password
      Access Type : Public
      Validations : 
          a) Check Valid Email,name and password
      Description : User Registration 
*/
router.post(
  "/register",
  registrationRules(),
  errorMiddleware,
  async (req, res) => {
    try {
      const duplicate = await User.findOne({ email: req.body.email });
      if (duplicate) {
        return res.status(401).json({ msg: "User already exists" });
      }
      const newUser = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(req.body.password, salt);
      await newUser.save();
      res.status(200).json({ msg: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ msg: "Internal server error" });
    }
  }
);

/*
      API EndPoint : /api/users/login
      Method : POST
      Payload : Request.Body - email,password
      Access Type : Public
      Validations : 
          a) Check Valid Email and verify if password is the same
      Description : User Login 
*/
router.post("/login", loginRules(), errorMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ msg: "Invalid login credentials" });
    }
    let correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!correctPassword) {
      return res.status(401).json({ msg: "Invalid login credentials" });
    }
    let userToken = generateToken(req.body);
    res.status(200).json({ userToken });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});
export default router;
