import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
