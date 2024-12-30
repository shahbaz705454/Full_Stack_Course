const User = require("../models/setUser");

exports.getUsers = async(req,resp)=>{
    try{
        const userData = await User.find({});

        resp.status(200).json({
            success:true,
            data:userData,
        });

    }catch(err){
        console.log(err);
        resp.status(500).json({
            success:false,
            message:err.message
        })

    }
}
