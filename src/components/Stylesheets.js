import React from "react";
import "./styles.css";

function Stylesheets(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets Rendering Demo</h1>
    </div>
  );
}

export default Stylesheets;
