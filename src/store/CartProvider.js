import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItem] = useState([]);
  function addItemToCardHandler(item) {
    setItem((prev) => {
      return [...prev, item];
    });
    console.log(cartContext, "outside");
  }
  function removeItemToCardHandler(id) {}
  const cartContext = {
    items: items,
    addItem: addItemToCardHandler,
    removeItem: removeItemToCardHandler,
  };

  return (
    <>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};
export default CartProvider;
