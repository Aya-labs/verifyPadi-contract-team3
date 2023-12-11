import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login'
import './index.css'
import App from './pages/App'
import Connect from './pages/connect'
import Dashboard from './pages/dashboard'
import Account from './pages/Account'
import Datasharing from './pages/Datasharing'
import IndividualLogin from './pages/IndividualLogin'
import BusinessLogin from './pages/BusinessLogin'
import InstitutionLogin from './pages/InstitutionLogin'

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
  },
  {
    path: "/Datasharing",
    element: <Datasharing />,
  },
  {
    path: "/IndividualLogin",
    element: <IndividualLogin />,
  },
  {
    path: "/BusinessLogin",
    element: <BusinessLogin />,
  },
  {
    path: "/InstitutionLogin",
    element: <InstitutionLogin />,
  }
]);

















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)

