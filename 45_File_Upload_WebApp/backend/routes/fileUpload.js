const express = require("express");

const route = express.Router();


const {imageUpload ,videoUpload ,imgReducerUpload,localFileUpload} = require("../controller/FileUploadController")


// api route
// route.post("/localFileUpload",localFileUpload);



// export 
module.exports = route;