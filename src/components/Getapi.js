import { useCallback, useEffect, useState } from "react";
const Getapi = () => {
  const [items, setitem] = useState([]);
  const [loader, setloader] = useState(false);
  const [error, seterror] = useState(false);

  const callapi = useCallback(async () => {
    try {
      setloader(true);
      let apis = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!apis.ok) {
        throw new Error(true);
      }
      apis = await apis.json();
      setloader(false);
      setitem(apis);
    } catch (err) {
      seterror(err);
    }
  }, []);
  useEffect(() => {
    callapi();
  }, [callapi]);
  return (
    <>
      <h1>this is fun</h1>
      {loader && <p>loader..</p>}
      {items.length > 0 &&
        !error &&
        items.map((item) => (
          <div key={item.id}>
            <p>mybody:{item.userId}</p>
            <p>mybody:{item.title}</p>
          </div>
        ))}
      {error && <p>data is not fetching</p>}
    </>
  );
};
export default Getapi;
