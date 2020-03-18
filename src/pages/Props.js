import React from "react";
function Props(props) {
    constructor(props);
    {
        super(props);
        
            this.state ={ 
                display: 'hi'
            }
    }  
    function Click()
    {
        console.log(this.props);
    }
    render()
    {

        return(
            <div>
                <input type="button" value="click" onClick="Click()"/>
            </div>
        )
    }

    }
    

export default Props;