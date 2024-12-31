import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const CreateTodo = ({refreshTodos}) => {
    const [todo, createTodo]=useState({
        title:"",
        description:""
    })

    const changeHandler =(event)=>{


            const { name, type, checked, value } = event.target;
            createTodo((prev) => ({
              ...prev,
              [name]: type === "checkbox" ? checked : value,
            }));

         
    
    }

    const clickHandler =(event)=>{
        event.preventDefault();
        setData();
        
    }



    const setData =async ()=>{

      try{

        const response = await axios.post("http://localhost:7000/api/v1/createTodo",todo);
        console.log("Todo list created successful",response);
        toast.success("Todo Created");
        refreshTodos();

        createTodo({
          title: "",
          description: ""
      });




      }catch(err){
        console.log(err.message);



      }

    }
 
       

  return (
    <div className='flex text-white gap-5 flex-col'>
        <h1 className='flex justify-center items-center p-5 text-3xl underline font-bold'>Create Todo</h1>
        <form className='flex flex-col px-10 py-5 gap-2'onSubmit={clickHandler} >
        <label htmlFor="title">Title</label>
          <input
            className="basic"
            onChange={changeHandler}
            type="text"
            name="title" // Matches "name" key in formData
            value={todo.title}
            id="title"
            placeholder="Enter Title"
          />
            
            <label  htmlFor='description'>Description</label>
            <input className="basic" onChange={changeHandler} placeholder='Enter Description' name='description' type='textArea' value={todo.description}></input>

            <button className='bg-green-600 m-4 rounded-lg p-3 hover:scale-105 transition-all duration-75' >Create Todo</button>
        </form>

        <ToastContainer />

    </div>
  )
}

export default CreateTodo