import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import CartItem from '../component/CartItem';

const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("printing cart");
  console.log(cart)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])
  return (
    <div >

      {
        cart.length > 0 ?
          (<div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-20'>

            <div className='w-[100%] md:w-[60%] flex flex-col p-2 '>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>


            <div className='w-[100%] md:w-[40%] mt-5  flex flex-col'>

              <div className='flex flex-col gap-5 '>
                <div className='font-semibold text-xl text-green-800 '>Your Cart</div>
                <div className='font-semibold text-5xl text-green-700  -mt-5'>Summary</div>
                <p className='text-gray-700 font-semibold text-xl flex flex-row'>
                  <span>Total Items:<p>{cart.length}</p></span>
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='text-xl font-bold'>
                  Total Amount : {totalAmount}
                </p>
                <button
                  className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition
               duration-300 ease-linear
               mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'
                >Checkout Now</button>
              </div>

            </div>

          </div>) :
          (<div className='flex items-center justify-center flex-col h-[100vh] mx-auto'>
            <h1 className='text-2xl font-semibold'>Your Cart is Empty!</h1>
            <Link to={"/"}>
              <button className='border-2 border-green-600 px-6 py-2 mt-5 rounded-lg bg-green-600
              text-white font-semibold text-xl hover:bg-white hover:border-2 hover:border-green-600
              hover:text-black transition-all duration-600 ease-in-out
              '
              >Shop Now</button>
            </Link>
          </div>)
      }


    </div>
  )
}

export default Cart