import React, { useState } from 'react'
import Header from './src/components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './src/components/Home';
import Cart from './src/components/Cart';
import "./src/components/App.css";

const App = () => {
  const [cart,setCart]=useState([])
  return (
    <>
      <BrowserRouter basename='/Food-crew/'>
      <Header />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route basename='/Food-crew/' path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;