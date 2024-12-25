const mongoose = require("mongoose");


// route handler
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    }, 

    body:{
        type:String,
        require:true,

    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]

});


module.exports = mongoose.model("Post",postSchema);








// 
module.export = mongoose.model("Post", postSchema);