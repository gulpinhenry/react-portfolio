import React from "react";
import resume from "../assets/Resume-Henry.pdf";
import logo from "../images/logoblack.JPG";

const styles = {
  container: {
    position: "absolute",
    top: `80vh`,
    margin: `auto auto`,
    left: 0,
    right: 0,
    height: `70vh`,
    width: `40vw`,
    border: `2px solid yellow`,
    textAlign: "justify",
    backgroundColor: "#111111",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  logo: {
    width: 200,
    margin: "0 auto",
  },
  bio: {
    color: "white",
    margin: "0 10%",
    fontSize: "0.94vw",
    lineHeight: "200%"
  },
  btn: {
    margin: "0 35%",
    height: "40px",
    background: "transparent",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    border: "2px solid green",
    marginBottom: "20px"
  },
  //   make mobile responsive to change height, width, text size
};
function Bridge() {
  return (
    <div style={styles.container}>
      <img src={logo} alt="logo" style={styles.logo}></img>
      <h6 style={styles.bio}>
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
      <a href={resume} target="_blank" style={styles.btn}>
        Download Resume
      </a>
      {/* add some onclick feature idk */}
    </div>
  );
}

export default Bridge;
