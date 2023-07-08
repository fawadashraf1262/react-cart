import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
const ProductLink = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
      <img src={productImage}  alt="Iphone" />
      <div className="product-tag">
      <h3>{productName}</h3>
      <p>${price}</p>
      <button  className='addToCartBttn' onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}</button>
      </div>
    </div>
  )
}

export default ProductLink;