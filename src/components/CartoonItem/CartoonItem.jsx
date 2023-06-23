import React from 'react'
import { CartoonBuy } from '../CartoonBuy/CartoonBuy';
import { CartoonGenre } from '../CartoonGenre/CartoonGenre';
import { GameCover } from '../GameCover/GameCover';
import './CartoonItem.less';

export const CartoonItem = ({ cartoon }) => {
    return (
        <div className='cartoon-item'>
            <GameCover image={cartoon.image} />
            <div className='cartoon-item__details'>
                <span className='cartoon-item__title'>{cartoon.title}</span>
                <div className='cartoon-item__genre'>
                    {cartoon.genre.map((genre) => <CartoonGenre genre={genre} key={genre} />)}
                </div>
                <div className='cartoon-item__buy'>
                    <CartoonBuy cartoon={cartoon} />
                </div>
            </div>
        </div>
    )
}

let cartoon = {
    "title": "Spongebob Squarepants",
    "year": 1999,
    "creator": [
        "Stephen Hillenburg"
    ],
    "rating": "TV-Y",
    "genre": [
        "Comedy",
        "Family"
    ],
    "runtime_in_minutes": 23,
    "episodes": 272,
    "image": "https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7",
    "id": 1
};