import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useContext, useState } from "react";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const myCartContext = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  function addMealsFun(e) {
    e.preventDefault();
    myCartContext.addItem({ ...props.items, quantity: quantity });
  }

  const handleQuantityChange = (event) => {
    const newValue = parseInt(event.target.value);
    setQuantity(newValue);
  };

  return (
    <>
      <form className={classes.form}>
        <Input
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            value: quantity,
            onChange: handleQuantityChange,
          }}
        />
        <button onClick={addMealsFun}>+ Add</button>
      </form>
    </>
  );
};

export default MealItemForm;
