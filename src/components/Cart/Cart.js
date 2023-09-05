import Model from "../UI/Model";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "sushi",
          amount: 2,
          price: 12.65,
        },
      ].map((item) => {
        return <li>{item.name}</li>;
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
