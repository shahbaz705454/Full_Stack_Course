const express = require('express');
const app = express();


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