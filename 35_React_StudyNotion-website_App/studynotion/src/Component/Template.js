import React from 'react'
import frameImage from "../assets/frame.png"
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {



    return (
        <div className='flex  w-11/12 max-w-[1160px] justify-between gap-x-12 gap-y-0 py-12 mx-auto  '>


            <div className='w-11/12 max-w-[450px]' >
                <h1 className='text-richblack-5 font-semibold text-[1.85rem] '
                >{title}</h1>

                <p className=' text-richblack-5 text-[1.15rem] 
                leading-[1.65]'>
                    <span className='text-richblack-100'>{desc1}</span>
                    <br />
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>


                {formType === "signup" ?
                    (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}


                <div className='text-white flex flex-row w-full items-center gapx-2'>
                    <div className=' h-[2px] bg-richblack-700 w-full'></div>
                    <p className='text-richblack-700 font-medium leading-[1.75]'> OR </p>
                    <div className=' h-[2px] bg-richblack-700 w-full'></div>
                </div>


                <button className='w-full flex justify-center items-center rounded-[8px] font-medium
                text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle />
                    <p>Sign Up With Google</p>
                </button>

            </div>

            <div className=' relative w-11/12 max-w-[450px]'>
                <img src={frameImage}
                    alt='Pattern'
                    width={558}
                    height={504}
                    loading='lazy'
                // className=' absolute z-10'


                />
                <img src={image}
                    alt='Students'
                    width={558}
                    height={490}
                    loading='lazy'

                className=' absolute -top-4 right-4'


                />
            </div>






        </div>
    )
}

export default Template