import React from 'react'
import logo from "../pages/logo3.com.png"
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Cart from '../pages/Cart';
import { useSelector } from "react-redux"

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className='bg-slate-900 h-[70px] flex items-center'>

      <div className="flex  w-8/12 mx-auto flex-row items-center justify-between">
        <NavLink to="/">

        <img src={logo} alt='Logo' width={50} className='Logo' />

        </NavLink>

        <div className=' flex items-center justify-center gap-10 text-2xl text-white'>

          <NavLink to="/">

            <p>Home</p>
          </NavLink>


          <NavLink to="/Cart" >
          <div className='relative'>

            
            <FaCartShopping className='hover:text-green-400' />
            {
              cart.length>0 &&
              <span className='
              absolute bg-green-600 text-xs w-5 h-5 flex justify-center 
              items-center animate-bounce -top-1
               -right-2 rounded-full top- text-white
              
              '>{cart.length}</span>
            }

          </div>
          </NavLink>



        </div>

      </div>
    </div>
  )
};

export default Navbar