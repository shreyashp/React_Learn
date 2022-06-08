import React, { Component } from "react";

class StateExample extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };

    //this.changeMessage = this.changeMessage.bind(this);  #3 : binding in constructor
  }

  /*  changeMessage () {
        this.setState(
            {
                message : 'You are Subscribed !'
            }
        )
    } */

  //#4 : arrow function creation
  changeMessage = () => {
    this.setState({
      message: "You are Subscribed !",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}> Subscribe </button>
        {/*   <button onClick = {this.changeMessage.bind(this)} > Subscribe </button> //#1: binding in function call
              <button onClick = {() => this.changeMessage()} > Subscribe </button> //#2: arrow function in func call*/}
      </div>
    );
  }
}

export default StateExample;
