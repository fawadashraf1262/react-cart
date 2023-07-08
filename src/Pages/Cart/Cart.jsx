import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../products';
import { Link, useNavigate } from 'react-router-dom'
import CartItems from './CartItems';

import './C.css'

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, totalCartAmount } = useContext(ShopContext);
  const totalAmount = totalCartAmount();
  console.log(totalAmount)
  const cartItemsArray = Object.values(cartItems);
  const isCartEmpty = cartItemsArray.every(quantity => quantity === 0);

  return (
    <div className='cart'>
      <div>
        <h1> Cart </h1>
      </div>
      {isCartEmpty ? (
        <>
        <p className='empty'>Your cart is empty.</p>
        <button className='continue' onClick={() => navigate("/")} >Continue Shopping</button>
        </>

      ) : (
        <>
        <div className='cartItems'>
          {PRODUCTS.map(product => {
            if (cartItems[product.id] !== 0) {
              return <CartItems data={product} />;
            }
            return null;
          })}
        </div>
        <div className="checkout">
          <p>Total: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shoping</button>
          <button>CheckOut</button>
        </div>
          </>
      )}
    </div>);
}

export default Cart