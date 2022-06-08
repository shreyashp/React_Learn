import React, { Component } from "react";

class ClassTitleUpdater extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} Times`;
  }

  //This Component lifecycle method is important for reflecting changes in the component, after complete
  //update of the component has happened
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating Document Title");
      document.title = `Clicked ${this.state.count} Times`;
    }
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count, name } = this.state;
    return (
      <div>
        <h3>Class Component</h3>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        ></input>
        <br />
        <button onClick={this.incrementCount}>Clicked {count} Times</button>
      </div>
    );
  }
}

export default ClassTitleUpdater;
