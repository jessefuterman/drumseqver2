import React, { Component } from 'react';

import './App.css';
import DrumPatternContainer from "./component/drumpatterncontainer.js";
import SequenceStep from "./component/sequencestep.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          
          
          <DrumPatternContainer> </DrumPatternContainer>
        </header>
      </div>
    );
  }
}

export default App;
