import React, { useState } from "react";

function HooksName() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  //State can be number, string, object, boolean and array. In this case and object
  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={name.firstName}
        onChange={(event) =>
          setName({ ...name, firstName: event.target.value })
        }
      ></input>
      {/** Here the Spread Operator is used to create copy of name object and updated only what is changed */}
      {/** As the 'useState' func does not combine and modify the state object just like 'setState' in Class Components */}
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={name.lastName}
        onChange={(event) => setName({ ...name, lastName: event.target.value })}
      ></input>
      <h2>First Name: {name.firstName}</h2>
      <h2>Last Name: {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HooksName;
