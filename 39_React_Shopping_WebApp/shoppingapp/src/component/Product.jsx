import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { remove, add } from '../redux/slices/CartSlice';


const Product = ({ post }) => {
    const desc = post.description;
    const newDesc = `${desc.slice(0, 51)}...`;
    const newTitle = `${post.title.slice(0, 17)}...`;
    const { cart } = useSelector((state) => state);

    const dispatch = useDispatch();

    const addToCart=() =>{
        dispatch(add(post));
        toast.success("Item Added To Cart");
    }

    const removeFromCart=()=> {

        dispatch(remove(post.id));
        toast.error("Item Removed From Cart");

    }

    return (
        <div className='flex flex-col mx-auto w-[300px]  items-center
        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]
        cursor-pointer rounded-2xl gap-3 p-4 mt-10 ml-5 mb-10 transition-all hover:scale-105 duration-500'>
            <div>
                <p className='truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left'>{newTitle}</p>
            </div>
            <div className=' w-40 text-gray-400 font-normal text-[10px] text-left'>{newDesc}</div>
            <div className='h-[180px]'>
                <img src={post.image} alt='Images' className='h-full w-full object-contain'></img>
            </div>

            <div className='flex justify-between items-center w-full px-4 mt-4'>
                <p className='text-green-600 font-semibold'>{`$${post.price}`}</p>
            {
                
                cart.some((p) => p.id == post.id) ? (
                    <button 
                    className='hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700
                 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'
                    
                    
                    onClick={removeFromCart}
                    >REMOVE ITEM</button>
                ) : (
                    <button 
                    className='hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700
                 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'

                    onClick={addToCart}>ADD TO CART</button>
                )
                
                
                
            }
            </div>
          



        </div>
    );
};

export default Product