import React from 'react'
import './CartoonCover.less'

export const CartoonCover = ({ image = "" }) => {
    return (
        // <div className='cartoon-cover'><img src={image} alt="" /></div>
        <div className='cartoon-cover' style={{ backgroundImage: `url(${image})` }} />
    )
}
