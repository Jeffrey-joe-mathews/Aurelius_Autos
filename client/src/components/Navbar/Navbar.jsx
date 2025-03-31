import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
        <div className="left">
          <a href='/' className='logo' >
            <img src="/logo.png" alt="Aurelis Autos" />
            <span>AureliusAutos</span>
          </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        </div>
        <div className="right">
          <a href="/">Sign-In</a>
          <a href="/" className='register' >Sign-Up</a>
          <div className="menuIcon">
            <img src="/menu.png" alt="hamburger" />
          </div>
        </div>
    </nav>
  )
}

export default Navbar