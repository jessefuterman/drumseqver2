import React, { Component } from "react";
import metronomeSound from "../sounds/metronome.wav";
import kickSound from "../sounds/kick.wav";
import Tone from "tone";
import "../App.css";
import SeqColumn from "./seqcolumn";
import hihatSound from "../sounds/closedhi.wav";
import clap from "../sounds/808clap.wav";
import boom from "../sounds/boom.wav";
import snare from "../sounds/snare.wav";

var kick = new Tone.Player({
  url: kickSound,

  autostart: false
}).toMaster();

var hihat = new Tone.Player({
  url: hihatSound,

  autostart: false
}).toMaster();

var clapSound = new Tone.Player({
  url: clap,

  autostart: false
}).toMaster();

var boomSound = new Tone.Player({
  url: boom,

  autostart: false
}).toMaster();

var snareSound = new Tone.Player({
  url: snare,

  autostart: false
}).toMaster();

class DrumPatternContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputBpm: 0,
      isSeqPlaying: false,
      counter: 0,
      columnRowScience: [{ row: 0, column: 0 }, {}, {}],
      display: ""
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
    var buffer = new Tone.Buffer(metronomeSound, function() {
      //the buffer is now available.
      var buff = buffer.get();
      console.log("this is buff", buff);
    });
    var buffers = new Tone.Buffers({
      kickSound: kickSound,
      hihatSound: hihatSound
    });
    console.log("this is buff", buffers);
  };

  metronome = () => {
    console.log("imbeingpressed:)");

    Tone.Transport.scheduleRepeat(time => {
      let columnRowScience = this.state.columnRowScience;
      for (let i = 0; i < columnRowScience.length; i++) {
        if (columnRowScience[i].col === this.state.counter) {
          console.log(columnRowScience[i].row, "this the row");
          if (columnRowScience[i].row === 1) {
            kick.start();
          }
          if (columnRowScience[i].row === 2) {
            boomSound.start();
          }
          if (columnRowScience[i].row === 3) {
            hihat.start();
          }
          if (columnRowScience[i].row === 4) {
            clapSound.start();
          }
          if (columnRowScience[i].row === 5) {
            snareSound.start();
          }
        }
      }
    }, "4n");
  };

  buttonOne = (col, isPressed) => {
    let columnRowScience = this.state.columnRowScience;
    console.log(col, isPressed, "two args");
    console.log("i am button one");
    if (isPressed === true) {
      this.setState({
        columnRowScience: this.state.columnRowScience.concat({
          row: 1,
          col: col
        })
      });
    } else {
      for (let i = 0; i < columnRowScience.length; i++) {
        if (columnRowScience[i].row === 1 && columnRowScience[i].col === col) {
          columnRowScience.splice(i, 1);
          this.setState({ columnRowScience: columnRowScience });
        }
      }
    }
  };

  buttonTwo = (col, isPressed) => {
    let columnRowScience = this.state.columnRowScience;
    console.log(col, isPressed, "two args");
    console.log("i am button two");
    if (isPressed === true) {
      this.setState({
        columnRowScience: this.state.columnRowScience.concat({
          row: 2,
          col: col
        })
      });
    } else {
      for (let i = 0; i < columnRowScience.length; i++) {
        if (columnRowScience[i].row === 2 && columnRowScience[i].col === col) {
          columnRowScience.splice(i, 2);
          this.setState({ columnRowScience: columnRowScience });
        }
      }
    }
  };

  buttonThree = (col, isPressed) => {
    let columnRowScience = this.state.columnRowScience;
    console.log(col, isPressed, "two args");
    console.log("i am button two");
    if (isPressed === true) {
      this.setState({
        columnRowScience: this.state.columnRowScience.concat({
          row: 3,
          col: col
        })
      });
    } else {
      for (let i = 0; i < columnRowScience.length; i++) {
        if (columnRowScience[i].row === 3 && columnRowScience[i].col === col) {
          columnRowScience.splice(i, 3);
          this.setState({ columnRowScience: columnRowScience });
        }
      }
    }
  };

  buttonFour = (col, isPressed) => {
    let columnRowScience = this.state.columnRowScience;
    console.log(col, isPressed, "two args");
    console.log("i am button two");
    if (isPressed === true) {
      this.setState({
        columnRowScience: this.state.columnRowScience.concat({
          row: 4,
          col: col
        })
      });
    } else {
      for (let i = 0; i < columnRowScience.length; i++) {
        if (columnRowScience[i].row === 4 && columnRowScience[i].col === col) {
          columnRowScience.splice(i, 4);
          this.setState({ columnRowScience: columnRowScience });
        }
      }
    }
  };

  buttonFive = (col, isPressed) => {
    let columnRowScience = this.state.columnRowScience;
    console.log(col, isPressed, "two args");
    console.log("i am button two");
    if (isPressed === true) {
      this.setState({
        columnRowScience: this.state.columnRowScience.concat({
          row: 5,
          col: col
        })
      });
    } else {
      for (let i = 0; i < columnRowScience.length; i++) {
        if (columnRowScience[i].row === 5 && columnRowScience[i].col === col) {
          columnRowScience.splice(i, 5);
          this.setState({ columnRowScience: columnRowScience });
        }
      }
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    Tone.Transport.start();
    this.setState({ isSeqPlaying: true, counter: this.state.counter + 1 });
    this.setState({ display: "none" });
    this.metronome();

    console.log(this.props);

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
        <button onClick={this.stop}></button>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: "" + this.state.display }}
        >
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
          columnNum={(this.ColumnNum = 1)}
          isPressed={this.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(2)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 2)}
          isPressed={this.isPressed}
        />

        <SeqColumn
          greeting={this.lightupLogic(3)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 3)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(4)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 4)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(5)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 5)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(6)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 6)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(7)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 7)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(8)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 8)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(9)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 9)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(10)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 10)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(11)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 11)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(12)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 12)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(13)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 13)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(14)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 14)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(15)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 15)}
          isPressed={this.state.isPressed}
        />
        <SeqColumn
          greeting={this.lightupLogic(0)}
          buttonOne={this.buttonOne}
          buttonTwo={this.buttonTwo}
          buttonThree={this.buttonThree}
          buttonFour={this.buttonFour}
          buttonFive={this.buttonFive}
          columnNum={(this.ColumnNum = 16)}
          isPressed={this.state.isPressed}
        />
      </div>
    );
  }
}

export default DrumPatternContainer;
