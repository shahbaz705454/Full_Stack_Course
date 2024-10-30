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
        <form>
            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input type='email' required value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter Your Email'
                    name='email'
                />
            </label>


            <label>
                <p>
                    Password<sup>*</sup>
                </p>
                <input type={showPassword ? ("text") : ("password")} required value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                />

                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>
                <Link to='#'>
                    <p>
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

            }}>
                Sign In
            </button>
        </form>
    )
}

export default LoginForm