const user= require("../models/setUser");


exports.deleteUser =async (req,resp)=>{

    const {id} = req.body;
    try{

        const deleteuser = await user.findByIdAndDelete({id});
        resp.status(200).json({
            success:true,
            message:"Deleted Succesfull"
        })

    }catch(err){

        console.log("Error while deleting the User");
        resp.status(500).json({
            success:false,
            message:err.message
        })



    }
}