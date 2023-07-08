import React from 'react'
import { PRODUCTS } from '../../products'
import ProductLink from './ProductLink';
import './Shop.css'

const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Infinity Shops</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => (
              <ProductLink data={product}/>
            ))}
        </div>
    </div>
  )
}

export default Shop;