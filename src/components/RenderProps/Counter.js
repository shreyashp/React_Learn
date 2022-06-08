//Render Props Pattern is similar functionality as HOC, but here a method as a prop value is passed to the
//component whose functionality is to be shared, and then consumer components are rendered within that
//share component
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCounter)}</div>
    );
  }
}

export default Counter;
