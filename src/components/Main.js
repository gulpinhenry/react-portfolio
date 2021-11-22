import React from "react";

import Professional from "./Professional";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";
import reactDom from "react-dom";

const styles = {
  bg :{
    //backgroundColor: "yellow",
    zIndex: -5
//  how to make experience show up above
  }
}
function Main() {
  return (
    <div style = {styles.bg}>
      <Professional />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}
export default Main;
