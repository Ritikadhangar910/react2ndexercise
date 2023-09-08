import { useContext } from "react";
import CartContext from "../store/cart-context";

const Card = () => {
  const cartContext = useContext(CartContext);
  let items = cartContext.items;
  let quantity = 0;
  for (const item of items) {
    quantity += item.newquantity;
  }

  function ShowBuyCandy() {
    {
      items.map((item) => {
        console.log(
          `name ${item.name} quantity=${item.newquantity} price=${
            Number(item.price) * item.newquantity
          } 
          `
        );
      });
    }
  }
  return (
    <>
      <h3>Buy Items {quantity}</h3>
      <button onClick={ShowBuyCandy}>Added items</button>
    </>
  );
};
export default Card;
