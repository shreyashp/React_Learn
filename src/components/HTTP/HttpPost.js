import axios from "axios";
import React, { Component } from "react";

class HttpPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch();
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        Http Form Component
        <br />
        <input
          type="text"
          name="userId"
          placeholder="User Id "
          value={userId}
          onChange={this.changeHandler}
        ></input>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.changeHandler}
        ></input>
        <br />
        <input
          type="text"
          name="body"
          placeholder="Body"
          value={body}
          onChange={this.changeHandler}
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default HttpPost;
