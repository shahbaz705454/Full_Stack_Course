const Post  = require("../models/postModel");


exports.createPost= async (req,resp)=>{
    try{

        const {title,body} = req.body;
        const post = new Post ({
            title,body,
        });
        const savedPost =await post.save();
        resp.json({
            post:savedPost,
        })


    }catch(err){

        return resp.status(500).json({
            error: "Error while creating Post",
        });

    }
};


exports.posts=async(req,resp)=>{
    try{

        const posts = await Post.find().populate("comments").exec();
        resp.json({
            posts,
        })

    }catch(err){

        return resp.status(500).json({
            error: "Error while getting all posts",
        });


        


    }







}