import React from "react";
import logo from "../images/logoblack.JPG";
import "../css/nav.css"

function Nav() {
  return (
    <React.Fragment>
      <nav>
        <div className="nav-wrapper" id = "nav-cont">
          <a href="#" className="brand-logo">
            <img
              id="logo-nav"
              src={logo}
              alt="henrykam logo"
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
