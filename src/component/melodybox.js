import React, { Component } from "react";
class MelodyBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonOne: false
    };
    console.log("melodybox state", this.state);
  }

  handleButtonPress = () => {};

  handleKeyPress = event => {
    console.log(event.key);
    if (event.key === "e") {
      this.handleFormSubmit();
      console.log("we gettin pressed bitch");
    }
  };

  render() {
    return (
      <div className="melodyBox">
        <button className="melodyButton" onKeyPress={this.handleKeyPress}>
          {" "}
        </button>
        <button className="melodyButton"> </button>
        <button className="melodyButton"> </button>
        <button className="melodyButton"> </button>
      </div>
    );
  }
}

export default MelodyBox;
