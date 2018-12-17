import React from "react";

function FeaturedArtist(props) {
  if(props.artist){
    var artist = props.artist[0].data;
    return (
      <div style={{ margin: "10px 50px" }}>
        <h1 className="text-center theme_color_red">Featured Artist</h1>
        <img
          src={artist.artist_profile_pic.url}
          className="img-responsive center-block"
          alt="dot_o"
          style={{ height: "200px"}}
        />
        <br/>
        {artist.artist_desc[0].text}
      </div>
    );
  }
  return (
    <div style={{ margin: "10px 50px" }}>
      Loading Artist...
    </div>
  );
}

export default FeaturedArtist;
