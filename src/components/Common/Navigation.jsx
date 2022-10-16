import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };

    render() {
        return (
            <>
                    <ul className=" nav navbar-nav">
                        <li>
                            <Link
                                // className="nav-link"
                                activeClass="active"
                                to="top"
                                spy={true}
                                smooth={true}
                                offset={-35}
                                duration={500}
                            >
                                Home
                            </Link>
                            
                        </li>
                        <li>
                            <Link
                                // className="nav-link"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-35}
                                duration={500}
                            >
                                About Me
                            </Link>
                            
                        </li>
                        <li>
                            <Link
                                // className="nav-link"
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-35}
                                duration={500}
                            >
                                Services
                            </Link>
                            
                        </li>
                        <li>
                            <Link
                                // className="nav-link"
                                activeClass="active"
                                to="work"
                                spy={true}
                                smooth={true}
                                offset={-35}
                                duration={500}
                            >
                                My Work
                            </Link>
                            
                        </li>
                        {/* <li>
                            <NavLink to={"#"}>Blog</NavLink>
                            
                        </li> */}

                        <li className="submenu-direction">
                            <Link
                                // className="nav-link"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={500}
                            >
                                Contact
                            </Link>                           
                            {/* <NavLink to={"#contact"}>Contact</NavLink> */}
                            
                        </li>
                    </ul>
            </>
        );
    };
};

export default Navigation;