import React, { useState } from "react";
import cross from "../assets/crossbutton.png";
import axios from "axios";

const UploadFile = ({ setCrossBtnStatus }) => {
  const [formData, setFormData] = useState(null); // State to store selected file
  const [loading, setLoading] = useState(false); // State to track loading status

  // Handle closing the component
  const handleClose = () => {
    setCrossBtnStatus("false");
  };

  // Handle file selection
  const fileUpload = (event) => {
    const selectedFile = event.target.files[0]; // Get the selected file
    setFormData(selectedFile); // Update state with the file data
  };

  // Handle form submission
  const changeHandler = async (event) => {
    event.preventDefault();

    if (!formData) {
      alert("Please select an image");
      return;
    }

    // Create FormData object to send the file in a POST request
    const uploadData = new FormData();
 
    console.log(formData)
    uploadData.append("imageFile", formData);
    
   

    setLoading(true); // Set loading to true when upload starts

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/imageUpload",
        uploadData
      );
      alert("File uploaded successfully");
      console.log(response.data);
    } catch (err) {
      alert("Failed to upload image");
      console.error(err);
    } finally {
      setLoading(false); // Set loading to false when upload finishes
    }
  };

  return (
    <div className="upload absolute z-50 bg-slate-200 h-full w-full flex justify-center items-center">
      <div className="flex justify-center items-center h-80 w-96 bg-slate-200 rounded-sm shadow-lg shadow-slate-400 relative">
        {/* Cross Button */}
        <button onClick={handleClose} className="p-2 absolute top-2 right-2">
          <img src={cross} alt="Close" width={30} />
        </button>

        <div className="border-2 border-black border-dashed rounded-xl flex justify-center items-center h-52">
          {loading ? (
            <div className="text-blue-500 font-bold">Uploading, please wait...</div>
          ) : (
            <form className="flex flex-col items-center">
              <input
                onChange={fileUpload}
                type="file"
                className="mb-4 px-5 flex items-center justify-center mx-auto"
              />
              <button
                onClick={changeHandler}
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
              >
                Upload
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
