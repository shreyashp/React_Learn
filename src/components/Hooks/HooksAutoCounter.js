import React, { useEffect, useState } from "react";

function HooksAutoCounter() {
  const [count, setCount] = useState(0);

  //Most reliable way, UseEffect is not called everytime, as state monitoring is to the autoIncrement 
  //function, and also the dependencies for useEffect should not be worried upon
  useEffect(() => {
    console.log("Calling UseEffect");
    const interval = setInterval(autoIncrement, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const autoIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //Alternative way to above approach, but here the useEffect will be called every time state updates
  //as state control is not in hand of UseEffect
  /* useEffect(() => {
    console.log("Calling UseEffect");
    const interval = setInterval(autoIncrement, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const autoIncrement = () => {
    setCount(count + 1);
  }; */

  //Another Method is where the dependencies function declaration (in this case autoIncrement) is made
  //Within the useEffect code block or wrap it inside its own useCallback function

  return (
    <div>
      <button>Toggle Counter</button> <br />
      {count}
    </div>
  );
}

export default HooksAutoCounter;
