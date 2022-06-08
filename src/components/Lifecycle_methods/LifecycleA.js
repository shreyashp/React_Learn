import React, { Component } from "react";
import LifecycelB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "shreyash",
    };
    console.log("LifecycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDrivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycelA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  chanegState = () => {
    this.setState({
      name: "Pimpalshende",
    });
  };

  render() {
    console.log("LifecylceA Render");
    return (
      <div>
        Lifecycle A<br />
        <LifecycelB />
        <button onClick={this.chanegState}>Change State</button>
      </div>
    );
  }
}

export default LifecycleA;
