import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Navigation2 extends React.Component {
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
