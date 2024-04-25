import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./Navbar";
import Main from "./main";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Main/>
      </div>
    </Router>
  );
}

export default App;
