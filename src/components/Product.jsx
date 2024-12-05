import React from 'react'


const Product = ({data,index,cart,setCart}) => {

    const addCart=()=>{
        setCart([...cart,data])
    }

    const removeCart=()=>{
        setCart(cart.filter((c)=>c.Name !== data.Name))
    }

  return (
    <>
        <div key={index} className="food-card">
        <div className="image">
          <img src={data.img} alt={data.Name} className='pic' />
        </div>
        <h3 className="dish-name">{data.Name}</h3>
        <h3 className="price">Rs.{data.Rs}</h3>
        {cart.includes(data)?<button className='remove-cart' onClick={removeCart}>Remove from Cart</button>:<button className='add-cart' onClick={addCart}>Add to Cart</button>}
        </div>     
    </>
  )
}


export default Product;