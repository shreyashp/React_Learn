import React, { useEffect, useState } from "react";

function HooksTitleUpdater() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //This UseEffcet Hook is called after every re-render, just like componentDidUpdate method in class lifecycle
  useEffect(() => {
    console.log("Updating Document Title");
    document.title = `You Clicked ${count} Times`;
  }, [count]);
  //This second Parameter accepts array of state values to look for change, then only the useEffect will execute
  //Otherwise on every re-render it tends to execute
  //We can decalre and empty array in the 2nd argument, depicting that the useEffect should be only called once
  //and does not depend on any states or props

  return (
    <div>
      <h3>Functional Component</h3>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicked {count} Times
      </button>
    </div>
  );
}

export default HooksTitleUpdater;
