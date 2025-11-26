import React, { useEffect, useState } from "react";
import TableDataUnfiltered from "./TableData";
import "./TableList.css";

function TableList() {
  let [searchVal, setSearchVal] = useState("");
  let [TableData, setTableData] = useState(TableDataUnfiltered);

  useEffect(() => {
    //setTimeout: waits 300ms after the user stops typing before running the filter.Cleanup with clearTimeout: cancels the previous timer if the user types again quickly.
    const handler = setTimeout(() => {
      const filtered = TableData.filter((user) => {
        return (
          user.id === Number(searchVal) ||
          user.age === Number(searchVal) ||
          user.name?.toLowerCase().includes(searchVal.toLowerCase())
        );
      });

      setTableData(
        filtered.length > 0 && searchVal !== "" ? filtered : TableDataUnfiltered
      );
    }, 300);
    return () => clearTimeout(handler); //useEffect can return a cleanup function.it expects a (function) to be returned,
  }, [searchVal]);

  return (
    <div className="tableListContainer">
      <h2>USERS:</h2>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            {Object.keys(TableData[0]).map((key, index) => {
              //Object.keys:return array of keys //mao works because react expects An array of JSX which map returns but foreach does not return anything (undefined)
              return <th key={index}>{key}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {TableData.map((entry, index) => (
            <tr className="tableData" key={index}>
              {Object.values(entry).map((key, i) => (
                <td key={i}>{key}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;

//tr: table row,  th:table header,  td:table data, thead:group header content in an HTML table
