import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./Navbar";
import Main from "./main";
import Checkout from './checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Main/>
            </Route>
            <Route exact path = "/checkout">
              <Checkout/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
