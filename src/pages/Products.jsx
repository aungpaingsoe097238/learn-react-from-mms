import React from 'react'
import { useStateContext } from '../context/StateContext'

const Products = () => {
  const {state : {productLists}} = useStateContext();
  return (
    <div></div>
  )
}

export default Products