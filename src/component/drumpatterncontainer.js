import React, { Component } from "react";

import { Tone } from "tone";
import "../App.css";
import SeqColumn from "./seqcolumn";
class DrumPatternContainer extends Component {
  
  constructor(props){
    super(props)
  this.metronome = this.metronome.bind(this)
  
  
  }

  
  render() {
    
    // metronome() {
    //   let players;
    //   players = new Tone.Players("./desktop/kick.wav").toMaster();

    //   let index = 0;

    //   Tone.Transport.scheduleRepeat(repeat, "16n");
    //   Tone.Transport.start();

      

       

    //     index++;
    //   }
  }

    

    


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
  };
  


export default DrumPatternContainer;
