import React from 'react'
import { useStateContext } from '../context/StateContext'

const projects = () => {
  const { name } = useStateContext()
  return (
    <div>
      { name }
    </div>
  )
}

export default projects