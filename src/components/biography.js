import React from "react";
import { RichText } from "prismic-reactjs";
import pic from "../images/phone_focus.jpg";

function Biography(props) {
  if (props.words) {
    const document = props.words.data;
    return (
      <div>
        <img className="center img-fluid" src={pic} alt="wole" />
        <div className="words">{RichText.render(document.text)}</div>
      </div>
    );
  }
  return <p>Loading Bio....</p>;
}

export default Biography;
