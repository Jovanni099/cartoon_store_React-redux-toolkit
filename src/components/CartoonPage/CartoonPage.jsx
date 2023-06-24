import React from 'react'
import { useSelector } from 'react-redux'
import { CartoonBuy } from '../CartoonBuy/CartoonBuy'
import { CartoonCover } from '../CartoonCover/CartoonCover'
import { CartoonGenre } from '../CartoonGenre/CartoonGenre'
import './CartoonPage.less'

export const CartoonPage = () => {
    const cartoon = useSelector(state => state.cartoons.currentCartoon)

    if (!cartoon) return null
    return (
        <div className='cartoon-page'>
            <h1 className="cartoon-page__title">{cartoon.title}</h1>
            <div className="cartoon-page__content">
                <div className="cartoon-page__left">
                    <iframe src="https://youtu.be/LjAAEDN551A" frameborder="0" width="90%"
                        height="400px"
                        title="YouTube Video Player"
                    ></iframe>
                </div>
                <div className="cartoon-page__right">
                    <CartoonCover image={cartoon.image} />
                    <p>{cartoon.rating}</p>
                    <p className="secondary-text">Популярные метки этого продукта:</p>
                    {cartoon.genre.map((genre) => <CartoonGenre genre={genre} key={genre} />)}
                    <div className='cartoon-page__buy-cartoon'>
                        <CartoonBuy cartoon={cartoon} />
                    </div>
                </div>
            </div>
        </div >
    )
}
