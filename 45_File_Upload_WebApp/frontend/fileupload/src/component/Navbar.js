import React from 'react'
import logo from "../assets/logo.png"
import upload from "../assets/upload.png"

const Navbar = ({ setCrossBtnStatus }) => {
  const changeHandler =()=>{
    setCrossBtnStatus("true");
  }
  return (
    <div className='flex h-[15rem] justify-between'>
      <div className='flex justify-center items-center px-9 gap-2'>
        <img src={logo} height={40} width={40} alt="logo"></img>
        <p>FileUploadApp</p>
     
      </div>


      <div className='flex items-center justify-center gap-2 px-10'>
        <p className='font-bold'>Upload File</p>
        <button onClick={changeHandler}>
          
          <img src={upload} width={30} alt="uploadLogo"  className='  hover:scale-105  '></img>
        </button>
      </div>

    </div>
  )
}

export default Navbar