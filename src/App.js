import React, { Component } from "react";
import "./App.css";
import wole from "./wole.jpeg";
import Menu from "./menu";
import YoutubeVideo from "./YouTubeVideo"
import words_bio from "./words"

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={wole} className="Wole-logo" alt="wole" />
          <h1>DOT O</h1>
          <Menu/>
        </div>
        <div>
          <YoutubeVideo url="https://www.youtube.com/embed/TUrkx0nYflo"/>
          <p>
            {words_bio}
          </p>
        </div>
      </div>
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
