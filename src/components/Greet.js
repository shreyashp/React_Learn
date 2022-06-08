//Functional Component example

import React from "react";

function Greet(props) {
  const {name, aka} = props
  return (
    <div>
      {/* <div>
            This is a functional component Demo
        </div> */}

      {/**This is use of props and children props demo (if unsure what props will be) */}
      <div>
        <h1>Hello {name} a.k.a {aka}</h1>
        {props.children}
      </div>
    </div>
  );
}

export default Greet;
