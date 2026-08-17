const express = require("express");
const app = express();

const db = require("./db");// mongodb database server....
const user = require("./models/user");// user schema

app.use(express.json()); //body parser

app.get("/", (req, res) => {
  res.send("Welcome to my E-Commerce Shop");
});

// get method
app.get("/user",async(req,res)=>{
    try{
        const data=await user.find();
        console.log("data fetched");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Interval server error"})
    }
})

// post method
app.post("/user",async(req,res)=>{
    try{
        const data=req.body;
        const newUser=new user(data);
        const response=await newUser.save();
        console.log("data saved");
        res.status(201).json(response);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Interval server error"})
    }
})

app.listen(3000, () => {
  console.log("Server is listening.........");
});