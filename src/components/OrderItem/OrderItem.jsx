import React from 'react'
import { useDispatch } from 'react-redux'
import { CartoonCover } from '../CartoonCover/CartoonCover';
import './OrderItem.less'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/cart/reducer';

export const OrderItem = ({ cartoon }) => {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCart(cartoon.id))
    }

    return (
        <div className='order-item'>
            <div className="order-item__cover">
                <CartoonCover image={cartoon.image} />
            </div>
            <div className="order-item__title">
                <span>{cartoon.title}</span>
            </div>
            <div className="order-item__price">
                <span>{cartoon.episodes} руб.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}
