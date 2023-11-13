import React from "react";
import "./component_css/NavBar.css";
import navLogo from "../images/planet-ayurveda-brown2.svg";



export default function NavBar() {
    return(
    <div className="navbar">
        <button className="contactNav"><a >contact</a></button>
        <a className="homeNav"><img src={navLogo} alt="" /></a>
        <button className="aboutNav" ><a >about</a></button>
    </div>
    )
}   