import React from "react";

/* function ForwRefInput() {
    return (
        <div>
            <input type='text'></input>
        </div>
    )
} */

//Using here the arrow function method for functional component 
//and forwardRef method to catch the ref invoke called from parent component
const ForwRefInput = React.forwardRef((props, ref) => {
    //the component declared inside forwardRef function accepts props and ref received from Parent Component
  return (
    <div>
        {/* and thus directly assigned to the input field */}
      <input type="text" ref={ref}></input>
    </div>
  );
});

export default ForwRefInput;
