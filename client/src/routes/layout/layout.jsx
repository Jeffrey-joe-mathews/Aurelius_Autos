import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './layout.scss'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Layout = () => {
  return (
    <div className='layout' >
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext)

  // useEffect(()=> {
  //   <Navigate to="/login" />
  // }, [currentUser])

  return (
    !currentUser ? <Navigate to="/login" /> : (
      <div className='layout' >
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div> 
    )
  );
}

export {Layout, RequireAuth}