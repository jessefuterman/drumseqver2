import React, { Component } from "react";
import SequenceStep from "./sequencestep.js";

import "../App.css";
var red = "FF0000";
var white = "FFFFFF";

class SeqColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColumnColor: red,
      defaultColumnColor: white
    };
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ columnColor: event.target.value });
    console.log("this is the state", this.state);
    console.log(event.target.value);
    console.log("is this working?");
  };
 
  backgroundColorPicker = () => {
    let isSeqPlaying = this.props.greeting;
    if (isSeqPlaying === true) {
      return this.state.activeColumnColor;
    } else if (isSeqPlaying === false) {
      return this.state.defaultColumnColor;
    }
  };

  render() {
    return (
      <div
        className="SeqColumn"
        style={{ background: "#" + this.backgroundColorPicker() }}
      >
        <SequenceStep
        
          allButtons={this.props.buttonOne}
          columnNum={this.props.columnNum}
          isPressed={this.props.isPressed}
          className="SequenceStep"
        />
        <SequenceStep
          allButtons={this.props.buttonTwo}
          columnNum={this.props.columnNum}
          isPressed={this.props.isPressed}
          className="SequenceStep"
        />
        <SequenceStep
          allButtons={this.props.buttonThree}
          columnNum={this.props.columnNum}
          isPressed={this.props.isPressed}
          className="SequenceStep"
        />
        <SequenceStep
          allButtons={this.props.buttonFour}
          columnNum={this.props.columnNum}
          isPressed={this.props.isPressed}
          className="SequenceStep"
        />
        <SequenceStep
          allButtons={this.props.buttonFive}
          columnNum={this.props.columnNum}
          isPressed={this.props.isPressed}
          className="SequenceStep"
        />
      </div>
    );
  }
}

export default SeqColumn;
