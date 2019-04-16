import React, { Component } from "react";

import Tone from "tone";
import "../App.css";
import SeqColumn from "./seqcolumn";

let synth = new Tone.MembraneSynth().toMaster();

class DrumPatternContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { bpm: 0 };
    this.metronome = this.metronome.bind(this);
    this.submitBpm = this.submitBpm.bind(this);
    this.stop = this.stop.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ bpm: event.target.value });

    console.log(this.setState);
    console.log("is this working?");
  }

  submitBpm(event) {
    event.preventDefault();
    Tone.Transport.bpm.value = this.setState.bpm;
    console.log(Tone.Transport.bpm.value);
  }

  stop() {
    Tone.Transport.stop();
    console.log("stop is click");
  }
  metronome() {
    console.log("imbeingpressed:)");

    synth.volume.value = 1;
    synth.triggerAttackRelease("C2", "8n");
    console.log(synth);
  }

  render() {
    return (
      <div className="DrumPatternContainer">
        <button onClick={this.metronome}>kick sound</button>

        <button onClick={this.stop}>Stop</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
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
