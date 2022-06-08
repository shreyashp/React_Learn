import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      comments: "",
      topic: "react",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  onSubmitClick = (event) => {
    alert(`${this.state.name}  ${this.state.comments}  ${this.state.topic}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitClick}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleUsernameChange}
            ></input>
          </div>
          <div>
            <label>Comments: </label>
            <textarea
              type="text"
              value={this.state.comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <div>
            <label>Topic: </label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
