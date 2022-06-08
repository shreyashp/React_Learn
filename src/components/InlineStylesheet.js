import React from "react";

const inlineStyle = {
  fontSize: "72px",
  color: "orange",
};

function InlineStylesheet() {
  return (
    <div>
      <h1 style={inlineStyle}>Inline Styling Rendereing</h1>

      {/**this will work as the css is default one so passes to the child components */}
      <h1 className="error">Error</h1>{" "}
      {/**this won't work as the css is module type so not accessible to the child components */}
      {/* <h1 className={style.success}>Success</h1> */}
    </div>
  );
}

export default InlineStylesheet;
