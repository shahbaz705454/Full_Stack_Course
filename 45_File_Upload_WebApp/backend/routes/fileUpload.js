const express = require("express");

const route = express.Router();


const {imageUpload ,videoUpload ,imgReducerUpload,localFileUpload,getAll} = require("../controller/FileUploadController")


// api route
route.post("/localFileUpload",localFileUpload);
route.post("/imageUpload",imageUpload);
route.post("/imageReducer",imgReducerUpload);
route.post("/videoUpload",videoUpload);
route.get("/getAll",getAll);



// export 
module.exports = route;