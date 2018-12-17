import React from "react";

function Show(props) {
  if (props.show_img) {
    return (
        <div>
          <h1 className="text-center theme_color_red">Latest Event</h1>
          <img
            src={props.show_img[0].data.image.url}
            className="img-responsive center-block"
            alt="dot_o"
            style={{ height: "500px" }}
          />
        </div>
      );
  }

  
  return (<p>Loading Image...</p>)
}

export default Show;
