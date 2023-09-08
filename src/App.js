import { useState } from "react";
import Buycandy from "./components/BuyCandy";
import Card from "./components/Card";
import CartProvider from "./store/CardProvider";
import Allcandies from "./components/Allcandies";
function App() {
  const [candies, setcandies] = useState([]);
  function ShowCandies(candy) {
    setcandies((prev) => {
      return [...prev, candy];
    });
  }
  return (
    <CartProvider>
      <Card />
      <Buycandy onaddCandy={ShowCandies} />
      <Allcandies candies={candies} />
    </CartProvider>
  );
}
export default App;
