import React, { useEffect } from "react";

import Nav from "./components/Nav";
import Cover from "./components/Cover";
import Main from "./components/Main";
import Bridge from "./components/Bridge";
import Footer from "./components/Footer"

// import Materialize

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    
    <div>
      <Nav />
      <Cover />
      <Bridge />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
