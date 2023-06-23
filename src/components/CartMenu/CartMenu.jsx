import React from 'react'
import { Button } from '../Button/Button'
import { CartItem } from '../CartItem/CartItem'
import { calcTotalPrice } from '../utils/utils'
import './CartMenu.less'
export const CartMenu = ({ items, onClick }) => {
    return (
        <div className='cart-menu'>
            <div className="cart-menu__cartoon-list">
                {
                    items.length > 0 ? items.map(cartoon => <CartItem
                        key={cartoon.title}
                        price={cartoon.episodes}
                        title={cartoon.title}
                        id={cartoon.id}
                    />) : 'Корзина пуста'
                }
            </div>
            {
                items.length > 0 ?
                    <div className="cart-menu__arrange">
                        <div className="cart-menu__total-price">
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)} руб.</span>
                        </div>
                        <Button type="primary" size='m' onClick={onClick}>
                            Оформить заказ
                        </Button>
                    </div> : null
            }
        </div>
    )
}
