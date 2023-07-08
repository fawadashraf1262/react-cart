import React, { useContext } from 'react'
import './C.css'
import { ShopContext } from '../../context/shop-context';
const CartItems = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItem } = useContext(ShopContext)
  const { id, productName, price, productImage } = props.data;
  return (
    <div className='cartItem'>
      <div className="image">
        <img src={productImage} alt="cart item " />
      </div>
      <div class="container">
        <div class="left-div">
          <h2><b>{productName}</b></h2>
        </div>
        <div class="right-div">
          <p>${price}</p>
          <div className="countHandler">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)} />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems