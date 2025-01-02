const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// signup route handler

exports.signUp = async (req, resp) => {
    try {
        // get all data from request
        const { name, email, password, role } = req.body;

        // check user exists or not
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return resp.status(400).json({
                success: false,
                message: "User Already Exists",
            });
        }

        // secure Password
        let hashPassword;
        try {
            hashPassword = await bcrypt.hash(password, 10);
        } catch (err) {
            return resp.status(500).json({
                success: false,
                message: "Error in Hashing Password",
            });
        }

        // create entry for User
        const user = await User.create({
            name, email, password: hashPassword, role
        });

        return resp.status(200).json({
            success: true,
            message: "User Created Successfully"
        });

    } catch (err) {
        return resp.status(500).json({
            success: false,
            message: "Failed to create user",
            error: err.message,
        });
    }
};

exports.login = async (req, resp) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        let user = await User.findOne({ email });
        if (!user) {
            return resp.status(404).json({
                success: false,
                message: "Email is Incorrect",
            });
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        };

        // Compare passwords
        if (await bcrypt.compare(password, user.password)) {
            // password match 
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });

            user = user.toObject();
            user.token = token;
            user.password = undefined;
            const option = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };

            resp.cookie("token", token, option).status(200).json({
                success: true,
                message: "User Logged In Successfully",
                user,
                token
            });

        } else {
            return resp.status(403).json({
                success: false,
                message: "Password Incorrect",
            });
        }

    } catch (err) {
        return resp.status(500).json({
            success: false,
            message: "Failed to login",
            error: err.message,
        });
    }
};



