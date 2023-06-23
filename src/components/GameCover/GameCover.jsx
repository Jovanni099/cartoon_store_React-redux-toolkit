import React from 'react'
import './GameCover.less'

export const GameCover = ({ image = "" }) => {
    return (
        // <div className='cartoon-cover'><img src={image} alt="" /></div>
        <div className='cartoon-cover' style={{ backgroundImage: `url(${image})` }} />
    )
}
