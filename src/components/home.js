import React from "react";
import YoutubeVideo from "./YouTubeVideo";
import apple_music_logo from "../images/applemusic.png"
import spotify_logo from "../images/spotify-badge.png"
import google_play_logo from "../images/google-play-badge.png"
import iheartradio_logo from "../images/iheartradio.png"
import napster_logo from "../images/napster.png"
import patreon_logo from "../images/patreon.png"

function Home(props) {
  var video;
  if (props.home_video) {
    var home_video = props.home_video[0].data
    video = <YoutubeVideo url={home_video.youtube_link.url} />
  } else {
    video = (<p>Loading Home Video...</p>)
  }
  return (
    <div className="row">

      <div className="home-video-container mb-5">
        <div className="embed-responsive" style={{ width: "100%", height: "450px", margin: "10px" }}>
          {video}
        </div>

      </div>
      <div className="col-sm">
        <div className="mx-auto w-75">
        <a className="badge w-100" href="https://music.apple.com/us/album/yee-yee/1475923671?uo=4" target="_blank" rel="noopener noreferrer">
          <img src={apple_music_logo} className="img-fluid" alt=""/>
        </a>
      </div>
        <div className="mx-auto w-75">
          <a className="badge" href="https://open.spotify.com/album/1kUsrHHtJ1sPq8gCXUS9w0" target="_blank" rel="noopener noreferrer">
            <img src={spotify_logo} className="img-fluid" alt=""/>
          </a>
        </div>
        <div className="mx-auto w-75">
          <a className="badge" href="https://play.google.com/store/music/album/Dot_O_Yee_Yee?id=Blenzxxitzrct2syq335az2pkua" target="_blank" rel="noopener noreferrer">
            <img src={google_play_logo} className="img-fluid" alt=""/>
          </a>
        </div>
        <div className="mx-auto w-75">
          <a className="badge" href="https://www.iheart.com/artist/id-31680716/albums/id-77937370" target="_blank" rel="noopener noreferrer">
            <img src={iheartradio_logo} className="img-fluid" alt=""/>
          </a>
        </div>
        <div className="mx-auto w-75">
          <a className="badge" href="https://us.napster.com/artist/dot-o/album/yee-yee" target="_blank" rel="noopener noreferrer">
            <img src={napster_logo} className="img-fluid" alt=""/>
          </a>
        </div>
        </div>
        <div className="col-sm">
        <a className="badge w-100" href="https://www.patreon.com/dot_o?fan_landing=true" target="_blank" rel="noopener noreferrer">
        <span className="d-block">CLICK HERE TO SUPPORT ME ON</span>
          <img src={patreon_logo} className="img-fluid" alt=""/>
        </a>
        <p>
          Hey what’s going on?
          I wanted to share some of the new things I’ve been working on for the DOT O brand!
        </p>
        <p>
          I have created a Patreon account!</p>
        <p>
          What’s Patreon you ask?
          It’s a platform that allows me to be more personal with the people who want to connect with me.
          It’s gives you access to behind the scene content called Dot O’s Ojos, unreleased music early, merch, and other personal content.
        </p>
        <p>
          My goal in this is to find my true fan base and support system! It will also allow me to be able to give insight and content that people will genuinely enjoy. It while allowing you to be apart of this journey with me. It’s gonna be dope af!
        </p>
        <p>
          It’s not for everyone, but I hope it’s for you!
        </p>
        <p>
          There are two different membership options that you can choose from; pending your interest! View the link below to see which one resonates with you. Thanks for taking the time to check it out hopefully I see you in the comment section on the Patreon account!
        </p>
        <p>
          As always Keep Drawing Out your Oneness
        </p>
        <p>-Dot O</p>

      </div>



    </div>
  );
}

export default Home;
