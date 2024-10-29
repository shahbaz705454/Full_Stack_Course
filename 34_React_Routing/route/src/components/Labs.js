import React from 'react'
import { useNavigate } from 'react-router-dom';

const Labs = () => {

  
  const navigate = useNavigate();


  function clickHandler(){
    navigate("/support")

  }
  return (
    <div>Labs

<div><button onClick={clickHandler}>Move to Labs Page</button></div>
    </div>
  )
}

export default Labs