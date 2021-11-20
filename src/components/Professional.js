import React from "react";
import bg from "../images/17133733.jpg"
const styles = {
  container: {
    textAlign: "center",
    minHeight: "160vh",
  },
  pad: {
    paddingTop: `50vh`,
  },
  coverPhoto: {
    objectFit: "cover",
    zIndex: -1
  },
  inFront: {
      zIndex: 5
  },
};

function Professional() {
  return (
    <fragment>
      <div
        className="parallax-container"
        style={styles.container}
      >
        {/* <div style={styles.pad}></div> */}
        <div className = "parallax" style = {styles.pad}>
        <img
          src={bg}
          alt="henry with a ferris wheel"
          style={styles.coverPhoto}
        ></img>
            <h2 className="header">Professional</h2>
            <h5 className="header">Knowledge of Languages and Frameworks</h5>
            {/* add languages here */}
        </div>
      </div>
    </fragment>
  );
}

export default Professional;
