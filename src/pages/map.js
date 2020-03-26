import React from 'react'; 
import { render } from '@testing-library/react';
function Map(){
const names= ['ayaan','ayra','aarav','aryan','arush']; 
  
const updatedNames = names.map((number)=>{ 
    return <li>{number}</li>; 
    
}); 
return(
    <ul>
       <button onClick ={updatedNames}>1st</button>
    </ul>
);
}
export default Map;
  
