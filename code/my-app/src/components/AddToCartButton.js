import React from "react";

function AddToCartButton(props) {
  function handleClick() {
    props.addToCart(props.id);
  }

  return (
    <button className="add-to-cart" onClick={handleClick}>
      Add to Cart{" "}
    </button>
  );
}

export default AddToCartButton;
