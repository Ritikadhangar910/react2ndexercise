const Showprice = (props) => {
  const items = props.products;
  console.log(items, "price");
  const sum = items.reduce((acc, curr) => {
    return acc + +curr.price;
  }, 0);

  return (
    <>
      <h2>Total value worth of Products {sum} </h2>
    </>
  );
};
export default Showprice;
