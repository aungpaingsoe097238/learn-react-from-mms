import { memo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div>
        <ul className='NavContainer'>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={'/service'}>Service</NavLink>
            </li>
            <li>
                <NavLink to={'/nest'}>Nest</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default memo(Nav)