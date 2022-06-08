import React, { useState } from "react";

function HooksCounterTwo() {
  const [count, setCount] = useState(0);

  return (
    <div>
        {/**Here the count is being manipulated using the Previous State status, not directly */}
      <h1>Count : {count}</h1>
      <br />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <br />
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <br />
      <button onClick={() => setCount((prevCount) => prevCount - prevCount)}>
        Reset
      </button>
    </div>
  );
}

export default HooksCounterTwo;
