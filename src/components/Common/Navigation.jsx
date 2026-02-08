import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Navigation extends React.Component {
  render() {
    return (
      <ul className=" nav navbar-nav ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/aboutme">My Story</NavLink>
          </li>

          <li>
            <NavLink to={"/services"}>Services</NavLink>
            <ul className="sub-menu v-sub-menu">
              <li>
                <HashLink smooth to={"/services/#overview"}>Overview</HashLink>
              </li>
              <li>
                <HashLink smooth to={"/services/#locations"}>Location</HashLink>
              </li>
              <li>
                <HashLink smooth to={"/services/#selectServices"}>Select Services</HashLink>
              </li>
              <li>
                <HashLink smooth to={"/services/#designProcess"}>The Design Process</HashLink>
              </li>
              <li>
                <HashLink smooth to={"/services/#faq"}>FAQ</HashLink>
              </li>
            </ul>
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
    );
  }
}

export default Navigation;
