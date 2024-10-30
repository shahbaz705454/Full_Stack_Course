import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

const SignUp = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,setFormData]= useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        conpassword:""
    })

    const [showPassword,setPassword] = useState(false);
    const [showPassword2,setPassword2] = useState(false);

    function changeHandler(event) {

        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
  return (
    <div>
        {/* student instructor tab */}
        <div>
            <button>Student</button>
            <button>instructor</button>
        </div>

        {/* Form */}

        <form>

            {/* first name nd last name */}
            <div>
            <label>
                <p>
                    First Name <sup>*</sup>
                </p>
                <input required type='text' name='firstname' onChange={changeHandler}
                placeholder='Enter First Name'
                value={formData.firstname}/>
            </label>

            <label>
                <p>
                    Last Name <sup>*</sup>
                </p>
                <input required type='text' name='lastname' onChange={changeHandler}
                placeholder='Enter Last Name'
                value={formData.lastname}/>
            </label>


            </div>

            {/* Email */}

            <div>

            <label>
                <p>
                    Email Address <sup>*</sup>
                </p>
                <input required type='email' name='email' onChange={changeHandler}
                placeholder='Enter email address'
                value={formData.email}/>
            </label>

            </div>

            {/* /password  */}



            <div>

            <label>
                <p>
                    Enter Password <sup>*</sup>
                </p>
                <input required type={showPassword ? ("text") : ("password")} name='password' onChange={changeHandler}
                placeholder='Enter password'
                value={formData.password}/>
                 <span onClick={() => setPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>
            </label>

            <label>
                <p>
                    Confirm Password <sup>*</sup>
                </p>
                <input required type={showPassword2 ? ("text") : ("password")} name='conpassword' onChange={changeHandler}
                placeholder='Confirm Password'
                value={formData.conpassword}/>
                 <span onClick={() => setPassword2((prev) => !prev)}>
                    {showPassword2 ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>
            </label>






            </div>


            <button onClick={(event)=>{
                 event.preventDefault(); 

                 if(formData.password != formData.conpassword){
                    toast.error("Password do not match !");
                    return;
                 }else{
                    setIsLoggedIn(true)
                 console.log(formData);
                 toast.success("Account Created !")
                 navigate("/dashboard");
                

                 }
                 
                
                }}>Create Account</button>
        </form>
    </div>
  )
}

export default SignUp