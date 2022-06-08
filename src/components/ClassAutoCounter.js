import React, { Component } from "react";

class ClassAutoCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      enable: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.autoIncrement, 1000);
  }

  autoIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  toggleCounter = () => {
    this.setState((prevState) => ({
      enable: !prevState.enable,
      count: 0,
    }));
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { count, enable } = this.state;
    return (
      <div>
        <button onClick={this.toggleCounter}>Toggle Counter</button>
        <br />
        {enable && count}
      </div>
    );
  }
}

export default ClassAutoCounter;
