import { useState } from "react";
import Cartproduct from "./Cartproduct";

const Cart = ({ cart, setCart }) => {
  const [total,setTotal]=useState(0);

  return (
    <div className="cart-container">
      <h2 className="Cart-head">Cart</h2>
        {cart.length?(cart.map((data, index) => (
          <>
          <Cartproduct cart={cart} setCart={setCart} data={data} key={index} settotal={setTotal} total={total} />
        </>
        ))
      ):
      <>
        <h1 className="cart-empty">Your cart is Empty</h1>
        </>}
        <h2 className="amt">Total Amt:<span> {total}</span></h2>
    </div>
  );
};

export default Cart;
