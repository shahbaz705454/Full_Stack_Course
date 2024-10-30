import React from 'react'
import Template from '../Component/Template'
import loginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome Back"
    desc1="Build skills for today, tommorow, and beyond."
    desc2="Eduction to future-proof your career."
    image={loginImg}
    formType="login"
    setIsLoggedIn={setIsLoggedIn}
    
    
    ></Template>
  )
}

export default Login