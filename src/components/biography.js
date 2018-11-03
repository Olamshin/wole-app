import React from "react";
import { RichText } from "prismic-reactjs";

function Biography(props) {
  if (props.words) {
    const document = props.words.data;
    return (
      <div>
        <div style={{ margin: "0 30px" }}>
          <img className="center img-responsive" src="wole.jpeg" alt="wole" />
          <div className="words">{RichText.render(document.text)}</div>
        </div>
      </div>
    );
  }
  return <p>Loading Bio....</p>;
}

export default Biography;
