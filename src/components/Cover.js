import React from "react";
import coverPic from "../images/cover.jpg";
const styles = {
  container: {
    height: `100vh`,
  },
  coverPhoto: {
    objectFit: "cover",
    zIndex: -1
  },
  inFront: {
      zIndex: 5
  },
  green: {
      color: "green"
  }
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
        <h1 style = {styles.inFront} style = {styles.green}>Henry Kam</h1>
        <h3 style = {styles.inFront} style = {styles.green}>Student. Scientist. Researcher.</h3>
      </div>
    </div>
  );
}

export default Cover;
