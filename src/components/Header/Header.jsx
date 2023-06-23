import React, { useState } from 'react'
import { Cart } from '../Cart/Cart';
import { Link, Navigate } from 'react-router-dom';

import './Header.less';

export const Header = () => {

    return (
        <div className='header'>
            <div className="wrapper">
                <Link to={'/home-page'} className="header__store-title">
                    Game Store
                </Link>
            </div>
            <div className='wrapper header__cart-btn-wrapper'>
                <Cart />
            </div>
        </div>
    )
}
