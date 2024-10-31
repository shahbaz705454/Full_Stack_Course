import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;


const useGif = (tag) => {

    const RandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const TagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`





    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
        try {
            setLoading(true);
            const response = await axios.get(tag ? TagMemeUrl : RandomUrl);
            setGif(response.data.data.images.downsized_large.url);
            console.log(response);
            setLoading(false);

        } catch (error) {
            console.error("Error fetching GIF:", error);
        }

    }




    useEffect(() => {
        fetchData();
    }, []);


    return{ gif,loading,fetchData}

}

export default useGif