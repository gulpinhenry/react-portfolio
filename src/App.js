import React, { useEffect } from "react";
// First we import our Alert component from the components folder

import Nav from "./components/Nav";
import Cover from "./components/Cover";
import Main from "./components/Main";
import Bridge from "./components/Bridge";

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
    </div>
  );
}

export default App;
