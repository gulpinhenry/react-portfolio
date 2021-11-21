import React from "react";
import "../css/contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

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
    backgroundColor: "#2f394d",
    display: "flex",
    justifyContent: "space-evenly",
  },
};
function Contact() {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <div className="contact-el">
          <h1>hi</h1>
        </div>
        <form className="contact-el"></form>
        {/* add some onclick feature idk */}
      </div>
      <div id="icons">
        <ul>
          <li>
            <AiOutlineMail />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default Contact;
