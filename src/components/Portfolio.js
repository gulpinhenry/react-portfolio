
import React from "react";
import art from "../images/21rP.gif";
import moonbase from "../images/sleep-moon.gif";
import workout from "../images/workout.gif";
const styles = {
  ht: {
    height: "80vh",
    paddingTop: "80px",
    textAlign: "center"
  },
  subtitle: {
    paddingBottom: "30px"
  },
  list: {
    display: "flex",
    justifyContent: "center"
  },
  hover: {
    // onMouse Over?
  }
};
function Portfolio() {
  return (
    <div id="portfolio" className="section white" style={styles.ht}>
      <div className="row container">
        <h2 className="header">Portfolio</h2>
        <a href="https://github.com/gulpinhenry" target="_blank" rel="noreferrer">
          <h5 style={styles.subtitle} className="grey-text text-darken-3 lighten-3">
            My Latest Work. See More
          </h5>
        </a>
        <ul style = {styles.list}>
          <li>
            <a
              href="https://argibson02.github.io/3d-gallery-walk/"
              target="_blank" rel="noreferrer"
            >
              <img
                style = {styles.hover}
                width="200"
                height = "200"
                src={art}
                alt="painting gif"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://guarded-chamber-67294.herokuapp.com/"
              target="_blank" rel="noreferrer"
            >
              <img
                style = {styles.hover}
                width="200"
                height = "200"
                src={moonbase}
                alt="moonbase gif"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://workout-tracker-henrykam.herokuapp.com/?id=6193841fe9e42e14e8abf101"
              target="_blank" rel="noreferrer"
            >
              <img
                style = {styles.hover}
                width="200"
                height = "200"
                src={workout}
                alt="workout gif"
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Portfolio;
