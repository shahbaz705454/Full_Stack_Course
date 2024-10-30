import React from 'react'
import Template from '../Component/Template'
import signupImg from '../assets/signup.png'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
   
    title="Join the million learing to code with StudyNotion for free"
    desc1="Build skills for today, tommorow, and beyond."
    desc2="Eduction to future-proof your career."
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
    
    
    />
  )
}

export default SignUp