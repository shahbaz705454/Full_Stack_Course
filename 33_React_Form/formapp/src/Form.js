import React, { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        country:"",
        Street:"",
        city:"",
        state:"",
        zip:"",


    });

    function clickHandler(event){
        const {name,type,checked,value} = event.target;

        setFormData((prev)=>{
            return{
                ...prev,
                [name]:type==="checkbox"?checked:value
            }

        });

        


    }
  return (
    <div className='w-full md:max-w-[50%] mx-auto shadow p-8'>

        <form className=' flex flex-col gap-2  mx-auto justify-center mt-4 '>
            <label>First Name</label>
            <input onClick={clickHandler} className='border-2  border-black'></input>
            





        </form>






    </div>
  )
}

export default Form