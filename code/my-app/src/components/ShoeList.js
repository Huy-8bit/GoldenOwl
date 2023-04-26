import React from "react";
import Shoe from "./Shoe";
import shoesData from "../data/shoesData";

function ShoeList(props) {
  const shoes = shoesData.map((shoe) => (
    <Shoe key={shoe.id} {...shoe} addToCart={props.addToCart} />
  ));

  return <div className="shoe-list"> {shoes} </div>;
}

export default ShoeList;
