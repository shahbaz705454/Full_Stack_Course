const express = require("express");
const route = express.Router();

const { login, signUp } = require("../Controllers/Auth");
const { auth, isStudent, isAdmin } = require("../middlewares/middleWare");

route.post("/login", login);
route.post("/signUp", signUp);

// protected route
route.get("/test", auth, (req, resp) => {
    resp.json({
        success: true,
        message: "Welcome to the proctected route of Authentication"
    });
});

route.get("/student", auth, isStudent, (req, resp) => {
    resp.json({
        success: true,
        message: "You are Student"
    });
});




route.get("/admin", auth, isAdmin, (req, resp) => {
    resp.json({
        success: true,
        message: "You are Admin"
    });
});

module.exports = route;