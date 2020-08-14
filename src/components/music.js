import React from "react";

function Music(props) {
  return (
    <div>
      <iframe
        src="https://open.spotify.com/embed/album/1kUsrHHtJ1sPq8gCXUS9w0" 
        width="300" 
        height="380" 
        frameBorder="0" 
        allowtransparency="true" 
        allow="encrypted-media"
        title="yee yee">
      </iframe>
      <iframe 
        src="https://open.spotify.com/embed/album/2yGFzlYoqpY6w35zFnxBxY"
        width="300" 
        height="380" 
        frameBorder="0" 
        allowtransparency="true" 
        allow="encrypted-media"
        title="Deliberate">
      </iframe>
      <iframe
        src="https://open.spotify.com/embed/album/6MjaVcWnQd9inlUzV3WCrN"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="the trance"
      />
      <iframe
        src="https://open.spotify.com/embed/album/068CkWL1216rhpxDynffc9"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="ogun"
      />
      <iframe
        width="600"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        title="fuck it"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/231697915&color=%23852f3f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
      <iframe
        width="600"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        title="sorry for the hol up"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/425788337&color=%23852f3f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
      <iframe
        width="600"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        title="dreams of a king"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/186620364&color=%23852f3f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </div>
  );
}

export default Music;
