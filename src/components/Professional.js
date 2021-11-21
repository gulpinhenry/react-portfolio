import React from "react";
import bg from "../images/purple.jpg"
// find a longer and larger picture
const styles = {
  container: {
    textAlign: "center",
    minHeight: "160vh",
    // make container height mobile responsive for parallax
  },
  pad: {
    paddingTop: `50vh`,
  },
  coverPhoto: {
    objectFit: "cover",
    zIndex: -1
  },
  inFront: {
      zIndex: 5
  },
  lan:{
    textAlign: "left"
  },
  lanList:{
    margin: "0 20%",
    marginTop: "40px",
    border: "2px solid black",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: "12.5%"
  },
  lanLen:{
    width: "20%",
    border: "2px solid red"
    // how to make span take up a set amount of space
  }
};

const languages = [["Java", 80], ["HTML", 60], ["CSS", 55], ["JavaScript", 60], ["Python", 40]];

function Professional() {
  const iterateLanguages = function(){
    let languageList = languages.map((language)=>{
      let proficiency = "";
      for(let i = 0; i<Math.floor(language[1]/2); i++)
      {
        proficiency+= "*";
      }
      return <li><p style = {styles.lan}><span style = {styles.lanLen}>{language[0]}</span>: {proficiency} {language[1]}%</p></li>
    })
    return languageList;
  }

  return (

      <div
        className="parallax-container"
        style={styles.container}
      >
        {/* <div style={styles.pad}></div> */}
        <div className = "parallax" style = {styles.pad}>
        <img
          src={bg}
          alt="henry with a ferris wheel"
          style={styles.coverPhoto}
        ></img>
            <h2 className="header">Professional</h2>
            <h5 className="header">Knowledge of Languages</h5>
            {/* add languages here */}
            <ul style = {styles.lanList}>{iterateLanguages()}</ul>
        </div>
      </div>

  );
}

export default Professional;
