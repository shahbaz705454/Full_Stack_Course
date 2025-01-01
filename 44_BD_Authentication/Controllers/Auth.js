const User = require("../Model/User");
const bcrypt = require("bcrypt");

// signup route handler

exports.signUp = async (req, resp) => {
    try {

        // get all data from request
        const { name, email, password, role } = req.body;

        // /check user exits or not
        const existingUser = await User.findOne({email});

        if(existingUser){
            return resp.status(400).json({
                success:false,
                message:"User Already Exists",

            });
        }
        // secure Password
        let hashPassword;
        try{

             hashPassword = await bcrypt.hash(password,10);

        }catch(err){
            return resp.status(500).json({
                success:false,
                message:"Error in Hashing in Password",
            });

        }

        // create entry for User
        const user = await User.create({
            name,email,password:hashPassword,role
        });

        return resp.status(200).json({
            success:true,
            message:"user Created Succesfully"
        })

    } catch (err) {

       return  resp.status(500).json({
            success:false,
            message:"Falied to create user",
            message:err.message,
        })

    }
}



exports.login = async (req, resp) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return resp.status(404).json({
        success: false,
        message: "Email is Incorrect",
      });
    }
   

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return resp.status(401).json({
        success: false,
        message: "Password is Incorrect",
      });
    }

    // Authentication successful
    return resp.status(200).json({
      success: true,
      message: "User authenticated successfully",
      data: { email: user.email, role: user.role }, // Assuming role is stored in the user object
    });

  } catch (err) {
    return resp.status(500).json({
      success: false,
      message: "Failed to login",
      error: err.message,
    });
  }
};



