const express = require("express");

const app = express();

require("dotenv").config();

const cors = require("cors");
app.use(cors()); // Enable CORS for all origins


const PORT = process.env.PORT || 7000;


// using middleWare
app.use(express.json());


const userRoutes = require("./routes/route");

app.use("/api/v1",userRoutes);



app.listen(PORT,()=>{
    console.log(`Server Started succesfuly on Port ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();

app.get("/",(req,resp)=>{
    resp.send(`<h1> This is Backend Home Page</h1>`)
});

