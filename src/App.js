import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu";
import Home from "./components/home";
import Music from "./components/music";
import Biography from "./components/biography";
import Videos from "./components/videos";
import Blog from "./components/blog";
import Shop from "./components/shop";
import SocialIcons from "./components/SocialIcons";
import Prismic from "prismic-javascript";
import logo from "./images/dot_o_logo_all_white.png"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bio_words: null,
      posts: null,
      latest_show: null
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
      api.query(Prismic.Predicates.at('document.type', 'latest_show')).then(response => {
        if (response) {
          this.setState({ latest_show: response.results });
        }
      });
      api.query(Prismic.Predicates.at('document.type', 'shop_item')).then(response => {
        if (response) {
          this.setState({ shop_items: response.results });
        }
      });
      api.query(Prismic.Predicates.at('document.type', 'featured_artist')).then(response => {
        if (response) {
          this.setState({ featured_artist: response.results });
        }
      });
      api.query(Prismic.Predicates.at('document.type', 'home_video')).then(response => {
        if (response) {
          this.setState({ home_video: response.results });
        }
      });
      api.query(Prismic.Predicates.at('document.type', 'videos_tab_item')).then(response => {
        if (response) {
          this.setState({ videos_tab_items: response.results });
        }
      });
      api.query(Prismic.Predicates.at('document.type', 'show_link')).then(response => {
        if (response) {
          if (response.results[0]) {
            this.setState({ show_link: response.results[0].data.link.url });
          }
        }
      });

    });
  }

  render() {
    return <HashRouter>
      <div className="container Wole-container">
        <div id="logo_section" className="row">
          <div className="row">
            <NavLink exact to="/">
              <img src={logo} className="logo img-fluid center-block" alt="dot_o" />
            </NavLink>
          </div>
          <div className="row wole-menu" >
            <Menu />
          </div>
        </div>
        <div className="row">
          <div id="content" className="row">
            <Route exact path="/"
              render={props => <Home
                show_img={this.state.latest_show}
                artist={this.state.featured_artist}
                home_video={this.state.home_video}
                show_link={this.state.show_link} />} />
            <Route path="/biography" render={props => <Biography words={this.state.bio_words} />} />
            <Route path="/music" component={Music} />
            <Route path="/videos" render={props => <Videos video_items={this.state.videos_tab_items} />} />
            <Route path="/blog" render={props => <Blog posts={this.state.posts} />} />
            <Route path="/shop" render={props => <Shop shop_items={this.state.shop_items} />} />
            <div id="footer">
                <div style={{textAlign: "center"}}>Join the DOT O email list</div>
                <input type="text" class="form-control" placeholder="enter your email here*"></input>
                <button type="button" class="btn btn-light">SIGN ME UP</button>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>;
  }
}

export default App;
