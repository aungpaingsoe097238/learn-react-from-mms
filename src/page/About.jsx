import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
  const nav = useNavigate()
  const inputRef = useRef('')
  const handleClick = () => {
    nav('/service',{ state: { text:inputRef.current.value } })
  }

  return (
    <div>
      About
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Go to service</button>
      </div>
  )
}

export default About