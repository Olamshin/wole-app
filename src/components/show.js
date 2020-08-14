import React from "react";

function Show(props) {
  if (props.show_img) {
    return (
      <div id="latest_event">
        <a
          href={props.show_link}
          className="theme_color_red"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h1 className="text-center">Latest Event</h1>
          <img
            src={props.show_img[0].data.image.url}
            className="img-fluid center-block"
            alt="dot_o"
            style={{ height: "500px" }}
          />
        </a>
      </div>
    );
  }

  return <p>Loading Image...</p>;
}

export default Show;
