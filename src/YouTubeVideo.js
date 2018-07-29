import React from "react";

function YoutubeVideo(props) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        src={props.url}
        title={props.url}
        className="embed-responsive-item"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}

export default YoutubeVideo;
