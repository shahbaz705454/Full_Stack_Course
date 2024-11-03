import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const desc = `${item.description.slice(0,105)}...`
  const removeFromCart =()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");

  }
  return (
   
      <div className='flex items-center  p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 '>
         <div className='w-[30%]'>
          <img src={item.image} width={200} className='object-cover'/>
         </div>
         <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
          <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
          <h1 className='text-base text-slate-700 font-medium'>{desc}</h1>
          <div className='flex items-center justify-between'>
            <p className='font-bold text-lg text-green-600'>{item.price}</p>
            <div className=' bg-red-200 group hover:bg-red-400 transition-transform
             duration-300 cursor-pointer rounded-full p-3 mr-3'
            onClick={removeFromCart}>
            <MdDelete />
            </div>
          </div>
         </div>

      </div>
   
  )
}

export default CartItem