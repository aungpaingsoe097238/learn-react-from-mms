import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Service = () => {
  const nav = useNavigate()
  const location = useLocation()
  const handleClick = () => {
    nav(-1 )
  }
  return (
    <div>
      Service
      { 
        location.state && location.state.text
      }
      <button onClick={handleClick}>back</button>
    </div>
  )
}

export default Service