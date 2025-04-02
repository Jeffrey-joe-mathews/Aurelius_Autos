import React from 'react'
import HomePage from './routes/homePage/homePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './routes/layout/layout'
import ListPage from './routes/listPage/listPage'
import SinglePage from './routes/singlePage/singlePage'
import ProfilePage from './routes/profilePage/profilePage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/list/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
    // <div className='layout' >
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
    // </div>
  )
}

export default App