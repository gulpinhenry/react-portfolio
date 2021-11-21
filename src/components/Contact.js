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
  },
};
function Contact() {
  return (
    <div style={styles.container}>
      <div id="flex-cont">
        <div className="contact-el">
          <h4>Contact</h4>
          <h6>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </h6>
          <br></br>
          <blockquote id="email-text">
            <a href="mailto:h3nrykam@gmail.com" target="_blank">
              h3nrykam@gmail.com
            </a>
          </blockquote>
          <blockquote>
            <a href="https://github.com/gulpinhenry" target="_blank">
              github.com/gulpinhenry
            </a>
          </blockquote>
        </div>
        <form className="contact-el">
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input id="first_name" type="text" class="validate"></input>
                  <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                  <input id="last_name" type="text" class="validate"></input>
                  <label for="last_name">Last Name</label>
                </div>
              </div>
              <div class="row">
                <div class="col s12">
                  <div class="input-field">
                    <input id="email" type="email" class="validate"></input>
                    <label for="email">Email</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea
                        id="textarea1"
                        class="materialize-textarea"
                      ></textarea>
                      <label for="textarea1">Textarea</label>
                    </div>
                  </div>
                </form>
              </div>
              <button type="button">Submit</button>
              {/* onClick={handleFormSubmit} make handleform submit to prevent default, validate email and stuff */}
            </form>
          </div>
        </form>
        {/* add some onclick feature idk */}
      </div>
      <ul id="icons">
        <li>
          <a href="mailto:h3nrykam@gmail.com" target="_blank">
            <AiOutlineMail />
          </a>
        </li>
        <li>
          <a href="https://github.com/gulpinhenry" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kamhenry/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Contact;
