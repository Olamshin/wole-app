import React from "react";
import {featured_artist} from "../editables/words";

function FeaturedArtist(props) {
  return (
    <div style={{ margin: "10px 50px" }}>
      <h1 className="text-center theme_color_red">Featured Artist</h1>
      <img
        src="featured_artist.jpg"
        className="img-responsive center-block"
        alt="dot_o"
        style={{ height: "200px"}}
      />
      <br/>
      {featured_artist}
    </div>
  );
}

export default FeaturedArtist;
