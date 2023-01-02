import React from 'react'
import { useStateContext } from './context/StateContext'

const One = () => {
  const {name,count,inc,dec} = useStateContext()
  return (
    <div>
      <button onClick={inc} className="btn-primary">+</button>
      { count }
      <button onClick={dec} className="btn-primary">-</button>
    </div>
  )
}

export default One