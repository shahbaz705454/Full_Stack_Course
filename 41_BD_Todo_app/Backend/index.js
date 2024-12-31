const express = require("express");
const app = express();


// load config from env file 
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request bpody
app.use(express.json());

const cors = require("cors");
app.use(cors()); // Enable CORS for all origins


// import routes for todo api

const todoRoutes = require("./routes/todos");

//mount the todo API routes
app.use("/api/v1",todoRoutes);


// start server
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

// conecrt to detabase 
const dbConnect = require("./config/database");
dbConnect();

// default route 
app.get("/",(req,resp)=>{
    resp.send(`<h1> This is HomePage </h1>`)
})
