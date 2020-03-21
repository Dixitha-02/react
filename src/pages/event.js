import React, { Component } from 'react';
class Event extends Component{
 Eventfun = () =>{
     alert("You succeeded");
 }
        
    
    render(){
        return(
            <button onClick={this.Eventfun}>click</button>
        )
    }
}
export default Event;