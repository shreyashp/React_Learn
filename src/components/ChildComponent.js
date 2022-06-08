import React from "react";

function ChildComponent(props) {
  const { greetParent } = props;
  return (
    <div>
      This is child Component
      <br />
      <button onClick={() => greetParent("Bob")}>Greet Parent!</button>
    </div>
  );
}

export default ChildComponent;
