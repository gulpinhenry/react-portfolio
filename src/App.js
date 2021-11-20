import React, { useEffect } from "react";
// First we import our Alert component from the components folder
import Alert from "./components/Alert";
import Nav from "./components/Nav";

// import Materialize

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

// We create a couple variables which contain strings
const message = "Invalid user id or password";
const alertType = "danger";

// We then return Alert, we pass it a prop, "message" set to the value of our message variable
// We also pass a type prop to the component set to the value of "alertType"
function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div>
      <Nav />
      <Alert type={alertType} message={message} />;
    </div>
  );
}

export default App;
