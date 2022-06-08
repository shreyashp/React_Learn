import React from "react";

const Hello = () => {
  //JSX version of creating the elements
  /*  return(
        <div className = 'helloClass'>
            <h1>Hello World!!!</h1>
        </div>
    ) */

  //creating elements without JSX using React inbuilt functions.
  return React.createElement(
    "div",
    { id: "hello1", className: "helloClass" },
    React.createElement("h1", null, "Hello World")
  );
};

export default Hello;
