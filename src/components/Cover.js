import React from "react";
import coverPic from "../images/cover.jpg";
import Title from "./Title"
const styles = {
  container: {
    height: `100vh`,
    textAlign: "center"
  },
  coverPhoto: {
    objectFit: "cover",
    zIndex: -1
  },
};
function Cover() {
  return (
    <div className="parallax-container" style={styles.container}>
      <div className="parallax">
      
        <img
          src={coverPic}
          alt="henry with a ferris wheel"
          style={styles.coverPhoto}
        ></img>
        <Title />

        
      </div>
    </div>
  );
}

export default Cover;
