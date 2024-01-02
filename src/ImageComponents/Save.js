import React from "react";

import "./Save.css";
function Save() {
  return (
    <div className="save1">
      <div className="option">
        <h3 className="options">Options</h3>
      </div>
      <div className="element">
        <h3>Send</h3>
        <h3>Download Image</h3>
        <h3>Visit Site</h3>
        <h3>Copy link</h3>
        <h3>Hide Pin</h3>
        <div>
          <h3>
            Report Pin <br></br>
            <span className="para">
              This goes against pinterest's Community Guidelines
            </span>
          </h3>
        </div>
        <div className="pin">
          <p className="pin1">This pin is inspired by your recent acivity</p>
        </div>
      </div>
    </div>
  );
}

export default Save;
