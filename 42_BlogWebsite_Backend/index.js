const express = require("express");
const app =express();


// load config from dotEnv file

require("dotenv").config();
const PORT = process.env.PORT || 7000;


// using middle ware to parse json request body
// app.use(express.json());


// import routes 
// const route = require("./routes/route");

// mount the blog api route with version
// app.use("/api/v1",route);

// start the server

app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}`);
})

// connect data base
const dbConnect = require("./config/database");
dbConnect();

// default Route 
app.get("/",(req,resp)=>{
    resp.send(`<h1>This is Home Page Of Blog Website </h1>`);
})
