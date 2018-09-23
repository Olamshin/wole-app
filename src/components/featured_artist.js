import React from "react";
import {featured_artist} from "../editables/words";

function FeaturedArtist(props) {
  return (
    <div style={{ margin: "10px 50px" }}>
      <h1>Featured Artist</h1>
      <img
        src="featured_artist.jpg"
        className="img-responsive"
        alt="dot_o"
        style={{ height: "200px", margin: "15px" }}
      />
      {featured_artist}
    </div>
  );
}

export default FeaturedArtist;
