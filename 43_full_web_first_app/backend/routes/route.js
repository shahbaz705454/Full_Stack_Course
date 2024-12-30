const express = require("express");
const router = express.Router();

const {getUsers} =require("../controllers/getAllUsers");
const {setuser} =require("../controllers/setUser");


router.get("/getUsers",getUsers);
router.post("/setUser",setuser);

module.exports =router;


