import React from 'react'
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=' bg-transparent flex justify-between px-4 lg:px-14 mt-2 h-8 lg:h-12 items-center gap-4 text-white'>
      <div className='logo font-bold md:text-2xl lg:text-3xl py-2'>
        <span className='text-green-400'>&lt;</span>
        Pass
        <span className='text-green-400'>Manager/&gt;</span>
      </div>
      {/* <ul className='flex gap-5 hover:scale-110 cursor-pointer' >
            <li >Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul> */}


      <a href='https://github.com/shahbaz705454?tab=repositories' target='_blank' 
      className=' lg:mr-14 ring-white px-1 py-1 lg:ring-1 flex cursor-pointer items-center text-gray-50 font-bold gap-2 bg-green-500 rounded-md lg:px-2 lg:py-1'>
        <FaGithub  />GitHub</a>


    </nav>
  )
}

export default Navbar