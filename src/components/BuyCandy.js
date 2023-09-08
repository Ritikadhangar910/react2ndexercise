import { useState } from "react";
function Buycandy(prop) {
  const [name, setname] = useState("");
  const [decription, setdecription] = useState("");
  const [price, setprice] = useState("");
  function ShowCandies(e) {
    e.preventDefault();
    const obj = {
      name: name,
      decription: decription,
      price: price,
    };
    prop.onaddCandy(obj);
  }
  return (
    <>
      <h2>Buy the Candy</h2>
      <form action="" onSubmit={ShowCandies}>
        CandyName:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <br />
        Description:{" "}
        <input
          type="text"
          value={decription}
          onChange={(e) => {
            setdecription(e.target.value);
          }}
        />
        <br />
        <br />
        Price:{" "}
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />
        <br />
        <br />
        <button>Add Candy</button>
      </form>
    </>
  );
}
export default Buycandy;
