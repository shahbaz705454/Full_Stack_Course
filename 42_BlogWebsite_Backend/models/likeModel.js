// import moongoose instanec 
const mongoose =require("mongoose");

// route Handler
const likeSchema =new mongoose.Schema({
       post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post", //reference to the post model 
        },
        user:{
            type:String,
            require:true,
        },

})

// export 
module.exports = mongoose.model("Like",likeSchema);