import React, { useEffect, useState } from "react";

function HooksMouseHandler() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseMoveHandler = (event) => {
    console.log("Calling Mouse Move Handler");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("Calling UseEffect");
    window.addEventListener("mousemove", mouseMoveHandler);

    //This is the cleanup code that executes when component unmounts like 'componentWillUnmount'
    //, as not declaring this may
    //give warning that we are trying to update state of component that is unmounted
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  //We can decalre and empty array in the 2nd argument, depicting that the useEffect should be only called once
  //and does not depend on any states or props

  return (
    <div>
      <h3>
        Hooks - Mouse X:{x} Y:{y}
      </h3>
    </div>
  );
}

export default HooksMouseHandler;
