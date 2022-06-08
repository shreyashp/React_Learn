import React, { Component } from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Bob",
    };
  }

  greetParent = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildComp greetParent={this.greetParent} />
      </div>
    );
  }
}

export default ParentComp;
