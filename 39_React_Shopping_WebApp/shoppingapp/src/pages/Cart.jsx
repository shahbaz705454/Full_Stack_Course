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
    <div className='flex w-8/12 mx-auto flex-row'>

      {
        cart.length > 0 ?
          (<div>

            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

          </div>) :
          (<div>
            <h1>Cart Empty</h1>
            <Link to={"/"}>
              <button>Shop Now</button>
            </Link>
          </div>)
      }


      <div>
        <div>Your Cart</div>
        <div>Summary</div>
        <p>
          <span>Total Items:<p>{cart.length}</p></span>
        </p>
       </div>
      <div>
        <p>
          Total Amount : {totalAmount}
        </p>
        <button>Check </button>
      </div>
    </div>
  )
}

export default Cart