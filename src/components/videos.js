import React from "react";
import YoutubeVideo from "./YouTubeVideo";

function Videos(props) {
  var video_objects = (<p>Loading Videos...</p>)
  if(props.video_items)
  {
    //sort the videos by order property
    var videos = props.video_items.sort((a,b)=>{return a.data.order - b.data.order})
    video_objects = videos.map(function(video, index){
      return (
      <div key={video.id} className="video embed-responsive embed-responsive-16by9">
        <YoutubeVideo url={video.data.youtube_link.url}/>
      </div> )
    })
  }
  return (
    <div className="video-container">
      {video_objects}
    </div>
  );
}

export default Videos;
