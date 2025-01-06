import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const GalleryView = () => {
  const [respData, setResData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/getAll");
      setResData(response.data.data); // Assuming response.data.data contains the gallery items
      // console.log("response ->", response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="gallery flex-grow bg-yellow-400">
      <div className="absolute top-[40%] left-[40%] text-8xl font-extrabold text-gray-600 opacity-20 select-none">
        GALLERY
      </div>
      {/* Ensure you pass data to the Card component */}
      <div className="gallery-items grid grid-cols-4 gap-4">
      {
        respData.map((item,index)=>(
          <Card item ={item} key={index}/>

        ))
      }
      </div>
    </div>
  );
};

export default GalleryView;
