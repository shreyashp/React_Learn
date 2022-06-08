import React, { Component } from "react";

class ClassMouseListener extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  mouseMoveHandler = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  componentDidMount() {
    console.log("Calling Mouseover Event");
    window.addEventListener("mousemove", this.mouseMoveHandler);
  }

  render() {
    const { x, y } = this.state;
    return (
      <div>
        <h3>
          Class - Mouse X:{x} Y:{y}
        </h3>
      </div>
    );
  }
}

export default ClassMouseListener;
