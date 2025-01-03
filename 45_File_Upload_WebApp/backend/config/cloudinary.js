const cloudinary = require("cloudinary").v2;


exports.cloudinaryConnect=()=>{
    try{

        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET,
        })
        console.log("cloudinary Connect succesfully");
    

    }catch(err){
        console.log("Error While connecting cloudinary");
        console.log(err);

    }
}