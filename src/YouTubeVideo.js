import React from "react";

function YoutubeVideo(props) {
  return (
    <iframe
      src={props.url}
      title={props.url}
      width="420"
      height="315"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
}
//<iframe  src="https://www.youtube.com/embed/TUrkx0nYflo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
export default YoutubeVideo;
