import React from "react";
import YoutubeVideo from "./YouTubeVideo";

function Videos(props) {
  return (
    <div>
      <YoutubeVideo url="https://www.youtube.com/embed/VdTu1NEnM4Q" />
      <YoutubeVideo url="https://www.youtube.com/embed/TUrkx0nYflo" />
      <YoutubeVideo url="https://www.youtube.com/embed/_sa-UXEJJPY" />
      <YoutubeVideo url="https://www.youtube.com/embed/ysoPjjQMmqw" />
    </div>
  );
}

export default Videos;
