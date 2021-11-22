import React from "react";
import logo from "../images/logoblack.JPG";

const styles = {
  nav: {
    backgroundColor: "black",
    height: 70,
  },
  logo: {
    maxHeight: 65,
  },
};

function Nav() {
  return (
    <React.Fragment>
      <nav style={styles.nav}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            <img
              id="logo"
              src={logo}
              alt="henrykam logo"
              style={styles.logo}
            ></img>
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">≡</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
              {/* add some onclick stuff for slow scrolling? */}
            </li>
            <li>
              <a href="#flex-cont">Contact</a>
              {/* add some onclick stuff? */}
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
          {/* add some onclick stuff? */}
        </li>
        <li>
          <a href="#flex-cont">Contact</a>
          {/* add some onclick stuff? */}
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Nav;
