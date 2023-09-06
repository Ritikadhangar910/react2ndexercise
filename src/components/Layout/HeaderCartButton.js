import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  let myusecontext = useContext(CartContext);
  let quantity = 0;
  myusecontext = myusecontext.items;
  for (const items of myusecontext) {
    quantity += items.quantity;
  }
  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{quantity}</span>
      </button>
    </>
  );
};
export default HeaderCartButton;
