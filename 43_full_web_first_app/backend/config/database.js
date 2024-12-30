const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{ console.log("DataBase Connection is Succesfull")})
    .catch((err)=>{
        console.log("Issue in DataBase Connection");
        console.log(err.message)
        process.exit(1);
    })
}

module.exports =dbConnect;