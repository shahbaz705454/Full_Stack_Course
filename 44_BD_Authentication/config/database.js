const mongoose = require("mongoose");

require("dotenv").config();


const dbConnect =()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log(`DataBase Connect Succesfull`)})
    .catch((err)=>{
        console.log("DB connection Failed");
        console.error(err);
        process.exit(1);
    });
}

module.exports = dbConnect;