import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nest = () => {
  return (
    <div>
        Nest
        <div>
            <ul>
                <li>
                    <Link to=''>One</Link>
                </li>
                <li>
                    <Link to='two'>Two</Link>
                </li>
                <li>
                    <Link to='three'>Three</Link>
                </li>
            </ul>
        </div>
        <Outlet/>
    </div>
  )
}

export default Nest