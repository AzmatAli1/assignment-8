import React from 'react';
import './product.css'
const Product = (props) => {
    const {product} = props;
    const {name, img, price, ratings} = product;
    return (
        <div className ="product">
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p>Name: {name}</p>
            <p className='product-name'>Price: ${price}
            </p>
            <p><small>Ratings: {ratings} stars</small></p>
            </div>
          <button>
              <p className='btn-cart'>Add to Cart</p>
          </button>
        </div>
    );
};

export default Product;