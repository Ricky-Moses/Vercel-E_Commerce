import React from 'react'
// Router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Layouts
import RootLayout from './RootLayout'
// Utilities
import Register from './Utilities/Register'
import Login from './Utilities/Login'
import PublicLayout from './Layouts/PublicLayout'
// Pages

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

      ]
    },
    {
      path: '/register',
      element: (
        <PublicLayout>
          <Register />
        </PublicLayout>
      )
    },
    {
      path: '/login',
      element: (
        <PublicLayout>
          <Login />
        </PublicLayout>
      )
    },
  ])

  return <RouterProvider router={router} />
}

export default App