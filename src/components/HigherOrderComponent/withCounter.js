//Basically sharing common functionality among different components by wrapping them with the higher order function
import React, { Component } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
    //the function can take two parameters, one is the component and other if any special modification is required,
    //in this case different increment numbers
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
        console.log(this.props.name) //the props passed to Wrapped components comes till this point only
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props} //To pass them to the Wrapped Component for rendering, use spread operator to do so
        />
      );
    }
  }

  return NewComponent;
};

export default withCounter;
