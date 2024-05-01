/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo}></img>
                <p>SHOPPER</p>

            </div>
            <ul>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon}></img>
            </div>
        </div>
    )
}
