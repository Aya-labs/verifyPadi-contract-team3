//import { useState } from 'react'
//import { Route, Routes } from 'react-router-dom'
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer, Welcome, Services, About, Contact } from '../components';
//import Login from './login';
const App = () => {


  return (

    <div className='min-h-screen'>





      <Navbar />


      <Welcome />

      <Services />
      <About />
      <Contact />
      <Footer />


    </div>


  )
}

export default App
