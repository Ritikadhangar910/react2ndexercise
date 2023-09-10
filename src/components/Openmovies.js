import { useState } from "react";

const Openmovies = () => {
  const [show, setshow] = useState(false);
  const toggleFunction = () => {
    setshow(true);
  };
  return (
    <>
      <h1>Movies form</h1>
      {show && (
        <div>
          <p>Title</p>
          <input type="text" />
          <br />
          <br />
          <p>Opening Text</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <br />
          <br />
          <p>Releasing Date</p>
          <input type="date" name="" id="" />
          <br />
          <br />
        </div>
      )}
      <button onClick={toggleFunction}>Add Movies</button>
    </>
  );
};
export default Openmovies;
