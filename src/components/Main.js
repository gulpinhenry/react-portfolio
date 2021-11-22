import React from "react";

import Professional from "./Professional";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";


const styles = {
  bg :{
    backgroundColor: "transparent",
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
