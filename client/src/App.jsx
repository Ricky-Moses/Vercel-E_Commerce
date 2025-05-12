import React from 'react'
// Router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Layouts
import Header from './Layouts/Header'
// Utilities
import Register from './Utilities/Register'
import Login from './Utilities/Login'
// Pages

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [

      ]
    },
    {path: '/register', element: <Register />},
    {path: '/login', element: <Login />},
  ])

  return <RouterProvider router={router} />
}

export default App