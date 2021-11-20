import React from "react";

const styles = {
    nav: {
        backgroundColor: "black",
        height: 56,
    },
    logo:{
        maxHeight: 50,
    },
};

function Nav() {
  return (
    <fragment>
      <nav style= {styles.nav}>
        <div class="nav-wrapper">
          <a href="#" className="brand-logo">
            <img id = "logo" src = "./images/logoblack.JPG" alt = "henrykam logo" style= {styles.logo}></img>
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">Javascript</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>
    </fragment>
  );
}

export default Nav;
