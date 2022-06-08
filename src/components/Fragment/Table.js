import React from "react";
import Column from "./Column";

function Table() {
  const nameList = [
    {
      id: 1,
      name: "Shreyash",
      age: 23,
    },
    {
      id: 2,
      name: "Varun",
      age: 24,
    },
  ];
  return (
    <table>
      <tbody>
        {nameList.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <tr>
                <Column item={item} />
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
