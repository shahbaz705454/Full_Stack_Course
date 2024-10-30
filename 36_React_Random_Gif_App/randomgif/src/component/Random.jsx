import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

// import { useEffect } from 'react';

const API_KEY= import.meta.env.VITE_APP_GIPHY_API_KEY;

const Random = () => {

  function clickHandler(){
    fetchData();

  }

  const [gif,setGif] = useState('cute cats');
  const [loading,setLoading] = useState(false);



  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    

    try {
      setLoading(true)
      const response = await axios.get(url);
      setGif(response.data.data.images.original.url); 
      // console.log(response);
      setLoading(false);
    
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
    
  } 

  useEffect (()=>{
    fetchData();
  },[]);
   


  return (
    <div className='border border-blue-950 bg-green-500 w-[400px] flex items-center flex-col mx-auto mt-8 
    shadow-white shadow-xl rounded-xl min-h-[300px]'>

      <h1 className='mt-2 text-xl underline'>Random Gif</h1>
    

      {
        loading ? (<Spinner/>):(<img src={gif} width={300} className='my-4'/>)
      }
      
      <button onClick={clickHandler}
      className='border mt-5 mb-2 border-black bg-violet-700 text-white px-10 py-2 rounded-lg hover:bg-violet-500'>

        Generate
      </button>



    </div>
  )
}

export default Random