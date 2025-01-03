
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, resp, next) => {
    try {

        // extract jwt token
        const token = req.body.token;

        if (!token) {
            return resp.status(401).json({
                status: false,
                message: "Token is Missing"
            })
        };

        // verfy the token

        try {

            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);

            req.user = decode;


        } catch (err) {

            return resp.status(401).json({
                success: false,
                message: "Token is Invalid",
                // message:err.message
            });

        }

        next();


    } catch (err) {
        return resp.status(401).json({
            success:false,
            message:"Something Went WRong While verifying the token",
            message:err.message,
        })

    }
}

exports.isStudent=async (req,resp,next)=>{
    try{

        if(req.user.role !== "Student"){
            return resp.status(401).json({
                success:false,
                message:"You are not a student"
            })
        }

        next();

    }catch(err){

        return resp.status(500).json({
            success:false,
            message:"User Role Is not Matching",
        })

    }
}

exports.isAdmin=async (req,resp,next)=>{
    try{

        if(req.user.role !== "Admin"){
            return resp.status(401).json({
                success:false,
                message:"you are not A admin"
            })
        }

        next();

    }catch(err){

        return resp.status(500).json({
            success:false,
            message:"User Role Is not Matching",
        })

    }
}