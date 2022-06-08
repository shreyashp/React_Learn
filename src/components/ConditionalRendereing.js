import React from "react";
import { Component } from "react";

class ConditionalRendereing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //#1 : using boolean state value in if condition
    /* if (this.state.isLoggedIn) {
      return <div>Welcome Shreyash!</div>;
    } else {
      return <div>Welcome Guest!</div>;
    }
  } */

    //#2 : Declaring variable to contain the appropriate message based on the state value
    /* let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Shreyash</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return <div>{message}</div>; */

    //#3 : use of shortcircuit Operator
    /* return this.state.isLoggedIn ? (
      <div>Welcome Shreyash</div>
    ) : (
      <div>Welcome Guest</div>
    ); */

    //#4 : using && Operator to either show a message or nothing case
    return this.state.isLoggedIn && <div>Welcome Shreyash</div>;
  }
}

export default ConditionalRendereing;
