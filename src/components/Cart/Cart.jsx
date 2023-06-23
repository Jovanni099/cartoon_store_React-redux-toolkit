import React from 'react'
import { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import './Cart.less';


export const Cart = () => {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className='cart-block'>
            <CiShoppingCart size={25} className={`cart-block__icon ${cartOpen && 'active'}`}
                onClick={() => { setCartOpen(!cartOpen) }} />
            <span className='cart-block__total-price'>2323 руб.</span>
        </div>
    )
}
