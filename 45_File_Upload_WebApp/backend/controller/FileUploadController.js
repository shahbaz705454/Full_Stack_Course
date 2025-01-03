const File = require("../model/fileUploadModel");
// const file = require("express-fileupload")
exports.localFileUpload = async (req, resp) => {


    try {

        // fetch file
        const file = req.files.file;

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
        console.log("this is path ->", path);
        console.log("this is file", file);

        file.mv(path, (err) => { console.log(err) });
        resp.status(200).json({
            success: true,
            message: "File Uploaded successfully",
        })

    } catch (err) {
        return resp.status(403).json({
            success: false,
            message: `${err} file uploaded Failed`
        })




    }
}