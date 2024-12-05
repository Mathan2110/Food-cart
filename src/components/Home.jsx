import React from 'react'
import Product from './product'
import datas from '../foodlist.json'

const Home = ({cart,setCart}) => {
  return (
    <>
    <div className='container'>
      <h1 className='menu'>Menu</h1>
      <div className="food-container">
        {datas.map((data,index)=>(
          <Product  data={data} key={data.id} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Home;
