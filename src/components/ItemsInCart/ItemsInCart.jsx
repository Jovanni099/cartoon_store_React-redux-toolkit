import React from 'react'
import './ItemsInCart.less'

export const ItemsInCart = ({ quantity = 0 }) => {
    return quantity ? (
        <div className='items-in-cart'>
            {quantity}
        </div>
    ) : null
}
