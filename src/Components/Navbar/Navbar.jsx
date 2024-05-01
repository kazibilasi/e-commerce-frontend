/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
    const [menu, setMenu] = useState('shop')
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo}></img>
                <p>SHOPPER</p>

            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu('shop') }}>Shop{menu === "shop" ? <hr></hr>:<></>}</li>
                <li onClick={() => { setMenu('mens') }}>Men {menu === "mens" ? <hr></hr>:<></>}</li>
                <li onClick={() => { setMenu('womens') }}>Women {menu === "womens" ? <hr></hr>:<></>}</li>
                <li onClick={() => { setMenu('kids') }}>Kids {menu === "kids" ? <hr></hr>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon}></img>
                <div className='nav-cart-count'>
                    0
                </div>
            </div>
        </div>
    )
}
