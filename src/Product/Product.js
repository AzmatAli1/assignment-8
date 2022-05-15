import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import './product.css'
const Product = ({product, handleAddToCart}) => {
   // const {product, handleAddToCart} = props;
    const {name, img, price, ratings} =  product;
    
    return (
        <div className ="product">
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p>Name: {name}</p>
            <p className='product-name'>Price: ${price}
            </p>
            <p><small>Ratings: {ratings} stars</small></p>
            </div>
          <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
              <p className='btn-text'>Add to Cart</p>
              <FontAwesomeIcon icon ={faBagShopping}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Product;