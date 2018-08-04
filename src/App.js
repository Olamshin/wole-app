import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu";
import Home from "./components/home";
import Music from "./components/music";
import Biography from "./components/biography";
import Videos from "./components/videos";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container Wole-container">
          <div className="row">
            <div className="col-xs-3">
              <div className="fixed">
                <NavLink exact to="/">
                  <img src="dot_o_logo.jpg" className="Wole-logo" alt="dot_o" />
                  <h1>DOT O</h1>
                </NavLink>
                <Menu />
              </div>
            </div>
            <div id="content" className="col-xs-9">
              <Route exact path="/" component={Home} />
              <Route path="/biography" component={Biography} />
              <Route path="/music" component={Music} />
              <Route path="/videos" component={Videos} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
