const Todo = require("../models/Todo");


exports.deleteTodo= async (req, resp) => {
    try {

        // find Id
        const { id } = req.params;
       

        const todo = await Todo.findByIdAndDelete(id)
        resp.status(200).json({
            success: true,
            message: `Delete Succcessfully`,
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
    
