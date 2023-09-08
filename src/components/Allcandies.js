import { useContext } from "react";
import CartContext from "../store/cart-context";

const Allcandies = (props) => {
  let candies = props.candies;
  const cartContext = useContext(CartContext);
  function AddCandyFun(value, name) {
    let storeCandy = candies.filter((candy) => {
      return candy.name === name;
    });
    storeCandy[0].quantity = value;
    let obj = { ...storeCandy[0], quantity: value };
    cartContext.AddCandies(obj);
  }

  return (
    <div>
      <h2>Candies are</h2>
      {candies.map((candy) => (
        <div key={candy.name}>
          {`${candy.name} ${candy.decription} ${candy.price}`}
          <span>
            <button
              onClick={() => {
                AddCandyFun(1, candy.name);
              }}
            >
              Buy one
            </button>
            <button
              onClick={() => {
                AddCandyFun(2, candy.name);
              }}
            >
              Buy two
            </button>
            <button
              onClick={() => {
                AddCandyFun(3, candy.name);
              }}
            >
              Buy three
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Allcandies;
