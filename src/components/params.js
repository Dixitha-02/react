import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function Params() {
    return (
      <Router>
        <div>
          <h2>Channels</h2>
  
          <ul>
            <li>
              <Link to= "/245/zoom">Zoom</Link>
            </li>
            <li>
              <Link to="/502">MTV</Link>
            </li>
            <li>
              <Link to="/985">Music</Link>
            </li>
            <li>
              <Link to="/679">Pogo</Link>
            </li>
          </ul>
  
          <Switch>
            <Route path="/:id/:id2" children={<Child />} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Child() {
    let { id, id2} = useParams();
  
    return (
      <div>
        <h3>ID: {id,id2}</h3>
      </div>
    );
  }
 