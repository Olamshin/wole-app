import React from "react";
import words_bio from "../editables/words";

function Biography(props) {
  return (
    <div>
      <img className="center" src="wole.jpeg" alt="wole" height="300px"/>
      <p className="words">{words_bio}</p>
    </div>
  );
}

export default Biography;
