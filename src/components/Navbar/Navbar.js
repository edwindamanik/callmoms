import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbarWrapper'>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar