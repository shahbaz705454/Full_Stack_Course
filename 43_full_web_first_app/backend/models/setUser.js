const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,

    },
    title:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        required:true,

    }
});
module.exports = mongoose.model("user",UserSchema);