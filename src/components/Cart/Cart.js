import { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items;

  function reduceItemsFun(id) {
    cartContext.removeItem(id);
  }

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartItems.map((item) => (
        <div key={item.id}>
          <li>
            Name: {item.name} Price: ${item.IncPrice.toFixed(2)} Quantity:
            {item.quantity}
            <button
              onClick={() => {
                reduceItemsFun(item.id);
              }}
            >
              -
            </button>
          </li>
        </div>
      ))}
    </ul>
  );

  let TotalAmount = 0;

  for (const item of cartItems) {
    TotalAmount += item.IncPrice;
  }

  return (
    <>
      <Model>
        {CartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>${TotalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onClickClose}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Model>
    </>
  );
};
export default Cart;
