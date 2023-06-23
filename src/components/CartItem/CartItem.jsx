import React from 'react'
import './CartItem.less'

export const CartItem = ({
    title, id, price
}) => {
    return (
        <div className='cart-item'>
            <span>{title}</span>
            <div className="cart-item__price">
                <span>{price} руб.</span>
            </div>
        </div>
    )
}
