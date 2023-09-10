import React, { useEffect, useState } from "react";

const Getapi = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [retrying, setRetrying] = useState(false); // Indicates whether retrying is in progress
  const [retryInterval, setRetryInterval] = useState(null); // Interval ID for retrying

  const callApi = async () => {
    try {
      setLoader(true);
      let apis = await fetch("https://jsonplaceholder.typicode.com/post");
      if (!apis.ok) {
        throw new Error("Data is not fetching");
      }
      apis = await apis.json();
      setItems(apis);
      setError(false);
    } catch (err) {
      setError(err);
      setRetrying(true); // Set retrying to true on failure
    }
    setLoader(false);
  };

  useEffect(() => {
    callApi();
  }, []);

  // Retry function that will be called at a 5-second interval
  const retry = () => {
    if (!retrying) return; // Stop retrying if retrying is set to false
    callApi(); // Retry the API call
  };

  // Start retrying with a 5-second interval
  useEffect(() => {
    if (retrying) {
      const intervalId = setInterval(retry, 2000);
      setRetryInterval(intervalId);

      // Cleanup the interval when the component unmounts or when retrying is canceled
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [retrying]);

  // Function to cancel retrying
  const cancelRetry = () => {
    setRetrying(false); // Stop retrying
    clearInterval(retryInterval); // Clear the retry interval
  };

  return (
    <>
      <h1>This is fun</h1>
      {loader && <p>Loading...</p>}
      {items.length > 0 &&
        !error &&
        items.map((item) => (
          <div key={item.id}>
            <p>User ID: {item.userId}</p>
            <p>Title: {item.title}</p>
          </div>
        ))}
      {error && <p>Data is not fetching</p>}
      {retrying && (
        <>
          <p>Retrying in 5 seconds...</p>
          <button onClick={cancelRetry}>Cancel Retry</button>
        </>
      )}
    </>
  );
};

export default Getapi;
