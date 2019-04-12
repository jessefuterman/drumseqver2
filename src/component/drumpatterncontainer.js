import React, { Component } from "react";

import Tone from "tone";
import "../App.css";
import SeqColumn from "./seqcolumn";
class DrumPatternContainer extends Component {
  render() {
    Tone.Transport.bpm.value = 120;

    return (
      <div className="DrumPatternContainer">
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        <SeqColumn />
        
      </div>
    );
  }
}

export default DrumPatternContainer;
