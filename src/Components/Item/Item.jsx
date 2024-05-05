/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
    return (
        <div className='item'>
           <Link to ={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image}></img></Link>
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
