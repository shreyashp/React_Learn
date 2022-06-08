//Demo of UseState Hook in accessing the state inside functional components
import React, { useState } from "react";

function HooksDemo() {
  const [count, incrementCount] = useState(0);

  return (
    <div>
      <button onClick={() => incrementCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default HooksDemo;
