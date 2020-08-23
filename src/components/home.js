import React from "react";
import YoutubeVideo from "./YouTubeVideo";
import Show from "./show";

function Home(props) {
  var video;
  if (props.home_video) {
    var home_video = props.home_video[0].data
    video = <YoutubeVideo url={home_video.youtube_link.url} />
  } else {
    video = (<p>Loading Home Video...</p>)
  }
  return (
    <div className="row" style={{
      flexDirection: "column", height: "100%"
    }}>
      <div className="home-video-container">
        <div className="embed-responsive" style={{ width: "100%", height: "450px", margin: "10px" }}>
          {video}
        </div>
      </div>
    </div>
  );
}

export default Home;
