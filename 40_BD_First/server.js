const express = require('express');
const app = express();

const bodyParser = require('body-parser');


// SPECIALLY parse Json Data & add it to the request body object 
app.use(bodyParser.json()); 


// Server instantiate
app.listen(3000, ()=>{
    console.log("server started at port no :3000");
})

// routes

app.get("/",(request,response)=>{
    response.send("hello ji this is my first server");
})

app.post("/api/cars" ,(request,response)=>{
    const {name ,brand } = request.body;
    console.log(name);
    console.log(brand)
    response.send("car succesful submitted");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewurlParser:true,
    useUnifiedTopology:true
})

.then(()=>{console.log("connection Succesfull")})
.catch((error)=>{console.log("Connection failed")})
