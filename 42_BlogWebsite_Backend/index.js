const express = require("express");
const app =express();


// load config from dotEnv file

require("dotenv").config();
const PORT = process.env.PORT || 7000;


// using middle ware to parse json request body
app.use(express.json());


// import routes 
const blog = require("./routes/blog");

// mount the blog api route with version
app.use("/api/v1",blog);

// start the server


// connect data base
const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}`);
})
// default Route 
app.get("/",(req,resp)=>{
    resp.send(`<h1>This is Home Page Of Blog Website </h1>`);
})
