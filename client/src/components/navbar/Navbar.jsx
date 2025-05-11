import React, { useContext, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useNotificationZustand } from '../../lib/notificationZustand';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const user = true;
  const {currentUser} = useContext(AuthContext)
  const fetch = useNotificationZustand(state => state.fetch)
  const number = useNotificationZustand(state => state.number)
  fetch();
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
          { !currentUser ? (
            <>
            <a href="/login">Sign-In</a>
            <a href="/register" className='register' >Sign-Up</a>
            </> ):
            (<div className='user' >
              <img src={currentUser.userInfo.avatar || "/no-user.svg"} alt="profilepic" />
              <span >{currentUser.userInfo.username}</span>
              <Link to='/profile' className='profile' >
                {number >0 &&<div className="notification">{number}</div>}
                <span>Profile</span>
              </Link>
            </div>)
          }
          <div className="menuIcon">
            <img src="/menu.png" alt="hamburger" onClick={() => setOpen((prev) => !prev) } />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/login">Sign-In</a>
            <a href="/register">Sign-Up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar