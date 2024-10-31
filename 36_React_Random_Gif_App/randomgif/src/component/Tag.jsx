import React, { useState, useEffect } from 'react'
import Spinner from './Spinner'
import axios from 'axios';
import useGif from '../hooks/useGif';


const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;

const Tag = () => {

  
  const [tag, setTag] = useState("cute cats");
  
  const {gif ,loading ,fetchData} = useGif(tag);




  function clickHandler() {
    fetchData(tag);





  }

  function changeHandler(event) {
    setTag(event.target.value);
    // console.log(tag);

  }



  return (
    <div
      className='bg-red-400 w-[400px] flex items-center flex-col mx-auto mt-8 
    shadow-white shadow-xl rounded-xl'>

      <h1 className='mt-2 text-xl underline'>{` Random ${tag} GIF`}</h1>


      {
        loading ? (<Spinner></Spinner>) : (<img src={gif} width={300} className='my-4' />)
      }

      <input type='text' name='' placeholder='Enter Text Here' value={tag} onChange={changeHandler}
        className='mt-2 text-center flex items-center justify-center rounded-md w-10/12 border border-black' />


      <button onClick={clickHandler}
        className='border mt-2 mb-2 border-black bg-violet-700 text-white px-10 py-2 rounded-lg hover:bg-violet-500'>

        Generate
      </button>





    </div>
  )
}

export default Tag