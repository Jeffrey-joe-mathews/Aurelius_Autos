import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = false;
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
          { !user ? (
            <>
            <a href="/">Sign-In</a>
            <a href="/register" className='register' >Sign-Up</a>
            </> ):
            (<div className='user' >
              <img src="https://avatars.githubusercontent.com/u/171322141?v=4" alt="profilepic" />
              <span  >Jeffrey Joe</span>
              <Link to='/profile' className='profile' >
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>)
          }
          <div className="menuIcon">
            <img src="/menu.png" alt="hamburger" onClick={() => setOpen((prev) => !prev) } />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">import axios from "axios"Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign-In</a>
            <a href="/register">Sign-Up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar