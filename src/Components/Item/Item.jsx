/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Item.css'

export const Item = (props) => {
    return (
        <div className='item'>
            <img src={props.image}></img>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-low'>
                    ${props.new_price}

                </div>
                <div className='item-price-old'>
                    ${props.old_price}

                </div>
            </div>
        </div>
    )
}
