import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Spinner from '../component/Spinner';
import Product from '../component/Product';

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)

  async function fetchProductData(params) {

    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      setLoading(false);

    } catch (error) {

      toast.error("Data is Not Available");

    }

  }
  // console.log(posts);

  useEffect(() => {

    fetchProductData();
  }, []);
  return (


    <div >
      {
        loading ? <Spinner /> :
          posts.length > 0 ?
            (<div className='flex flex-wrap w-9/12 mx-auto gap-1' >

              {
                posts.map((post) => (
                  <Product key={posts.id} post={post} />

                ))}
            </div>) :
            <div>
              <p>No Data Found</p>
            </div>

      }








    </div>
  );
};

export default Home