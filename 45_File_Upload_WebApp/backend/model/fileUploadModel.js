const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    imageUrl: {
        type: String,

    },
    email: {
        type: String,
    }
})


fileSchema.post("save", async function (doc) {
    try {
        //  transporter
        let transporter =nodemailer.transporter({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        });

        // send mail

        let info = await transporter.sendMail({
            from:"form fileUpload cloudinary",
            to:doc.email,
            subject:"New File Uploaded On cloudinary",
            html:`<h2>hello jee<h2/> <p>File Uploaded</p>`
        })
        console.log(info)


    } catch (err) {
        console.log(err)

    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;