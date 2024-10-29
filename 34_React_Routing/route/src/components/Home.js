import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();


  function clickHandler(){
    navigate("/labs")

  }
  return (
    <div>
      <div>Home
    </div>

    <div><button onClick={clickHandler}>Move to Labs Page</button></div>
    
    </div>

  )
}

export default Home;