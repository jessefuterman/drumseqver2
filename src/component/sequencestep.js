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
      isPressed: true,

      isPressedTwo: true,
      isPressedThree: true,
      isPressedFour: true,
      isPressedFive: true
    };
    console.log("state baby", this.state.isPressed);
  }

  handleClick = event => {
    event.preventDefault();
    console.log("I AM BUTTON 1 ROW 1");
    console.log("we gettin clicked");

    ///this.setState({ isPressed: false });

    console.log("button 1");

   
    this.setState({ isPressed: false });
    this.props.propBase(this.state.isPressed);
    if (this.state.isPressed === false) {
      return this.setState({ isPressed: true });
    }
    if (this.state.isPressed === false) {
      this.setState({isPressedTwo: false})
    }

    //           this.buttonTwo();

    // this.setState({ isPressedThree: false });
    // // this.props.propBase(this.state.isPressedThree);

    if (this.state.isPressedTwo === false) {
      return this.setState({ isPressedTwo: true });
    }
  };

  ringo = () => {};

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
