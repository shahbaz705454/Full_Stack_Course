const express = require("express");

const router = express.Router();

// import the controller 

const {createPost,posts} =require("../controllers/PostController");
const {createComment} = require("../controllers/commentController");




//  create mapping 

router.get("/Posts",posts);
router.post("/posts/create", createPost);
router.post("/comments/create",createComment);





// export

module.exports = router;
