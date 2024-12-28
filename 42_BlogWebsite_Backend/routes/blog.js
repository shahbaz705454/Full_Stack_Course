const express = require("express");

const router = express.Router();

// import the controller 

const {createPost,posts} =require("../controllers/PostController");
const {createComment} = require("../controllers/commentController");
const {likepost, unlikePost} = require("../controllers/LikeController");




//  create mapping 

router.get("/Posts",posts);
router.post("/posts/create", createPost);
router.post("/comments/create",createComment);
router.post("/likes/like",likepost);
router.post("/likes/unlike", unlikePost);





// export

module.exports = router;
