import React, { useEffect, useState } from "react";
import Showprice from "./Showprice";

const Showdata = (props) => {
  const products = props.products;
  const [localStorageData, setLocalStorageData] = useState([]);
  function showAlldata() {
    const keys = Object.keys(localStorage);
    const data = [];

    for (const key of keys) {
      if (key != "debug") {
        let item = localStorage.getItem(key);
        item = JSON.parse(item);
        data.push(item);
      }
    }
    setLocalStorageData(data);
  }
  useEffect(() => {
    showAlldata();
  }, [products]);

  function deleteItem(id) {
    localStorage.removeItem(id);
    showAlldata();
  }

  return (
    <>
      <h2>Products</h2>
      {localStorageData.map((item) => (
        <div key={item.id}>
          <span>
            <p>{`${item.price} - ${item.name}`} </p>
            <button onClick={() => deleteItem(item.id)}>Delete Item</button>
          </span>
        </div>
      ))}
      <Showprice products={localStorageData} />
    </>
  );
};

export default Showdata;
