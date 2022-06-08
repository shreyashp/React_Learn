import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "shreyash",
    };
    console.log("LifecycleB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDrivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycelB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    console.log("LifecylceB Render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
