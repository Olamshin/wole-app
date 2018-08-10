import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu";
import Home from "./components/home";
import Music from "./components/music";
import Biography from "./components/biography";
import Videos from "./components/videos";

class App extends Component {
  constructor(props) {
    super(props);
    this.menu_parent = React.createRef();
    this.menu_child = React.createRef();

    this.state = {
      menu_width: "25%"
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    //need to implement this better in a generic way
    console.log(this);
    var parentwidth = this.menu_parent.current.offsetWidth;
    this.setState({ menu_width: parentwidth });
  }

  render() {
    return (
      <HashRouter>
        <div className="container Wole-container">
          <div className="row">
            <div className="col-xs-3" ref={this.menu_parent}>
              <div
                className="fixed"
                ref={this.menu_child}
                style={{ width: this.state.menu_width }}
              >
                <NavLink exact to="/">
                  <img
                    src="dot_o_logo.jpg"
                    className="img-responsive"
                    alt="dot_o"
                    style={{padding: '0 15px'}}
                  />
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
