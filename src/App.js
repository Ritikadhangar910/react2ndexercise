import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [cortIsShown, setCartIsShown] = useState(false);
  function CardShownFun() {
    setCartIsShown(true);
  }
  function CardHideFun() {
    setCartIsShown(false);
  }
  return (
    <>
      {cortIsShown && <Cart onClickClose={CardHideFun} />}
      <Header onIconClick={CardShownFun} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
