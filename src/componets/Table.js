import { useEffect, useState } from "react";
import Showtabledata from "./Showtabledata";

const Table = (props) => {
  const [table1, setTable1] = useState([]);
  const [table2, setTable2] = useState([]);
  const [table3, setTable3] = useState([]);

  function Showtables() {
    const keys = Object.keys(localStorage);
    const datas = [];
    for (const key of keys) {
      if (key !== "debug") {
        let item = localStorage.getItem(key);
        item = JSON.parse(item);
        datas.push(item);
      }
      const data1 = datas.filter((data) => {
        return data.table === "Table 1";
      });
      const data2 = datas.filter((data) => {
        return data.table === "Table 2";
      });
      const data3 = datas.filter((data) => {
        return data.table === "Table 3";
      });

      setTable1(data1);
      setTable2(data2);
      setTable3(data3);
    }
  }
  useEffect(() => {
    Showtables();
  }, [props.allorders]);

  function deleteOrder(id) {
    localStorage.removeItem(id);
    Showtables();
  }

  return (
    <>
      <h2>Table 1</h2>
      <Showtabledata table={table1} ondelete={deleteOrder} />
      <h2>Table 2</h2>
      <Showtabledata table={table2} ondelete={deleteOrder} />
      <h2>Table 3</h2>
      <Showtabledata table={table3} ondelete={deleteOrder} />
    </>
  );
};
export default Table;
