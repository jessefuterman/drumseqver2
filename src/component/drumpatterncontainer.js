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

    this.state = {
      inputBpm: 0,
      isSeqPlaying: false,
      counter: 0,
      isPressed1: false,
      isPressed2: false,
      isPressed3: false,
      isPressed4: false,
      ispressed5: false
    };
    console.log(this.state);
    console.log(this.state.counter);
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
    //  var buffer = new Tone.Buffer(metronomeSound, function() {
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
    }, "4n");

    console.log(synth);
  };

  seqBrainKick = () => {
    if (this.state.isPressed1 === false && this.state.counter) {
      console.log("we are in row 1");
      return this.buttonOne();
    }
    if (this.buttonOne(this.state.isPressed === false) && this.state.counter) {
      return this.buttonOne();
    }
  };

  buttonOne = () => {
    console.log("i am button one");
    console.log(this.kick);
    this.setState({ isPressed1: true });
    if (this.state.isPressed1 === true) {
      this.setState({ isPressed1: false });
    }

    return kick.start();
  };

  buttonTwo = () => {
    console.log("i am button two");
    this.setState({ isPressed2: true });
    if (this.state.isPressed2 === true) {
      this.setState({ isPressed2: false });
    }
  };

  buttonThree = () => {
    console.log("button three");
    this.setState({ isPressed3: true });
    if (this.state.isPressed3 === true) {
      this.setState({ isPressed3: false });
    }
  };

  buttonFour = () => {
    console.log("button four");
    this.setState({ isPressed4: true });
    if (this.state.isPressed4 === true) {
      this.setState({ isPressed4: false });
    }
  };

  buttonFive = () => {
    console.log("button five");
    this.setState({ isPressed5: true });
    if (this.state.isPressed5 === true) {
      this.setState({ isPressed5: false });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    Tone.Transport.start();
    this.setState({ isSeqPlaying: true, counter: this.state.counter + 1 });
    this.metronome();
    this.seqBrainKick();

    this.interval = setInterval(() => {
      this.resetCounter();

      this.setState({ counter: this.state.counter + 1 });
    }, (60 / this.state.inputBpm) * 1000);
    console.log("before bpm change", Tone.Transport.bpm.value);
    Tone.Transport.bpm.value = this.state.inputBpm;
  };

  resetCounter = () => {
    if (this.state.counter === 16) {
      this.setState({ counter: this.state.counter * 0 });
    }
  };

  stop = () => {
    this.setState({ isSeqPlaying: false, counter: 0, currentColumn: 0 });
    clearInterval(this.interval);
    this.interval = undefined;
    Tone.Transport.stop();
  };

  componentWillMount() {
    this.interval = undefined;
  }

  lightupLogic = nb => {
    let lightUp = this.state.counter % 16;
    // this.columnLogic();

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

        <SeqColumn
          greeting={this.lightupLogic(1)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(2)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />

        <SeqColumn
          greeting={this.lightupLogic(3)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(4)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(5)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(6)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(7)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(8)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(9)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(10)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(11)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(12)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(13)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(14)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(15)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
        <SeqColumn
          greeting={this.lightupLogic(16)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
        />
      </div>
    );
  }
}

export default DrumPatternContainer;
