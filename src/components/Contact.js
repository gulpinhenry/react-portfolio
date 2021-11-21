import React from "react";
import "../css/contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  container: {
    position: "relative",
    top: `-30vh`,
    margin: `auto auto`,
    left: 0,
    right: 0,
    height: `55vh`,
    width: `50vw`,
    border: `2px solid yellow`,
    textAlign: "justify",
    backgroundColor: "#111111",
    display: "flex",
    justifyContent: "space-evenly",
  },
};
function Contact() {
  return (
    <div style={styles.container}>
      <div className = "contact-el">
          <h1>hi</h1>
      </div>
      <form className = "contact-el"></form>
      =<div id = "icons">
          <ul>
          <FontAwesomeIcon icon={['fab', 'google']} />
          </ul>
      </div>
      {/* add some onclick feature idk */}
    </div>
  );
}
export default Contact;
