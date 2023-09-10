import { useEffect, useState } from "react";
const Getapi = () => {
  const [items, setitem] = useState([]);
  const [loader, setloader] = useState(false);
  async function callapi() {
    setloader(true);
    let apis = await fetch("https://dummyjson.com/products");
    apis = await apis.json();
    setloader(false);
    setitem(apis);
  }
  useEffect(() => {
    callapi();
  }, []);
  console.log(items);
  return (
    <>
      <h1>this is fun</h1>
      {loader && <p>loader..</p>}
      {items.length > 0 &&
        items.map((item) => (
          <div key={item.id}>
            <p>mybody:{item.title}</p>
          </div>
        ))}
      {!Array.isArray(items) && <p>data is not fetching</p>}
    </>
  );
};
export default Getapi;
