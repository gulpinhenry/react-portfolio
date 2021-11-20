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
    <fragment>
      <nav style={styles.nav}>
        <div class="nav-wrapper">
          <a href="#" className="brand-logo">
            <img
              id="logo"
              src={logo}
              alt="henrykam logo"
              style={styles.logo}
            ></img>
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i class="material-icons">≡</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
              {/* add some onclick stuff? */}
            </li>
            <li>
              <a href="#">Contact</a>
              {/* add some onclick stuff? */}
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
          {/* add some onclick stuff? */}
        </li>
        <li>
          <a href="#">Contact</a>
          {/* add some onclick stuff? */}
        </li>
      </ul>
    </fragment>
  );
}

export default Nav;
