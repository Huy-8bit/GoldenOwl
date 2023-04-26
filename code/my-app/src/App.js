import React, { useState } from "react";
import ShoeList from "./components/ShoeList";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (shoe) => {
    setCartItems([...cartItems, shoe]);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <ShoeList addToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
