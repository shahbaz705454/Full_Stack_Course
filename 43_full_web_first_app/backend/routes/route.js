const express = require("express");
const router = express.Router();

const {getUsers} =require("../controllers/getAllUsers");
const {setuser} =require("../controllers/setUser");
const {deleteUser} =require("../controllers/deleteUser");


router.get("/getUsers",getUsers);
router.post("/setUser",setuser);
router.post("/deleteUser",deleteUser);


module.exports =router;


