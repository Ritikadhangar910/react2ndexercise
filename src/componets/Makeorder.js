import { useState } from "react";
function Makeorder(props) {
  const [id, setid] = useState("");
  const [price, setprice] = useState("");
  const [dish, setdish] = useState("");
  const [table, settable] = useState("");

  function userOrderCall(e) {
    e.preventDefault();
    const obj = {
      id: id,
      price: price,
      dish: dish,
      table: table,
    };
    localStorage.setItem(id, JSON.stringify(obj));
    props.onOrder(obj);
  }
  return (
    <>
      <h2>Please Make Order</h2>
      <form action="" onSubmit={userOrderCall}>
        Unique OrderId:{" "}
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setid(e.target.value);
          }}
        />
        <br />
        <br />
        Choose Price:{" "}
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />
        <br />
        <br />
        Choose Dish:{" "}
        <input
          type="text"
          value={dish}
          onChange={(e) => {
            setdish(e.target.value);
          }}
        />
        <br />
        <br />
        Choose a table:
        <select
          onChange={(e) => {
            settable(e.target.value);
          }}
          value={table}
        >
          <option>choose </option>
          <option>Table 1 </option>
          <option>Table 2</option>
          <option>Table 3</option>
        </select>
        <br />
        <br />
        <button>Add to bill</button>
      </form>
    </>
  );
}
export default Makeorder;
