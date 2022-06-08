import React, { Component } from "react";

class ChildComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childName: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      childName: event.target.value,
    });
  };

  render() {
    return (
      <div>
        Child Component
        <br />
        ---------------------------------------------
        <br />
        <input
          type="text"
          placeholder="Enter Child Name"
          value={this.state.childName}
          onChange={this.onChangeHandler}
        ></input>
        <button
          onClick={() => {
            this.props.greetParent(this.state.childName);
          }}
        >
          Greet Parent
        </button>
      </div>
    );
  }
}

export default ChildComp;
