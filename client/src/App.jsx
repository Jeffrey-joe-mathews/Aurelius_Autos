import React from 'react'
import './layout.scss'
import Navbar from './components/Navbar/Navbar'
import HomePage from './routes/homePage/homePage'

const App = () => {
  return (
    <div className='layout' >
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  )
}

export default App