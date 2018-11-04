import React from "react";
import YoutubeVideo from "./YouTubeVideo";
import FeaturedArtist from "./featured_artist";
import Show from "./show";

function Home(props) {
  return (
    <div className="row">
      <YoutubeVideo url="https://www.youtube.com/embed/VdTu1NEnM4Q" />
      <hr />
      <div className="col-sm-6">
        <FeaturedArtist />
      </div>
      <div className="col-sm-6">
        <Show {...props}/>
      </div>
    </div>
  );
}

export default Home;
