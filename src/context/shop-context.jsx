import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';
export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let Cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        Cart[i] = 0;
    }
    return Cart;
}


const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const totalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount.toFixed(2);
      };
      

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1}));
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1}));
    }
    const updateCartItem = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount}))
    }
    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItem, totalCartAmount };
    console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
} 

export default ContextProvider