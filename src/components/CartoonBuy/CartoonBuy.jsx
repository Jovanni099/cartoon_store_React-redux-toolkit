import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import { Button } from '../Button/Button'
import './CartoonBuy.less'

export const CartoonBuy = ({ cartoon }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === cartoon.id)

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(cartoon.id))
        } else {
            dispatch(setItemInCart(cartoon));
        }

    }

    return (
        <div className='cartoon-buy'>
            <span className='cartoon-buy__price'>{cartoon.episodes} руб.</span>
            <Button
                type={isItemInCart ? 'secondary' : 'primary'}
                onClick={handleClick}>
                {isItemInCart ? "Убрать из корзины" : "В Корзину"}
            </Button>
        </div>
    )
}
