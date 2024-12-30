const User = require("../models/setUser");

exports.setuser =async (req,resp)=>{
    try{

        const {name,email,title,role} = req.body;
        const user = await User.create({
            name,
            email,
            title,
            role
        });

        return resp.status(200).json({
            message:"User Created Succcessfully",
            data:user
        });


    }catch(err){
        console.log(err);
        resp.status(500).json({
            message:err.message
        });

    }

}