/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)
    return (
        <div className='cartItems'>
            <div className='cartItems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr></hr>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className='cartItems-format cartItems-format-main'>
                            <img src={e.image} className='cartIcon-product-icon'></img>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartItems-quantity'>{cartItems[e.id]} </button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} className='cartItems-remove-icon' onClick={() => { removeFromCart(e.id) }}></img>
                        </div>
                        <hr></hr>
                    </div>
                }
                return null;
            })}

            <div className='cartItems-down'>
                <div className='cartItems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartItems-total-items'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>

                        </div>
                        <hr></hr>
                        <div className='cartItems-total-items'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr></hr>
                        <div className='cartItems-total-items'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
                <div className='cartItems-promoCode'>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cartItem-promo-box'>
                        <input type='text' placeholder='promo code'></input>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
