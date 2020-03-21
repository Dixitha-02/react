import React, {Component} from 'react';
class Error extends Component {
    constructor(props) {
      super(props);
      this.state = { error: true};
    
    }
  
    handleClick() {
        try {
            console.log(window.device.version) 
            } 
       catch (error) {
        this.setState({ error });
      }
    }
  
    render() {
         
      if (this.state.error) {
         <h1>Caught an error.</h1>
      }
    
      return (<button onClick={this.handleClick}>Click Me</button>);
    }
  }
  export default Error;
  