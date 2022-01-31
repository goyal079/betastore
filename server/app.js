import express from "express";
const app = express();

const port = 1234;
import "./connect.js";
import userRouter from "./controllers/user/index.js";

app.use(express.json());

app.use(express.static("build"));

app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("<h1>Hello Everyone from Node via Nginx</h1>");
});

app.listen(port, () => {
  console.log("Server started at ", port);
});
