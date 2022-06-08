import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export class ComponentC extends Component {
  render() {
    return (
      <div>
          {/** Default way of accesing the context value using 'Consumer' */}
        <UserConsumer>
          {(userName) => {
            return <div>Hello {userName}</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentC;
