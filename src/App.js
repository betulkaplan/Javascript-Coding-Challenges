import './App.css';
import CC9 from './components/CC9';
import Stopwatch from './components/Stopwatch_CC8';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ol className="thelist">
          <li>
            <Link exact to="/">
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/cc8">CC8 - Stop Watch</Link>
          </li>
          <li>
            <Link to="/cc9">CC9 - Sliding Windows</Link>
          </li>
        </ol>
        <Switch>
          <Route exact path="/">
            <h3>JavaScript Coding Challenges Here :)</h3>
          </Route>
          <Route path="/cc9">
            <CC9 />
          </Route>
          <Route path="/cc8">
            <Stopwatch />
          </Route>
        </Switch>

        {/* <Stopwatch /> */}
      </div>
    </Router>
  );
}

export default App;
