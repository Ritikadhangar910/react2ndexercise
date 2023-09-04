function Showtabledata(props) {
  return (
    <>
      {props.table.map((data) => (
        <div key={data.id}>
          <p>
            {data.price}-{data.table}-{data.dish}
            <button
              onClick={() => {
                props.ondelete(data.id);
              }}
            >
              delete
            </button>
          </p>
        </div>
      ))}
    </>
  );
}
export default Showtabledata;
