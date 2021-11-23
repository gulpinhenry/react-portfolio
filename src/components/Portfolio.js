
import React from "react";
import art from "../images/21rP.gif";
import moonbase from "../images/sleep-moon.gif";
import workout from "../images/workout.gif";
import "../css/portfolio.css"

function Portfolio() {
  // add hover features
  return (
    <div id="portfolio" className="section">
      <div className="row container">
        <h2 id = "portfolio-title" className="header">Portfolio</h2>
        <a href="https://github.com/gulpinhenry" target="_blank" rel="noreferrer">
          <h5 id = "portfolio-subtitle" className="grey-text text-darken-3 lighten-3">
            My Latest Work. See More
          </h5>
        </a>
        <ul id = "portfolio-list">
          <li>
            <a
              href="https://argibson02.github.io/3d-gallery-walk/"
              target="_blank" rel="noreferrer"
            >
              <img
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
