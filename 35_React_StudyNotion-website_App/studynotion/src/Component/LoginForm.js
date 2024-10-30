import React, { useState } from 'react'
import toast from 'react-hot-toast';
// import { Form } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
        <form className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full '>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input type='email' required value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter Your Email'
                    name='email'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                    w-full p-[12px]'

                />
            </label>


            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem]'>
                    Password<sup className='text-pink-200'>*</sup>
                </p>
                <input type={showPassword ? ("text") : ("password")} required value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                     className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                    w-full p-[12px]'
                />

                <span onClick={() => setShowPassword((prev) => !prev)}
                    className=' absolute cursor-pointer right-3 top-[40px] text-richblack-5'>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                <Link to='#'>
                    <p className= 'w-full text-blue-100 max-w-max text-xs mt-1 ml-auto'>
                        Forget Password
                    </p>
                </Link>

            </label>

            <button onClick={(event)=>{
                event.preventDefault(); 
                setIsLoggedIn(true)
                console.log(formData);
                toast.success("Logged In")
                navigate("/dashboard");
                

            }}
            
            className='w-full mt-6 bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'
            >
                Sign In
            </button>
        </form>
    )
}

export default LoginForm