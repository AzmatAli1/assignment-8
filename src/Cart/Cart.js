import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <p className='order-summary'>Order Summary</p>
            
             <p>Selected Items: {cart.length} </p>
             <button className='cart-shop'>CHOOSE 1 FOR ME</button>
             <button className='cart-choice'>CHOOSE AGAIN </button>
        </div>
    );
};

export default Cart;