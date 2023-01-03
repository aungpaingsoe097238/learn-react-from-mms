import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useStateContext } from '../context/StateContext'

const Products = () => {
  const {state: { productLists } , loading} = useStateContext();
  return (
    <div className='flex gap-3 flex-wrap'>
      {
        productLists?.map(product => <Card key={product.id} product={product}></Card>)
      }
    </div>
  )
}

export default Products