import React, {Component} from 'react';
/*import click from './pages/expr';

import First from './pages/class';
import Fun from './pages/func';

import Hello from './pages/hello';
import './App.css';
import Greet from './pages/expr';
import Function from './pages/func';
import Bliss from './pages/state';
import Props from './pages/Props';
import Pass from './pages/passing';
import Map from './pages/map';
import Event from './pages/event';
import Life from './pages/lifecycle';
import Error from './pages/error_handling';*/
import ErrorBoundary from './pages/error';

/*class App extends React.Component {
	render = () => <div id="but" >
    <click/>
    <input type="button" onClick="click()" value="click on" />
    </div>
        
        
        
    
}*/


/*class Second extends React.Component {
  render () {
    return (
      <First/>
    )
  }
}

export default Second;


function Fun1(){
  return ( 
    <Fun/>
  )
}
export default Fun1;

function Fun(){
  return(
    <div>
      <Hello/>
    </div>
    <div>
      <Greet/>
    </div>

    <div>
    <Function/>
    </div>

    <div>
    <Bliss/>
    </div>

    <div>
    <Props/>
    </div>

class Passing extends Component{
  
    state ={
    addr1:"mysore", addr2:"bangalore" }
    
    fun =() =>{
      console.log(this.state.addr1,this.state.addr2)
    }
  
  render(){

    return(
      <div>
      <Pass name={"dixitha"} id={123} fun1 = {this.fun}/>
      
    </div>
    )
  }
}
export default Passing;*/

function Fun(){
  return(
    /*<div>
      <Event/>
    </div>

    <div>
      <Life/>
    </div>

    <div>
      <Error/>
    </div>*/

    <div>
      <ErrorBoundary/>
    </div>
  )
}
export default Fun;


  
    
