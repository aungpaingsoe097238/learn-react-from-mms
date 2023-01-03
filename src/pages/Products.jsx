import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useStateContext } from '../context/StateContext'

const Products = () => {
  const {state: { products }} = useStateContext();
  return (
    <div className='flex gap-3 flex-wrap'>
      {
        products?.map(product => <Card key={product.id} product={product}></Card>)
      }
    </div>
  )
}

export default Products