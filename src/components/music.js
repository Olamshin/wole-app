import React from "react";

function Music(props) {

  var music_items = ["https://open.spotify.com/embed/album/1kUsrHHtJ1sPq8gCXUS9w0",
  "https://open.spotify.com/embed/album/2yGFzlYoqpY6w35zFnxBxY",
  "https://open.spotify.com/embed/album/6MjaVcWnQd9inlUzV3WCrN",
  "https://open.spotify.com/embed/album/068CkWL1216rhpxDynffc9"
]
  var music = music_items.map((m,i)=>{
    const title = `music${i}`
      return (
        <iframe
        title={title}
        src={m}
        width="300" 
        height="380" 
        frameBorder="0" 
        allowtransparency="true"
        className="music"
        allow="encrypted-media">
      </iframe>
      )
  })
  
  return (
    <div className="music-container">
      {music}
    </div>
  );
}

export default Music;
