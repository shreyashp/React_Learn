import React from "react";

function Column(props) {
  /* const nameList = [
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
  ]; */
  const {item} = props
  return (
    <>
      {/* <td>name</td>
      <td>Shreyash</td>
      <td>hello</td> */}

      <td>{item.name}</td>
      <td>{item.age}</td>
    </>
  );
}

export default Column;
