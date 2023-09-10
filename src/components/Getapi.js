import { useEffect, useState } from "react";
const Getapi = () => {
  const [items, setitem] = useState([]);
  async function callapi() {
    let apis = await fetch("https://jsonplaceholder.typicode.com/posts");
    apis = await apis.json();
    setitem(apis);
  }
  useEffect(() => {
    callapi();
  }, []);
  console.log(items);
  return (
    <>
      <h1>this is fun</h1>
      {items.map((item) => (
        <div key={item.id}>
          <p>item:{item.userId}</p>
          <p>mybody:{item.title}</p>
        </div>
      ))}
    </>
  );
};
export default Getapi;
