"use client"
import React from 'react'

const page = () => {
  const clickhandler = ()=>{
    Navigator("/")
  }
  return (
    <div>This is new about page
    <button onClick={clickhandler}>click me</button>
    </div>

  )
}

export default page