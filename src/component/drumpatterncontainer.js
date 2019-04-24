import React, { Component } from "react";

import Tone from "tone";
import "../App.css";
import SeqColumn from "./seqcolumn";

// var player = new Tone.Player("./metronome.flac").toMaster();

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
    // console.log("in componentDidMount");
    // let player = new Tone.Player({
    //   url: "./metronome.mp3",
    //   loop: true
    // }).toMaster();

    
    // document.querySelector("tone-player").bind(player);
    // document.querySelector("tone-play-toggle").bind(player);
   
    
    let buffer = new Tone.Buffer({
      
      url: "./metronome.mp3",
      onload: () => {
        console.log("in player");
        
      },

      onerror: () => {
        console.log("error");
      }
      // function() {
      //   //the buffer is now available.
      //   var buff = buffer.get();
      //   console.log("this is buff" , buff);
      // }
    });
  };

  metronome = () => {
    console.log("imbeingpressed:)");

    synth.volume.value = 1;

    console.log(synth);
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
        <SeqColumn greeting={this.lightupLogic(0)} />
        <SeqColumn greeting={this.lightupLogic(1)} />
        <SeqColumn greeting={this.lightupLogic(2)} />
        <SeqColumn greeting={this.lightupLogic(3)} />
        <SeqColumn greeting={this.lightupLogic(4)} />
        <SeqColumn greeting={this.lightupLogic(5)} />
        <SeqColumn greeting={this.lightupLogic(6)} />
        <SeqColumn greeting={this.lightupLogic(7)} />
        <SeqColumn greeting={this.lightupLogic(8)} />
        <SeqColumn greeting={this.lightupLogic(9)} />
        <SeqColumn greeting={this.lightupLogic(10)} />
        <SeqColumn greeting={this.lightupLogic(11)} />
        <SeqColumn greeting={this.lightupLogic(12)} />
        <SeqColumn greeting={this.lightupLogic(13)} />
        <SeqColumn greeting={this.lightupLogic(14)} />
        <SeqColumn greeting={this.lightupLogic(15)} />
      </div>
    );
  }
}

export default DrumPatternContainer;
