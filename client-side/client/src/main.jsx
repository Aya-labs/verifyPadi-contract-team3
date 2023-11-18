import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login'
import './index.css'
import App from './pages/App'
import Connect from './pages/connect'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



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
]);

















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)

