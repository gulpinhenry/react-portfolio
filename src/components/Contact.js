import React from "react";
import "../css/contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact-cont">
      <div id="flex-cont">
        <div className="contact-el">
          <h4 id = "contact-title">Contact</h4>
          <h6>
            Based in the San Franscisco Bay Area and New York City. Open to any
            job offers and internships! Feel free to message me regarding any
            inquiries, or if you're just bored!
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
          <div className="row">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate"></input>
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate"></input>
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="input-field">
                  <input id="email" type="email" className="validate"></input>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="textarea1">Message</label>
                </div>
              </div>
            </div>
            <button id = "submit-btn" type="button">Submit</button>
            {/* onClick={handleFormSubmit} make handleform submit to prevent default, validate email and stuff */}
          </div>
        </form>
        {/* add some onclick feature idk */}
      </div>
      <ul id="icons">
        {/* add hover stuff */}
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
