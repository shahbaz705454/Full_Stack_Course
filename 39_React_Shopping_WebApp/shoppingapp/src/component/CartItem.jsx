import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart =()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");

  }
  return (
   
      <div className='flex justify-center items-center w-6/12'>
         <div>
          <img src={item.image} width={200}/>
         </div>
         <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}>
            <MdDelete />
            </div>
          </div>
         </div>

      </div>
   
  )
}

export default CartItem