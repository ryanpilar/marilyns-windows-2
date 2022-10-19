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
                            <NavLink to={"/"}>
                                Home
                            </NavLink>

                            {/* <Link
                                // className="nav-link"
                                activeClass="active"
                                to="/"
                                spy={true}
                                smooth={true}
                                offset={-35}
                                duration={500}
                            >
                                Home
                            </Link> */}
                            
                        </li>
                        <li>

                            <Link to={"#"}>About Me</Link>
                            <ul className="sub-menu v-sub-menu">
                                <li>
                                    <Link
                                        // className="nav-link"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-35}
                                        duration={500}
                                    >
                                        Quick Intro
                                    </Link>
                                </li>
                                <li><NavLink to={"/aboutus"}>The Full Story</NavLink></li>
                            </ul>
                            
                        </li>
                        <li>
                            <NavLink to={"/#services"}>Services</NavLink>
                            {/* <Link
                                // className="nav-link"
                                activeClass="active"
                                to="/#services"
                                spy={true}
                                smooth={true}
                                offset={-35}
                                duration={500}
                            >
                                Services
                            </Link> */}
                            
                        </li>
                        <li>
                            
                            <Link to={"#"}>My Work</Link>
                            <ul className="sub-menu v-sub-menu">
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
                                        Latest Projects
                                    </Link>
                                </li>
                                <li><NavLink to={"/work-grid"}>Gallery</NavLink></li>
                                {/* <li><NavLink to={"/work-masonary"}>Gallery</NavLink></li> */}
                                
                            </ul>
                            
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