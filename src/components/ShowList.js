import { useMemo } from "react";

const ShowList = (props) => {
  const arrange = useMemo(() => {
    console.log("sorted");
    return props.list.slice().sort((a, b) => a - b);
  }, [props.list]);
  console.log("showlist");
  return (
    <>
      <h2>showlist {props.toggel} </h2>
      {arrange.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
};
export default ShowList;
