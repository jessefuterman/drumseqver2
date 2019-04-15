import React, { Component } from "react";

import { Tone } from "tone";
import "../App.css";
import SeqColumn from "./seqcolumn";

class DrumPatternContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
    this.metronome = this.metronome.bind(this);
  }

  metronome() {
    console.log("imbeingpressed:)");
    let player = Tone.Player({
      url: "./Users/jackfuterman/Desktop/kick.wav",
      autostart: true
    }).toMaster();

    console.log(player);
  }

  render() {
    return (
      <div className="DrumPatternContainer">
        <button onClick={this.metronome}>METRONOME BRO</button>

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
