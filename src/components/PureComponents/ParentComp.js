//Demo of Pure components (class based) and Memo (FUnction based)

import React, { Component } from "react";
import MemoComp from "./MemoComp";
// import PureComp from "./PureComp";
// import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shreyash",
    };
  }
  
  componentDidMount() {
      setInterval(() => {
          this.setState({
              name: 'Shreyash'
          })
      }, 2000);
  }

  render() {
      console.log('-----Parent Component Render-----')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <PureComp name={this.state.name} /> */}
        {/* <RegComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
