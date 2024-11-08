const { response } = require("express");
const Todo = require("../models/Todo");

// define route handler

exports.createTodo= async(req,resp)=>{
    try {
        // extract tittle and description from reauset body
        const {title,description} =req.body;
        // create anew Todo obj and insert in DB
        const response = await Todo.create({title,description});

        // send a json response with success flag

        resp.status(200).json(
            {
                success:true,
                data:response,
                message:'Entery Created Succesfully'
            }
        )
        
    } catch (error) {
        console.error(error);
        console.log(error);
        resp.status(500)
        .json({
            success:false,
            data:"internal server Error ",
            message:error.message,
        })
        
    }
}