import React from "react";
import words_bio from "../editables/words";

function Biography(props) {
  return (
    <div>
      <div style={{ margin: "0 30px" }}>
        <img className="center img-responsive" src="wole.jpeg" alt="wole" />
        {words_bio}
      </div>
    </div>
  );
}

export default Biography;
