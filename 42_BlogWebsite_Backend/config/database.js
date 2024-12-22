const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("DataBase Connection Successfull");

    })
    .catch((err)=>{
        console.log("Issue In DataBase Connection");
        console.error(err.message);
        process.exit(1);

    });

}

module.exports = dbConnect();
