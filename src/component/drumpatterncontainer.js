import React, { Component } from "react";
import metronomeSound from "../sounds/metronome.wav";
import kickSound from "../sounds/kick.wav";
import Tone from "tone";
import "../App.css";
import SeqColumn from "./seqcolumn";

var metronome = new Tone.Player({
  url: metronomeSound,

  autostart: false
}).toMaster();

var kick = new Tone.Player({
  url: kickSound,

  autostart: false
}).toMaster();
let synth = new Tone.MembraneSynth().toMaster();
class DrumPatternContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { inputBpm: 0, isSeqPlaying: false, counter: 0 };
    console.log(this.state);
    this.interval = undefined;
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ inputBpm: event.target.value });
    console.log("this is the state", this.state);
    console.log(event.target.value);
    console.log("is this working?");
  };

  componentDidMount = () => {
    // var buffer = new Tone.Buffer(metronomeSound, function() {
    //   //the buffer is now available.
    //   var buff = buffer.get();
    //   console.log("this is buff", buff);
    // });
    // var buffers = new Tone.Buffers({
    //   kickSound: kickSound,
    //   metronome: metronomeSound
    // });
    // console.log("this is buff", buffers);
  };

  metronome = () => {
    console.log("imbeingpressed:)");

    Tone.Transport.scheduleRepeat(function(time) {
      metronome.start();
      kick.start();
    }, "4n");

    console.log(synth);
  };

  propBase = () => {
    console.log("FUK YEAH");
  };

  handleSubmit = event => {
    event.preventDefault();
    Tone.Transport.start();
    this.setState({ isSeqPlaying: true });
    this.metronome();
    this.interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, (60 / this.state.inputBpm) * 1000);
    console.log("before bpm change", Tone.Transport.bpm.value);
    Tone.Transport.bpm.value = this.state.inputBpm;
    console.log("after bpm change", Tone.Transport.bpm.value);
  };

  stop = () => {
    this.setState({ isSeqPlaying: false, counter: 0 });
    clearInterval(this.interval);
    this.interval = undefined;
    Tone.Transport.stop();
    console.log("stop is click");
  };

  componentWillMount() {
    this.interval = undefined;
  }

  lightupLogic = nb => {
    let lightUp = this.state.counter % 16;

    if (this.state.isSeqPlaying === true && lightUp === nb) {
      return true;
    }
    return false;
  };

  render() {
    return (
      <div className="DrumPatternContainer">
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

        <SeqColumn greeting={this.lightupLogic(0)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(1)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(2)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(3)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(4)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(5)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(6)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(7)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(8)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(9)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(10)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(11)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(12)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(13)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(14)} propBase={this.propBase} />
        <SeqColumn greeting={this.lightupLogic(15)} propBase={this.propBase} />
      </div>
    );
  }
}

export default DrumPatternContainer;
