const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect =()=>{
    mongoose.connect(process.env.BASE_URL)
    .then(console.log("Db Connection Succesfull"))
    .catch((err)=>{
        console.log("Error While Connecting DataBase");
        console.log(err)
        process.exit(1);
    });
}
