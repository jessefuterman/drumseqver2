import React, { Component } from "react";
import "../App.css";

var black = "424242";
var white = "ffd800";
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
    console.log(this.state.isPressed);
    ///this.setState({ isPressed: false });

    if (this.state.isPressed === true) {
      this.setState({ isPressed: false }, () => this.props.allButtons(this.props.columnNum, this.state.isPressed)); 
    } else if (this.state.isPressed === false) {
      console.log(this.state.isPressed, "after else if");
      this.setState({ isPressed: true },  ()  => this.props.allButtons(this.props.columnNum, this.state.isPressed))
      console.log("after elseif1 again", this.state.isPressed);
    }
    console.log("after elseif2 again", this.state.isPressed);
    

    //           this.buttonTwo();

    //  this.setState({ isPressedTwo: false });
    // // this.props.propBase(this.state.isPressedThree);
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
