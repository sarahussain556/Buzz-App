const express =require("express");  //node js framework, our server will run on this express
const app=express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config(); //to use dotenv

mongoose.connect(
  process.env.DATABASE,

  () => {
    console.log("Connected to MongoDB");
  }
);

app.listen(8800,()=>{
  console.log("backend server is running");
})