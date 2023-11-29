import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login'
import './index.css'
import App from './pages/App'
import Connect from './pages/connect'
import Dashboard from './pages/dashboard'
import Account from './pages/Account'

//browser dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//web3


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/connect",
    element: <Connect />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Account",
    element: <Account />,
  }
]);

















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)

