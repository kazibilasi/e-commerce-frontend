/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrums } from '../Components/Breadcrums/Breadcrums'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'

export const Product = () => {
  const{all_product}= useContext(ShopContext)
  const {Id} = useParams()
  const product = all_product.find((e)=>e.id === Number(Id))
  return (
    <div>
      <Breadcrums product={product}></Breadcrums>
      <ProductDisplay product={product}></ProductDisplay>
    </div>
  )
}
