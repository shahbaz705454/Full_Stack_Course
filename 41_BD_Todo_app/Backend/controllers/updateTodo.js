const Todo = require("../models/Todo");


exports.updateTodo= async (req, resp) => {
    try {

        // find Id
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id:id },
            { title, description, updatedAt: Date.now() },


        )
        resp.status(200).json({
            success: true,
            data: todo,
            message: `Updated Succcessfully`,
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
    
