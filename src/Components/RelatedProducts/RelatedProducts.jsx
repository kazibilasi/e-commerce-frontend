/* eslint-disable no-unused-vars */
import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import { Item } from '../Item/Item'

export const RelatedProducts = () => {
  return (
    <div className='relatedProducts'>
        <h1>Related Products</h1>
        <hr></hr>
        <div className='relatedProducts-item'>
            {data_product.map((item, i)=>{
                return <Item key = {i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
            })}
        </div>
    </div>
  )
}
