//Representing HtML elements in different dom root trees using portals
import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <div>
      <h1>Portal component</h1>
    </div>,
    document.getElementById('portal-root')
  );
}

export default PortalDemo;
