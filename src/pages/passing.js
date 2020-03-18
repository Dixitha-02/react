import React, { Component } from 'react';
class Pass extends Component{
render(){


return(
            <div>
           <p> My name is {this.props.name}</p>
           <p> My id : {this.props.id}
           <p>addr: {this.fun}</p>

           </p> </div>
        );

}
}
export default Pass;