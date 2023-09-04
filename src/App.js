import { useState } from "react";
import Makeorder from "./componets/Makeorder";
import Table from "./componets/Table";

function App() {
  const [allorders, setorders] = useState([]);
  const getUserorder = (order) => {
    setorders((prev) => {
      return [...prev, order];
    });
  };
  return (
    <>
      <Makeorder onOrder={getUserorder} />
      <Table allorders={allorders} />
    </>
  );
}

export default App;
