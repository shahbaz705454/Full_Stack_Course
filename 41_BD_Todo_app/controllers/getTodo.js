const Todo = require("../models/Todo");


exports.getTodo = async (req, resp) => {
    try {

        // fecth all todo items from data base
        const todos= await Todo.find({});

        resp.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entries Todo is fectched",
        })


    } catch (error) {
        console.error(error);
        resp.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error",
        });

    }

}


exports.getTodoById = async (req, resp) => {
    try {

        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        // data for give on not founde 
        if(!todo){
            return resp.status(404).json({
                sucess:false,
                message:"No Data is found"
            })
        }

        req.status(200).json({
            sucess:true,
            data:todo,
            message:`Todo ${id} data succesfull fetched`
        })

      
    } catch (error) {
        console.error(error);
        resp.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error",
        });

    }

}

