import React from "react";

function YoutubeVideo(props) {
  return (
    <div style={{"margin-left":"30px"}} className="embed-responsive embed-responsive-16by9">
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
