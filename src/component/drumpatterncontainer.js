import React, { Component } from "react";

import { Tone } from "tone";
import "../App.css";
import SeqColumn from "./seqcolumn";
class DrumPatternContainer extends Component {
  render() {
    
    function metronome() {
      let players;
      players = new Tone.Players("./desktop/kick.wav").toMaster();

      let index = 0;

      Tone.Transport.scheduleRepeat(repeat, "16n");
      Tone.Transport.start();

      

       

        index++;
      }
    }

    

    //play as soon as the buffer is loaded

    Tone.Transport.start();
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = 3;
    Tone.Transport.loop = true;

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
