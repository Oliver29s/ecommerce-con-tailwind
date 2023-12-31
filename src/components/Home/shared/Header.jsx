import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1><Link to={'/'}>Ecomerce</Link></h1>
        <nav>
            <ul>
                <li><Link to={'/'}>Login</Link></li>
                <li><Link to={'/'}>Purchases</Link></li>
                <li><Link to={'/'}>Carts</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header