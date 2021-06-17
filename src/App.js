import './App.css';
import { FaHome, FaStopwatch, FaArrowsAltH, FaReact } from 'react-icons/fa';
import CC9 from './components/CC9';
import Stopwatch from './components/Stopwatch_CC8';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MatchBrackets from './components/match_brackets';

function App() {
  return (
    <Router>
      <div className="App">
        <ol className="thelist">
          <li>
            <Link exact to="/">
              Home Page <FaHome />
            </Link>
          </li>
          <li>
            <Link to="/cc8">
              CC8 - Stop Watch <FaStopwatch />
            </Link>
          </li>
          <li>
            <Link to="/cc9">
              CC9 - Sliding Windows <FaArrowsAltH />
            </Link>
          </li>
          <li>
            <Link to="/match_brackets">
              Match Brackets <FaArrowsAltH />
            </Link>
          </li>
        </ol>
        <Switch>
          <Route exact path="/">
            <h3>
              JavaScript Coding Challenges Here <FaReact />
            </h3>
          </Route>
          <Route path="/cc9">
            <CC9 />
          </Route>
          <Route path="/cc8">
            <Stopwatch />
          </Route>
          <Route path="/match_brackets">
            <MatchBrackets />
          </Route>
        </Switch>

        {/* <Stopwatch /> */}
      </div>
    </Router>
  );
}

export default App;
