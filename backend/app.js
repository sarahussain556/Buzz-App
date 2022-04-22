
const express =require("express");  //node js framework, our server will run on this express
const app=express();
const mongoose = require("mongoose"); 
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const routeUser=require("./routes/users");

dotenv.config(); //to use dotenv

mongoose.connect(
  process.env.DATABASE,
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/",(req,res)=>{
  res.send("Welcome to homepage");
})

app.use("/api/users",routeUser);
//routeUser.initialize(app);

app.listen(8800,()=>{
  console.log("backend server is running");
})