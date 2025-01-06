const express =require("express");
require("dotenv").config();
const db = require("./config/database");
const cloudinary = require("./config/cloudinary");
const fileupload = require("express-fileupload");

const app = express();

const cors = require('cors');
app.use(cors());

// middleware 
app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/", // Directory for temporary file storage
}));


const PORT = process.env.PORT || 7000;

// routes
const routes = require("./routes/fileUpload");

// route Mount
app.use("/api/v1",routes);


app.listen(PORT,()=>{
    console.log(`Server Running Succesfully on Port ${PORT}`)

});

// 


// connection with data base and cloudinary
db.dbConnect();
cloudinary.cloudinaryConnect()

app.get("/",(req,resp)=>{

    resp.send(`<h1>This is Home Page</h1>`)
})
