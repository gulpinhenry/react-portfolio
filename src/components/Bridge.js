import React from "react";
import resume from "../assets/Resume-Henry.pdf";
import logo from "../images/logoblack.JPG";
import "../css/bridge.css";
const styles = {

  //   make mobile responsive to change height, width, text size
};

function Bridge() {
  return (
    <div id = "bridge-container">
      <img src={logo} alt="logo" id = "bridge-logo"></img>
      <h6 id = "bio">
        Aspiring full stack web developer utilizing an engineering philosophy to
        optimize servers and databases to increase website functionality.
        Currently attending UC Berkeley’s full stack extension program and
        pursuing a computer engineering degree at New York University, and
        hoping to apply my refined proficiency in Java, HTML/CSS, Javascript,
        and other languages/frameworks to create efficient yet robust
        applications. Co-authored materials science research papers published in
        leading journals, I have acquired experience to creatively problem solve
        and work efficiently in a collaborative environment. Excited to utilize
        my passion for web development as well as my MERN stack expertise to
        engineer effective web applications.
      </h6>
      <a href={resume} target="_blank" id = "resume-btn">
        Resume
      </a>
      {/* add some onclick feature idk */}
    </div>
  );
}

export default Bridge;
