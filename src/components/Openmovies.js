import { useState } from "react";

const Openmovies = () => {
  const [show, setshow] = useState(false);
  const [title, settitle] = useState("");
  const [tarea, setTarea] = useState("");
  const [date, setdate] = useState("");
  const toggleFunction = () => {
    setshow(true);
  };
  const addmoviesRequest = async () => {
    const obj = {
      title,
      tarea,
      date,
    };
    const response = await fetch(
      "https://reactproject-34248-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <h1>Movies form</h1>
      {show && (
        <div>
          <p>Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <br />
          <br />
          <p>Opening Text</p>
          <textarea
            cols="30"
            rows="10"
            value={tarea}
            onChange={(e) => {
              setTarea(e.target.value);
            }}
          ></textarea>
          <br />
          <br />
          <p>Releasing Date</p>
          <input
            type="text"
            value={date}
            onChange={(e) => {
              setdate(e.target.value);
            }}
          />
          <br />
          <br />
          <button onClick={addmoviesRequest}>Add Movie</button>
        </div>
      )}

      <button onClick={toggleFunction}>Show Movies</button>
    </>
  );
};
export default Openmovies;
