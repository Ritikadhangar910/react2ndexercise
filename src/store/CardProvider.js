import { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setitems] = useState([]);
  const [updateitems, setupdatedItems] = useState([]);
  function AddCandiestocart(item) {
    setitems((prev) => {
      return [...prev, item];
    });
  }
  useEffect(() => {
    const mynewItems = [...items];
    const objkeys = Object.values(
      mynewItems.reduce((acc, curr) => {
        if (!acc[curr.name]) {
          acc[curr.name] = { ...curr, newquantity: curr.quantity };
        } else {
          acc[curr.name].newquantity += curr.quantity;
        }
        return acc;
      }, {})
    );
    setupdatedItems(objkeys);
  }, [items]);
  const cartContext = {
    items: updateitems,
    AddCandies: AddCandiestocart,
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
