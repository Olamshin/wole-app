import React from "react";

function YoutubeVideo(props) {
  return (
      <iframe className="embed-responsive-item embed-responsive-16by9"
        src={props.url}
        title={props.url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
  );
}

export default YoutubeVideo;
