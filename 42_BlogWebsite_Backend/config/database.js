const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,)
    .then(()=>console.log("Db ka Connection is Successfull"))
    .catch((error)=>{
        console.log("Issue in DB Connections");
        console.error(error.message);
        process.exit(1);
    });
console.log("hello")
}

module.exports =dbConnect; 