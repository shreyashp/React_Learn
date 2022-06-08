import React, { Component } from "react";

class OldRefDemo extends Component {
  constructor(props) {
    super(props);

    //These are called Callback Refs which incorporate use of Call bcak functions to create ref
    this.oldInputCBRef = null; //Step 1
    this.setCBRef = (element) => {
      //Step2
      this.oldInputCBRef = element;
    };
  }

  componentDidMount() {
    if (this.oldInputCBRef) {
      this.oldInputCBRef.focus();
      //Step 4 : as react calls the callback with dom element if the element is present, or with null if its not present
    }
  }

  render() {
    return (
      <div>
        Ref Demo (Old way)
        <br />
        -------------------------------------
        <br />
        {/* Step 3 */}
        <input type="text" ref={this.setCBRef}></input>
      </div>
    );
  }
}

export default OldRefDemo;
