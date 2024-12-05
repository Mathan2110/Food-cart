import React, { useEffect, useState } from 'react'

const Cartproduct = ({cart,setCart,data,index,total,settotal}) => {

  const [quantity,setQuantity]=useState(1)
  const cost=data.Rs;
  const [productCost,setProductCost]=useState(parseInt(cost))

  useEffect(()=>{
    setQuantity(1)
    setProductCost(parseInt(data.Rs))
  },[cart])

  
  useEffect(()=>{
    settotal((prevtotal)=>prevtotal+parseInt(data.Rs))
  },[])



  const plus=()=>{
    setQuantity((prevQuantity)=>prevQuantity+1)
    setProductCost((prevCost)=>prevCost+parseInt(data.Rs))
    settotal((prevtotal)=>prevtotal+parseInt(data.Rs))
  }

  const minus=()=>{
    if (quantity<=1){
      setQuantity(1)
      setProductCost(parseInt(data.Rs))
    }
    else{
      setQuantity((prevQuantity)=>prevQuantity-1)
      setProductCost((prevCost)=>prevCost-parseInt(data.Rs))
      settotal((prevtotal)=>prevtotal-parseInt(data.Rs))
    }
  }

  const removeCart=()=>{
    setCart(cart.filter((c)=>c.Name !== data.Name))
    settotal((prevtotal)=>prevtotal-productCost)
}


  return (
    <>  
        <div className="cart-card" key={index}>
            <div className="cart-product">
              <div className="cart-image">
                <img src={data.img} alt={data.Name} className="cart-pic" />
              </div>
              <div className="product-details">
                <h3 className="cart-product-name">{data.Name}</h3>
                <h3 className="cart-product-price">{productCost}</h3>
              </div>
            </div>

            <div className="quantity-buttons">
              <div className="minusImage" onClick={minus}>
                <img src="../minus-solid.svg" alt="" />
              </div>
              <h2 className="quantity">{quantity}</h2>
              <div className="plusImage" onClick={plus}>
                <img src="../plus-solid.svg" alt="" />
              </div>
            </div>

            <div className="cart-remove">
              <button className="desktop" onClick={removeCart}>Remove from Cart</button>
              <button className="mobile" onClick={removeCart}>Remove</button>
            </div>
            </div>
    </>
  )
}

export default Cartproduct;