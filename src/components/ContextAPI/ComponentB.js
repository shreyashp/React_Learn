import React, { Component } from "react";
import ComponentC from "./ComponentC";
import UserContext from "./userContext";

export class ComponentB extends Component {
  //directly accessing the context value without using 'Consumer' ccomponent
  static contextType = UserContext;
  render() {
    return (
      <div>
        Component B Context {this.context}
        <ComponentC />
      </div>
    );
  }
}

export default ComponentB;
