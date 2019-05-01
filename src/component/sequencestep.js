import React, { Component } from "react";
import "../App.css";

var black = "424242";
var white = "f5f5f5";
class SequenceStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: black,
      pushedColor: white,
      isPressed: false
    };
    console.log("state baby", this.state.isPressed);
  }

  handleClick = event => {
    event.preventDefault();
    console.log(this.props);
    ///this.setState({ isPressed: false });

    this.setState({ isPressed: true });
    this.props.seqButton();

    if (this.state.isPressed === true) {
      this.setState({ isPressed: false });
    }

    //           this.buttonTwo();

    //  this.setState({ isPressedTwo: false });
    // // this.props.propBase(this.state.isPressedThree);

    if (this.state.isPressedTwo === false) {
      return this.setState({ isPressedTwo: true });
    }
  };

  style = () => {
    if (this.state.isPressed === true) {
      return this.state.pushedColor;
    } else if (this.state.isPressed === false) {
      return this.state.activeColor;
    }
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        style={{ background: "#" + this.style() }}
        className="SequenceStep"
      />
    );
  }
}
export default SequenceStep;
