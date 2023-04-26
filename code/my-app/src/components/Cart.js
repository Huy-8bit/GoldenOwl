import React from "react";
import CartItem from "./CartItem";

function Cart(props) {
  const cartItems = props.cartItems.map((item) => (
    <CartItem key={item.id} {...item} />
  ));

  const total = props.cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  return (
    <div className="cart">
      <h2> Cart </h2> <div className="cart-items"> {cartItems} </div>{" "}
      <div className="total"> Total: $ {total.toFixed(2)} </div>{" "}
    </div>
  );
}

export default Cart;
