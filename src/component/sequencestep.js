import React, { Component } from "react";
import "../App.css";

var black = "424242";
var white = "f5f5f5";
class SequenceStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: white,
      pushedColor: black,
      isPressed: false
    };
    console.log("state baby", this.state.isPressed);
  }

  handleClick = event => {
    event.preventDefault();

    this.props.propBase();
    console.log("we gettin clicked");
    this.setState({ isPressed: true });

    if (this.state.isPressed === true) {
      return this.setState({ isPressed: false });
    }
  };

  style = () => {
    if (this.state.isPressed === false) {
      return this.state.pushedColor;
    } else if (this.state.isPressed === true) {
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
