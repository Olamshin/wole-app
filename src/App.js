import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu";
import Home from "./components/home";
import Music from "./components/music";
import Biography from "./components/biography";
import Videos from "./components/videos";
import Blog from "./components/blog";
import Prismic from "prismic-javascript"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bio_words: null,
      posts: null
    };

    const apiEndpoint = 'https://wole-app.prismic.io/api/v2';
    
    Prismic.api(apiEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'bio_wo')).then(response => {
        if (response) {
          this.setState({ bio_words: response.results[0] });
        }
      });
      api.query(Prismic.Predicates.at('document.type', 'post')).then(response => {
        if (response) {
          this.setState({ posts: response.results });
        }
      });
    });
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
                    src="dot_o_logo.png"
                    className="img-responsive center-block"
                    alt="dot_o"
                    style={{ height: "100px", marginBottom: "10px", marginTop: "10px" }}
                  />
                </NavLink>
              </div>
              <Menu />
            </div>
          </div>
          <div className="row">
            
            <div id="content" style={{ margin: "10px 60px" }}>
              <Route exact path="/" component={Home} />
              <Route path="/biography" render={props => <Biography words={this.state.bio_words}/>} />
              <Route path="/music" component={Music} />
              <Route path="/videos" component={Videos} />
              <Route path="/blog" render={props => <Blog posts={this.state.posts}/>} />
              {/* <Route path="/shows" component={} />  */}
              <hr />
            </div>
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-sm-2" />
              <div className="col-sm-2">
                <a
                  className="theme_color_red"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/dot.o_/"
                >
                  INSTAGRAM
                </a>
              </div>
              <div className="col-sm-2">
                <a
                  className="theme_color_red"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/dotoinfo/"
                >
                  FACEBOOK
                </a>
              </div>
              <div className="col-sm-2">
                <a
                  className="theme_color_red"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/wole_dot_o"
                >
                  TWITTER
                </a>
              </div>
              <div className="col-sm-2">
                <a
                  className="theme_color_red"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.snapchat.com/add/wole.o"
                >
                  SNAPCHAT
                </a>
              </div>
              <div className="col-sm-2" />
              </div>
            
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
