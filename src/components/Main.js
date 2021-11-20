import React from "react";
const styles = {
    container: {
        paddingTop: `50vh`
    }
}
function Main() {
  return (
    <div className="section white" style = {styles.container}>
      <div className="row container">
        <h2 className="header">Parallax</h2>
        <p className="grey-text text-darken-3 lighten-3">
          Parallax is an effect where the background content or image in this
          case, is moved at a different speed than the foreground content while
          scrolling.
        </p>
      </div>
    </div>
  );
}
export default Main;
