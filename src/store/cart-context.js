import React from "react";
const CartContext = React.createContext({
  items: [],
  AddCandies: (items) => {},
});
export default CartContext;
