import React, { Component } from "react";
import SequenceStep from "./sequencestep.js";
import Tone from "tone";
import "../App.css";

class SeqColumn extends Component {
  render() {
    Tone.Transport.bpm.value = 120;
     
    return (
      <div className="SeqColumn"> 
        <SequenceStep className="SequenceStep"> </SequenceStep>
        <SequenceStep className="SequenceStep" />
        <SequenceStep clssName="SequenceStep" />
        <SequenceStep clssName="SequenceStep" />
      </div>
    );
  }
}

export default SeqColumn;
