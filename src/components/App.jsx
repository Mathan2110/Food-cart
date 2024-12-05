import React, { useState } from 'react'
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import "./App.css"

const App = () => {
  const [cart,setCart]=useState([]);
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;