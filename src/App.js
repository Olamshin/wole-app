import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
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
      latest_show: null,
      show_flag: false,
    };

    this.showMoreContainerRef = React.createRef()

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

  show_more = () => {
    let containerHeight = this.showMoreContainerRef.current.offsetHeight
    let containerChildrenHeight = 0
    let children = this.showMoreContainerRef.current.children

    Array.from(children).forEach(element => {
      containerChildrenHeight += element.offsetHeight
      console.log(element.offsetHeight)
    });

    if (!this.state.show_flag && containerChildrenHeight > containerHeight) {
      this.setState({ show_flag: true });
    }
    else {
      this.setState({ show_flag: false });
    }
  }


  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({ show_flag: false });
    });
  }

  render() {
    return <div className="container h-100">
      <div id="logo_section" className="row">
        <div className="row" style={{ justifyContent: "center", display: "relative" }}>
          <NavLink className="logo" exact to="/">
            <img src={logo} className="img-fluid center-block" alt="dot_o" />
          </NavLink>
        </div>
        <div id="tagline"
          className="row">
          <span>Drawing Out the Oneness</span>
        </div>
        <div className="row wole-menu" >
          <Menu />
        </div>
      </div>
      <div className="row h-100">
        <div id="content" className="row">
          <div id="show-more-container" ref={this.showMoreContainerRef} className={this.state.show_flag ? "show-content-more" : "show-content-less"}>
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
          </div>
          <div id="show-more" onClick={this.show_more}>
            <span className={this.state.show_flag ? "caret up" : "caret down"}></span>
            <span className="show-more-words">{this.state.show_flag ? "Show Less" : "Show More"}</span>
          </div>
          <div id="footer">
            <div style={{ textAlign: "center" }}>Join the DOT O email list</div>
            <a className="btn btn-light" href="https://officialdoto.us17.list-manage.com/subscribe/post?u=dce8d5092fa340e293e4da586&amp;id=84a7cd2415"
            target="_blank">SIGN ME UP</a>
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>;
  }
}

export default withRouter(App);
