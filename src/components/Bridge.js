import React from "react";

const styles = {
  container: {
    position: "absolute",
    top: `80vh`,
    margin: `auto auto`,
    left: 0,
    right: 0,
    height: `70vh`,
    width: `50vw`,
    border: `2px solid yellow`,
    backgroundColor: "red",
    textAlign: "center"
  },
};
function Bridge() {
  return (
    <div style={styles.container}>
      <h1>hi</h1>
    </div>
  );
}

export default Bridge;
