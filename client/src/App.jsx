import React from 'react'
import HomePage from './routes/homePage/homePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout, RequireAuth } from './routes/layout/layout'
import ListPage from './routes/listPage/listPage'
import SinglePage from './routes/singlePage/singlePage'
import ProfilePage from './routes/profilePage/profilePage'
import Register from './routes/register/registerPage'
import Login from './routes/login/login'
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage'
import CreatePostPage from './routes/createPostPage/createPostPage'
import { listPageLoader, profilePageLoader, singlePageLoader } from './lib/loaders'
import PaymentPage from './routes/paymentPage/paymentPage'

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
          element: <ListPage />,
          loader: listPageLoader
        },
        {
          path: "/list/:id",
          element: <SinglePage />,
          loader: singlePageLoader
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/create",
          element: <CreatePostPage />
        },
        {
          path: "/payment",
          element: <PaymentPage />
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