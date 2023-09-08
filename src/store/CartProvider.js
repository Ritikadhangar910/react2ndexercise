import CartContext from "./cart-context";
import { useEffect, useState } from "react";

const CartProvider = (props) => {
  const [items, setItem] = useState([]);
  const [updateditems, setupdatedItems] = useState([]);
  function addItemToCardHandler(item) {
    setItem((prev) => {
      return [...prev, item];
    });
  }
  useEffect(() => {
    const groupedItemsArray = Object.values(
      items.reduce((acc, curr) => {
        if (!acc[curr.name]) {
          acc[curr.name] = {
            ...curr,
            IncPrice: +curr.price * +curr.quantity,
          };
        } else {
          acc[curr.name].quantity += curr.quantity;
          acc[curr.name].IncPrice += Number(curr.price);
        }
        return acc;
      }, {})
    );
    setupdatedItems(groupedItemsArray);
  }, [items]);
  function removeItemToCardHandler(id) {
    let allitems = [...updateditems];
    for (const item of allitems) {
      if (id === item.id) {
        item.quantity = Number(item.quantity) - 1;
        item.IncPrice = Number(item.IncPrice) - Number(item.price);
        if (Number(item.quantity) === 0) {
          allitems = allitems.filter((item) => {
            return item.id !== id;
          });
        }
        setupdatedItems(allitems);
      }
    }
  }
  const cartContext = {
    items: updateditems,
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
