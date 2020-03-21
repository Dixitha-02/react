import React, { Component } from 'react';
 class Life extends Component{
     constructor(props)
     {
         super(props);
         this.state = {
             name : "Dixitha"
         }
        
     }
   
     shouldComponentUpdate(){
        return true;
     }

    Changename=() => {
    
        this.setState({name:"Dixitha T"});
        
    }
     

     render(){
         return(
             <div>
                 <h2> My name is {this.state.name}</h2>
             <button onClick={this.Changename}>Change</button>
             </div>
         );
     }
 }

 export default Life;