import React, {Component} from 'react';
  class Bliss extends Component
  {
      state = {
          name:"",
          name2: " "
      };

    render()
    {
        return( 
            <div>
                <p>First name: {this.state.name}</p>
                <p>Last name: {this.state.name2} </p>
                <input type="text" onChange=
                {e=>
                {
                    this.setState({name:e.target.value});
                }
            } value={this.state.name}
                />
                <input type="text" onChange=
                {e=>
                {
                    this.setState({name2:e.target.value});
                }
            } value={this.state.name2}
                />
                
            </div>
        );
    }
}
    
 export default Bliss;
           
    

  