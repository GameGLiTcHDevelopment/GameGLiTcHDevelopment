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
              <Link to="/GameGLiTcHDevelopment/">Home</Link>
            </li>
            <li>
              <Link to="/GameGLiTcHDevelopment/about">About</Link>
            </li>
            <li>
              <Link to="/GameGLiTcHDevelopment/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/GameGLiTcHDevelopment/">
            <Home />
          </Route>
          <Route path="/GameGLiTcHDevelopment/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
