import { useCallback, useEffect, useState } from "react";
const Getapi = () => {
  const [items, setitems] = useState([]);
  const [loader, setloader] = useState(false);
  const [error, seterror] = useState(false);

  const callapi = useCallback(async () => {
    try {
      setloader(true);
      let apis = await fetch(
        "https://reactproject-34248-default-rtdb.firebaseio.com/movies.json"
      );
      if (!apis.ok) {
        throw new Error(true);
      }
      const data = await apis.json();
      console.log(data, "data");
      let moviesArray = [];
      for (const key in data) {
        moviesArray.push({
          id: key,
          date: data[key].date,
          title: data[key].title,
          description: data[key].tarea,
        });
      }
      console.log(moviesArray, "moive");
      setitems(moviesArray);
    } catch (err) {
      seterror(err);
    }
    setloader(false);
  }, []);
  useEffect(() => {
    callapi();
  }, [callapi]);
  console.log(items);
  return (
    <>
      <h1>this is fun</h1>
      {loader && <p>loader..</p>}
      {items.length > 0 &&
        !error &&
        items.map((item) => (
          <div key={item.id}>
            <p>date:{item.date}</p>
            <p>title:{item.title}</p>
            <p>title:{item.description}</p>
          </div>
        ))}
      {error && <p>data is not fetching</p>}
    </>
  );
};
export default Getapi;
