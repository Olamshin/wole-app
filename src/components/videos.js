import React from "react";
import YoutubeVideo from "./YouTubeVideo";

function Videos(props) {
  var video_objects = (<p>Loading Videos...</p>)
  if(props.video_items)
  {
    //sort the videos by order property
    var videos = props.video_items.sort((a,b)=>{return a.data.order - b.data.order})
    video_objects = videos.map(function(video, index){
      return (<YoutubeVideo url={video.data.youtube_link.url} key={video.id}/>)
    })
  }
  return (
    <div>
      {video_objects}
    </div>
  );
}

export default Videos;
