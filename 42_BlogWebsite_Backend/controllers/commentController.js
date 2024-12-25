// import model
const Post  = require("../models/postModel");
const Comment = require("../models/commentModel");


// Comment creation logic
exports.createComment = async (req, resp) => {
    try {
        const { post, user, body } = req.body;

        const comment = new Comment({
            post, user, body
        });

        const savedComment = await comment.save();

        const updatePost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments")
            .exec();

        resp.json({
            post: updatePost,
        });

    } catch (err) {
        return resp.status(500).json({
            err: "Error while creating comment",
            message: err.message,
        });
    }
};
