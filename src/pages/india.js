import React, {component} from 'react';
import india from '../images/india.png';

 class India extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    Counter = ()=>{
        this.setState({ count:this.state.count+1
        });
     
    }
    render(){
        return(
            <>
            <img src={india} width='200'/>
            <button onClick={this.Counter}>Vote</button> INDIA - {this.state.count}
            </>
        )
    }
}
export default India;