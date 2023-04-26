import React from "react";

function Header(props) {
  return (
    <header className="header">
      <h1> {props.title} </h1>{" "}
      <div className="cart-icon" onClick={props.toggleCart}>
        <img src="path/to/cart/icon" alt="Cart" />
        <span> {props.cartItemCount} </span>{" "}
      </div>{" "}
    </header>
  );
}

export default Header;
