import { useState } from "react";
import Formpage from "./components/Formpage";
import Showdata from "./components/Showdata";

function App() {
  const [products, setProduct] = useState([]);
  function getItems(items) {
    setProduct((prev) => {
      return [...prev, items];
    });
  }
  return (
    <>
      <Formpage onFormSummit={getItems} />
      <Showdata products={products} />
    </>
  );
}

export default App;
