import { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  let myusecontext = useContext(CartContext);
  myusecontext = myusecontext.items;
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {myusecontext.map((item) => {
        return (
          <li key={item.key}>
            Name: {item.name} Price: {item.price} Quantity: {item.quantity}
          </li>
        );
      })}
    </ul>
  );
  return (
    <>
      <Model>
        {CartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
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
