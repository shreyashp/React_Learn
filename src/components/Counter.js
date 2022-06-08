import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increaseCounter() {
    /* this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        //Callback function that executes only after state is updated
        console.log(`Callback Value count: `, this.state.count);
      }
    );

    //this statement executes before state is updated
    console.log(`Normal execution count: `, this.state.count); */

      this.setState((prevState) => ({
          count : prevState.count + 1
      }))

  }

  incrementFive() {
    this.increaseCounter(); //This is case where react considers
    this.increaseCounter(); //Multiple function calls to same function as one
    this.increaseCounter(); //So need to modify how the state change in increaseCounter func
    this.increaseCounter();
    this.increaseCounter();
  }

  countReset(){
      this.setState((prevState) => ({
          count : 0
      }))
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => this.increaseCounter()}>Increment 1</button><br/>
        <button onClick={() => this.incrementFive()}>Increment 5</button><br/>
        <button onClick={() => this.countReset()}>Reset</button>
      </div>
    );
  }
}

export default Counter;
