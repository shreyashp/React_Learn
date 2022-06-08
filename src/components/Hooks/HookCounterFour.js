import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItem] = useState([]);
  const addItem = () => {
    setItem([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
    //Spread operator is used to create copy of array and append only updated items in the array
  };
  return (
    <div>
      <button onClick={() => addItem()}>Add Item</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default HookCounterFour;
