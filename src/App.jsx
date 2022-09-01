import React from 'react';
import './App.css'

import { Link, Outlet, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import ShoppingCart from './pages/shopping-cart/ShoppingCart';
import NavBar from './shared/NavBar';

function App() {
  return (
    <div className='bg-slate-900 h-screen'>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shopping-cart' element={<ShoppingCart />}/>
      </Routes>
      
    </div>
  )
}

export default App
