const Post = require("../models/postModel");
const Like = require("../models/likeModel")


exports.likepost = async(req, resp) => {

    try {
        const { user, post } = req.body;

        const like = new Like({
            post, user,
        })

        const savedLike = await like.save();

        // update the post collection basis on this 
        const updatePost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true })
        .populate("likes").exec();


        resp.json({
            post:updatePost,
        })

    } catch (err) {

        return resp.status(500).json({
            error: "Error while getting saving likes",
        }
        )
    }


}






exports.unlikePost = async (req, resp) => {
    try {
        const { like, post } = req.body;

        // Find and delete the like record
        const deletingLike = await Like.findOneAndDelete({ post: post, _id: like });

        if (!deletingLike) {
            return resp.status(404).json({ error: "Like not found" });
        }

        // Update the post collection by removing the like
        const updatePost = await Post.findByIdAndUpdate(post, { $pull: { likes: deletingLike._id } }, { new: true })
            .populate("likes")
            .exec();

        resp.json({
            post: updatePost,
        });

    } catch (err) {
        return resp.status(500).json({
            error: "Error while deleting likes",
        });
    }
}
