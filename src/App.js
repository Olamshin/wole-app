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

  render() {
    return (
      <HashRouter>
        <div className="container Wole-container">
          <div className="row">
            <div>
              <div>
                <NavLink exact to="/">
                  <img
                    src="dot_o_logo.jpg"
                    className="img-responsive center-block"
                    alt="dot_o"
                    style={{ height: "100px", "margin-bottom": "10px" }}
                  />
                </NavLink>
              </div>
              <Menu />
            </div>
          </div>
          <div className="row">
            <div id="content" style={{ margin: "10px 50px" }}>
              <Route exact path="/" component={Home} />
              <Route path="/biography" component={Biography} />
              <Route path="/music" component={Music} />
              <Route path="/videos" component={Videos} />
              {/* <Route path="/blog" component={} />
              <Route path="/shows" component={} /> */}
              <hr/>
            </div>
            <div className="row" style={{ "text-align": "center" }}>
              <div className="col-sm-3" />
              <div className="col-sm-2" >
                <a className="theme_color_red" href="">INSTAGRAM</a>
              </div>
              <div className="col-sm-2">
                <a className="theme_color_red" href="">FACEBOOK</a>
              </div>
              <div className="col-sm-2">
                <a className="theme_color_red" href="">TWITTER</a>
              </div>
              <div className="col-sm-3" />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
