import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <ul id='navigation'>
            <li>
              <Link
                to='/GameGLiTcHDevelopment/'
                style={{ fontSize: "1.8rem", fontWeight: "900" }}
              >
                GameGLiTcH
              </Link>
            </li>
            <li>
              <Link to='/GameGLiTcHDevelopment/'>Home</Link>
            </li>
            <li>
              <Link to='/GameGLiTcHDevelopment/about'>About</Link>
            </li>
            {/* <li>
              <Link to='/GameGLiTcHDevelopment/contact'>Contact</Link>
            </li> */}
          </ul>
        </nav>
        <Switch>
          <Route exact path='/GameGLiTcHDevelopment/'>
            <Home />
          </Route>
          <Route path='/GameGLiTcHDevelopment/about'>
            <About />
          </Route>
          {/* <Route path='/GameGLiTcHDevelopment/contact'>
            <Contact />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
