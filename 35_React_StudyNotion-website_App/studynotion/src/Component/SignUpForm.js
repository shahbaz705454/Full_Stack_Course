import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignUp = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        conpassword: ""
    })

    const [showPassword, setPassword] = useState(false);
    const [showPassword2, setPassword2] = useState(false);
    const [accounttype,setAccountType] =useState("student");

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
            <div className= 'flex justify-between p-1 gap-x-1 my-6 bg-richblack-800 max-w-max rounded-full'>
                <button onClick={()=>setAccountType("student")}
                className={`${accounttype==="student" ? 
                "bg-richblack-900 text-richblack-5":
                 "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>Student</button>
               
                <button onClick={()=>setAccountType("instructor")}
                className={`${accounttype==="student" ? 
                     "bg-transparent text-richblack-200":
                    "bg-richblack-900 text-richblack-5"} py-2 px-5 rounded-full transition-all duration-200`}
                             
                >Instructor</button>
            </div>

            {/* Form */}

            <form className='flex flex-col w-full gap-y-4 mt-6'>

                {/* first name nd last name */}
                <div className='flex gap-4'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem]'>
                            First Name <sup className='text-pink-200'>*</sup>
                        </p>
                        <input required type='text' name='firstname' onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                    w-full p-[12px]'/>
                    </label>

                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem]'>
                            Last Name <sup className='text-pink-200'>*</sup>
                        </p>
                        <input required type='text' name='lastname' onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                    w-full p-[12px]'/>
                    </label>


                </div>

                {/* Email */}

                <div>

                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem]'>
                            Email Address <sup className='text-pink-200'>*</sup>
                        </p>
                        <input required type='email' name='email' onChange={changeHandler}
                            placeholder='Enter email address'
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                    w-full p-[12px]'/>
                    </label>

                </div>

                {/* /password  */}



                <div className='flex gap-4'>

                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem]'>
                            Enter Password <sup className='text-pink-200'>*</sup>
                        </p>
                        <input required type={showPassword ? ("text") : ("password")} name='password' onChange={changeHandler}
                            placeholder='Enter password'
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                    w-full p-[12px]'/>
                        <span onClick={() => setPassword((prev) => !prev)}
                            className=' absolute cursor-pointer right-3 top-[40px] text-richblack-5'>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem]'>
                            Confirm Password <sup className='text-pink-200'>*</sup>
                        </p>
                        <input required type={showPassword2 ? ("text") : ("password")} name='conpassword' onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.conpassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                    w-full p-[12px]'/>
                        <span onClick={() => setPassword2((prev) => !prev)}
                            className=' absolute cursor-pointer right-3 top-[40px] text-richblack-5'>
                            {showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>






                </div>


                <button onClick={(event) => {
                    event.preventDefault();

                    if (formData.password != formData.conpassword) {
                        toast.error("Password do not match !");
                        return;
                    } else {
                        setIsLoggedIn(true)
                        console.log(formData);
                        console.log(accounttype)
                        toast.success("Account Created !")
                        navigate("/dashboard");


                    }

                    


                }}
                    className='w-full mt-6 mb-3 bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'

                >Create Account</button>
            </form>
        </div>
    )
}

export default SignUp