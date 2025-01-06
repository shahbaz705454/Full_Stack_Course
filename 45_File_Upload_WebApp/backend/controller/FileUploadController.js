const File = require("../model/fileUploadModel");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req, resp) => {


    try {

        // fetch file
        const file = req.files.file;

        // create path to store file on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
        console.log("this is path ->", path);
        console.log("this is file", file);

        // add path to the move function
        file.mv(path, (err) => { console.log(err) });

        // create successfull message   
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


const uploadFileToCloudinary = async (file, folder,quality) => {
    const options = { folder };
    if(quality){
        options.quality =quality;
    }
    options.resource_type = "auto";
   

    return await cloudinary.uploader.upload(file.tempFilePath, options);
};
// image upload handler

exports.imageUpload = async (req, resp) => {
    try {
        // const { name, tags, email } = req.body;
        // console.log(name, tags, email);

        const file = req.files.imageFile; // Assuming you're using a library like express-fileupload
        console.log(file);

        // Validation: checking if the file type is supported
        const supportedTypes = ["jpeg", "jpg", "png"];
        const fileType = file.name.split('.').pop().toLowerCase();
        console.log("filetype->", fileType);

        if (!supportedTypes.includes(fileType)) {
            return resp.status(400).json({
                success: false,
                message: "File type not supported",
            });
        }

        // Uploading the file to Cloudinary
        const response = await uploadFileToCloudinary(file, "FileUploadApp");
        console.log(response);

        // Save the entry to the database (not implemented in your code)
        const fileData = await File.create({
            name:"shahbazimage",
            tags:"image",
            email:"mohdtrailmail1@gmail.com",
            imageUrl: response.secure_url,
        })


        resp.status(200).json({
            success: true,
            message: "Image successfully uploaded",
            // cloudinaryResponse: response,
        });
    } catch (err) {
        console.log(err)
        resp.status(400).json({
            success: false,
            message: `File upload failed: ${err}`,
        });
    }
};



// video upload handler
exports.videoUpload = async (req, resp) => {
    try {
        const { name, tags, email } = req.body;
        const videoFile = req.files.videoFile;

        // Validation: checking if the file type is supported
        const supportedTypes = ["mov", "mkv", "mp4"];
        const fileType = videoFile.name.split('.')[1].toLowerCase();
        // console.log("filetype->", fileType);

        if (!supportedTypes.includes(fileType)) {
            return resp.status(400).json({
                success: false,
                message: "File type not supported",
            });
        }

        // file uploaded to cloudinary 

        const response = await uploadFileToCloudinary(videoFile, "FileUploadApp");
        // console.log(response);

        // creating data base entry 

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        })

        return resp.status(200).json({
            success: true,
            fileData,
            message: "Video Uploaded Successfull"
        })



    } catch (err) {
        resp.status(400).json({
            success: false,
            message: `File upload failed: ${err.message}`,
        });
    }


}

exports.imgReducerUpload = async (req, resp) => {
    try {
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile; // Assuming you're using a library like express-fileupload
        console.log(file);

        // Validation: checking if the file type is supported
        const supportedTypes = ["jpeg", "jpg", "png"];
        const fileType = file.name.split('.').pop().toLowerCase();
        console.log("filetype->", fileType);

        if (!supportedTypes.includes(fileType)) {
            return resp.status(400).json({
                success: false,
                message: "File type not supported",
            });
        }

        // Uploading the file to Cloudinary
        const response = await uploadFileToCloudinary(file, "FileUploadApp", 30);
        console.log(response);

        // Save the entry to the database (not implemented in your code)
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        })


        resp.status(200).json({
            success: true,
            message: "Image successfully uploaded",
            // cloudinaryResponse: response,
        });

    } catch (err) {

        resp.status(400).json({
            success: false,
            message: `File upload failed: ${err.message}`,
        });
    }
}


exports.getAll =async (req,resp)=>{

    
    try{
        
        const data = await File.find({});
        resp.status(200).json({
            success:true,
            data:data,

        })

    }catch(err){

        resp.status(404).json({
            success:false,
            message:err.message
        })


    }


}