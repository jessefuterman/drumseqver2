
import React, { Component } from "react";
class MelodyBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        buttonOne: false,
      };
      console.log("melodybox state", this.state);
    }
  

    
     handleButtonPress = () => {
    this.handleFormSubmit();
  };

  handleKeyPress = event => {
    if (event.key ==='Enter') {
      this.handleFormSubmit();
      
    }
  };
  
    render() {
      return(
      
        <div className="melodyBox">
        <button className ="melodyButton"> </button> 
        <button className ="melodyButton"> </button> 
        <button className ="melodyButton"> </button> 
        <button className ="melodyButton"> </button> 
        
        
        
        </div>
      )
    };
}

  export default MelodyBox;
  