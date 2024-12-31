import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEmployeePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    role: "",
  });

  const navigate = useNavigate();
  const submitHandler = async(event) => {

    event.preventDefault();

    try{

      const response = await axios.post("http://localhost:4000/api/v1/setUser",formData);
      console.log("User Created Succesfull",response);
      alert("User Created !");

      navigate("/");
      

    }catch(err){

      console.log("Error while creating User");
      console.log(err);

    }

    
   
  };

  const clickHandler = (event) => {
    const { name, type, checked, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="bg-black h-screen w-screen text-white">
      <div className="w-4/12 mx-auto flex gap-5 flex-col pt-10">
        <div>
          <h1 className="font-bold text-4xl">Create an Employee</h1>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="text-blue-700 font-semibold"
          >
            {`<- Back to all Employee list`}
          </button>
        </div>

        <form onSubmit={submitHandler} className="flex flex-col gap-3">
          <label htmlFor="name">Employee Name</label>
          <input
            className="basic"
            onChange={clickHandler}
            type="text"
            name="name" // Matches "name" key in formData
            value={formData.name}
            id="name"
            placeholder="Enter Your Name"
          />

          <label htmlFor="email">Employee Email Id</label>
          <input
            className="basic"
            onChange={clickHandler}
            type="text"
            name="email" // Matches "email" key in formData
            value={formData.email}
            id="email"
            placeholder="Enter Your Email"
          />

          <label htmlFor="title">Employee Title</label>
          <input
            className="basic"
            onChange={clickHandler}
            type="text"
            name="title" // Matches "title" key in formData
            value={formData.title}
            id="title"
            placeholder="Enter Title"
          />

          <label htmlFor="role">Employee Role</label>
          <input
            className="basic"
            onChange={clickHandler}
            type="text"
            name="role" // Matches "role" key in formData
            value={formData.role}
            id="role"
            placeholder="Enter role"
          />

          <button className="bg-blue-700 py-2 rounded-lg font-bold mt-5">
            Create Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeePage;
