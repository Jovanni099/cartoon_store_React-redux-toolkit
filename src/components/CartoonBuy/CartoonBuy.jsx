import React from 'react'
import { Button } from '../Button/Button'
import './CartoonBuy.less'

export const CartoonBuy = ({ cartoon }) => {

    return (
        <div className='cartoon-buy'>
            <span className='cartoon-buy__price'>{cartoon.episodes} руб.</span>
            <Button
                type='primary'
                onClick={() => null}>
                В Корзину
            </Button>
        </div>
    )
}
