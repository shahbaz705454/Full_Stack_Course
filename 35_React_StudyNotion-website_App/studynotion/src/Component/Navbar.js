import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg"
import toast, { Toaster } from 'react-hot-toast';


const Navbar = (props) => {
    let isloggedIn = props.isloggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto  '>
       <Link to="/">
       <img src={logo} alt='logo' width={160} height={32} loading='lazy'></img></Link>

       <nav>
        <ul>
            <li  className='flex gap-4 text-richblack-100 gap-x-6 text-lg '>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </li>
        </ul>
       </nav>

       {/* Button login signup-Logout-Dashboard */}

       <div className='flex items-center gap-x-4'>
        { !isloggedIn &&
            <Link to="/login">
                <button onClick={()=>{
                    setIsLoggedIn(true);
                    toast.success("Logged In");
                    

                }}
                className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                rounded-[8px] border border-richblack-700'
                >Log In</button>
            </Link>
            
        }
        { !isloggedIn &&
            <Link to="/signup">
                <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                rounded-[8px] border border-richblack-700'>
                Sign Up
                </button>
            </Link>
            
        }

        {  isloggedIn && 
            <Link to="/logout">
                <button onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out"); 

                }}
                 className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                rounded-[8px] border border-richblack-700'
                
                >Log Out</button>
            </Link>
            
        }

        { isloggedIn &&
            <Link to="/dashboard">
                <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                rounded-[8px] border border-richblack-700'
                >Dashboard</button>
            </Link>
        }
       </div>
    </div>
  )
}

export default Navbar;