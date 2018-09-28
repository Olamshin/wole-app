import React from "react";
import YoutubeVideo from "./YouTubeVideo";
import FeaturedArtist from "./featured_artist";

function Home(props) {
  return (
    <div>
      <YoutubeVideo url="https://www.youtube.com/embed/VdTu1NEnM4Q" />
      <hr/>
      <FeaturedArtist />
    </div>
  );
}

export default Home; 
