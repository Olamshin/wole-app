import React from "react";
import YoutubeVideo from "./YouTubeVideo";
import FeaturedArtist from "./featured_artist";
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
    <div className="row">
      {video}
      <hr />
      <div className="col-sm-6">
        <FeaturedArtist artist={props.artist} />
      </div>
      <div className="col-sm-6">
        <Show {...props} />
      </div>
    </div>
  );
}

export default Home;
