import { useState } from "react";

const Formpage = (props) => {
  const [id, setid] = useState("");
  const [price, setprice] = useState("");
  const [name, setname] = useState("");

  function AddProduct(e) {
    e.preventDefault();
    setid("");
    setprice("");
    setname("");
    const obj = { id, price, name };
    localStorage.setItem(id, JSON.stringify(obj));
    props.onFormSummit(obj);
  }
  return (
    <>
      <h2>Fill Input Form</h2>
      <br />
      <form onSubmit={AddProduct}>
        Product Id:{" "}
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setid(e.target.value);
          }}
        />
        <br />
        <br />
        Selling Price:{" "}
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />
        <br />
        <br />
        Product Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <br />
        <button>Add Product</button>
      </form>
    </>
  );
};
export default Formpage;
