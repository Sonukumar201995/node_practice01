const express = require("express");
const app = express();

const db = require("./db");// mongodb database server....
// const user = require("./models/user");// user schema

const userRoutes = require("./routes/userRouter");

app.use(express.json()); //body parser

app.get("/", (req, res) => {
  res.send("Welcome to my E-Commerce Shop");
});

app.use("/", userRoutes);

// server...
app.listen(3000, () => {
  console.log("Server is listening.........");
});