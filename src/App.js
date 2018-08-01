import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";
import wole from "./wole.jpeg";
import Menu from "./menu";
import Home from "./components/home"
import Music from "./components/music"
import Biography from "./components/biography"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container Wole-container">
          <div className="row">
            <div className="col-md-3">
              <NavLink exact to="/">
                <img src={wole} className="Wole-logo" alt="wole" />
                <h1>DOT O</h1>
              </NavLink>
              <Menu />
            </div>
            <div id="content" className="col-md-9">
              <Route exact path="/" component={Home}/>
              <Route path="/biography" component={Biography}/>
              <Route path="/music" component={Music} />
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
