import React, {component} from 'react';
import {Link,NavLink,Route, useParams} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export default class Nav extends component{
    render(){
        return(
            <>
            <BrowserRouter>
            <div>
                <h>Heading</h>
                <ul>
                    <li>
                    <Link to="/hi">HI</Link></li>
                   <li><NavLink to="/hello">Hello</NavLink></li>
                </ul>
            </div>
            <Route path="/:child" children={<fun/>}>fun</Route>
            </BrowserRouter>
            </>
        )
    }

}
fun=()=>{
    let {child} = useParams();

    return <h2>Press : {child}</h2>
}