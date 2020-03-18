import React from 'react';

 
const Function= () =>
{
     function Click()
    {

        alert("welcome to react");
    }
  
    return (
        <div class="fun">
    
        <button onClick={Click}> Press</button>
        </div>
    );
}
export default Function;