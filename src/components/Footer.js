import React from "react";
import "../css/footer.css";
import logo from "../images/logoblack.JPG";

function Footer(){
    return (
        <footer>
            <img src = {logo} width="300"></img>
            <h6>© 2021 by Henry Kam.</h6>
        </footer>
    );
}
export default Footer;