import React from "react";
import coverPic from "../images/cover.jpg";
import Title from "./Title";
import "../css/cover.css";

function Cover() {
  return (
    <div id="cover-container" className="parallax-container">
      <div className="parallax">
        <img id="coverpic" src={coverPic} alt="henry with a ferris wheel"></img>
        <Title />
      </div>
    </div>
  );
}

export default Cover;
