import React from 'react'
import { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { CartMenu } from '../CartMenu/CartMenu';
import { ItemsInCart } from '../ItemsInCart/ItemsInCart';
import { calcTotalPrice } from '../utils/utils';
import './Cart.less';


export const Cart = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const [cartOpen, setCartOpen] = useState(false);
    const handleClick = () => {
        setCartOpen(!cartOpen)
        setIsCartMenuVisible(!isCartMenuVisible)
    }

    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length} />
            <CiShoppingCart size={25} className={`cart-block__icon ${cartOpen && 'active'}`}
                onClick={handleClick} />
            {totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice} руб.</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
        </div>
    )
}
