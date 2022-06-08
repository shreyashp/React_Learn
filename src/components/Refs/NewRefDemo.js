import React, { Component } from "react";

class NewRefDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  render() {
    return (
      <div>
        Ref Demo (New way)
        <br />
        -------------------------------------
        <br />
        <input type="text" ref={this.inputRef}></input>
      </div>
    );
  }
}

export default NewRefDemo;
