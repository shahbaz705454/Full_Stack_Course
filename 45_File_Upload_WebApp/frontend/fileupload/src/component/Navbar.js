import React from 'react'
import logo from "../assets/logo.png"
import upload from "../assets/upload.png"

const Navbar = () => {
  return (
    <div className='border-2 border-black flex h-[10vh] justify-between'>
      <div className='flex justify-center items-center px-9 gap-2'>
        <img src={logo} height={40} width={40}></img>
        <p>FileUploadApp</p>
     
      </div>


      <div className='flex items-center justify-center gap-2 px-10'>
        <p className='font-bold'>Upload File</p>
        <button>
          
          <img src={upload} width={30}  className='bg-slate-500 p-1 hover:scale-105  rounded-full'></img>
        </button>
      </div>

    </div>
  )
}

export default Navbar