const express = require("express");

const app= express();

require("dotenv").config();

const PORT = process.env.PORT || 7000;

// middleware
app.use(express.json());



// import and mount the route the route
const user = require("./routes/user");
app.use("/api/v1",user);


app.listen(PORT,()=>{
    console.log(`Server is running on port no ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();


app.get("/",(req,resp)=>{
    resp.send(`<h1>This is Home Page Of Authentication </h1>`);

})