import React from "react";
import AddToCartButton from "./AddToCartButton";

function Shoe(props) {
  const { id, name, price, image } = props;

  return (
    <div className="shoe">
      <img src={image} alt={name} /> <h2> {name} </h2>{" "}
      <p> $ {price.toFixed(2)} </p>{" "}
      <AddToCartButton id={id} addToCart={props.addToCart} />{" "}
    </div>
  );
}

export default Shoe;
