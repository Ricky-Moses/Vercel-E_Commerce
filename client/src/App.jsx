// Router
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
// Layouts
import Header from './Layouts/Header'

// Utilities
import Register from './Utilities/Register'
import Login from './Utilities/Login'
// Error
import NotFound from './Error/NotFound'
// Redux
// Slice
// Pages
import Home from './Pages/Home'

const App = () => {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: '/register',
      errorElement: <NotFound />,
      element: <Register />
    },
    {
      path: '/login',
      errorElement: <NotFound />,
      element: <Login />
    },
    { path: '*', element: <NotFound /> }
  ])

  return <RouterProvider router={router} />
}

export default App