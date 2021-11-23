import React from "react";
import bg from "../images/purple.jpg";
import "../css/professional.css"


const languages = [
  ["Java", 80],
  ["HTML", 60],
  ["CSS", 55],
  ["JavaScript", 60],
  ["Python", 40],
];
// chart.js
function Professional() {
  const iterateLanguages = function () {
    let languageList = languages.map((language, index) => {
      let proficiency = "";
      for (let i = 0; i < Math.floor(language[1] / 2); i++) {
        proficiency += "*";
      }
      return (
        <li key={index}>
          <p id = "language-name">{language[0]}:</p>
          <p id = "lan">
             {proficiency} {language[1]}%
          </p>
        </li>
      );
    });
    return languageList;
  };

  return (
    <div className="parallax-container" id="professional">
      <div className="parallax" id="pad">
        <img
          src={bg}
          alt="henry with a ferris wheel"
          id = "cover-photo"
        ></img>
        <h2 className="header" id = "pro-title">Professional</h2>
        <h5 id = "pro-sub" className="header">Knowledge of Languages</h5>
        <ul id = "lan-list">{iterateLanguages()}</ul>
      </div>
    </div>
  );
}

export default Professional;
