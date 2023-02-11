import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";

class Navigation2 extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/custom.js");
  }

  render() {
    return (
      <>
        <ul className=" nav navbar-nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/aboutme">My Story</NavLink>
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>

          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>

          {/* <li><NavLink to="/#contact">Contact</NavLink></li> */}

          <li>
            {" "}
            <HashLink smooth className="" to="/services/#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </>
    );
  }
}

export default Navigation2;
