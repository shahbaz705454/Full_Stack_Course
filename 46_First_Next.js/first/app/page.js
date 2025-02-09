import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='text-white flex justify-center items-center h-full flex-col'>
    <img className=" select-none" src={"https://img.freepik.com/free-vector/night-landscape-with-lake-mountains-trees-coast-vector-cartoon-illustration-nature-scene-with-coniferous-forest-river-shore-rocks-moon-stars-dark-sky_107791-8253.jpg?t=st=1739113947~exp=1739117547~hmac=95dd88bf1d1faf54787292aa707675397ab1b4c45b98f6ab9b19d673db45aac4&w=1480"}
     width={400}></img>
    
   <p> This is home page</p>
    
    </div>
  )
}

export default page