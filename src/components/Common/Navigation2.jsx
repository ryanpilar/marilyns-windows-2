import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { Link } from "react-scroll";

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
                        </li>

                        <li>
                            <Link to={"#"}>About Me</Link>
                            <ul className="sub-menu v-sub-menu">
                                <li><a href="/#about">Quick Intro</a></li>
                                <li><a href="/aboutus">The Full Story</a></li>
                            </ul>
                        </li>

                        <li><a href="/#services">Services</a></li>

                        <li>
                            <Link to={"#"}>My Work</Link>
                            <ul className="sub-menu v-sub-menu">
                                <li><a href="/#work">Latest Projects</a></li>
                                <li><a href="/work-grid">Gallery</a></li>
                            </ul>
                        </li>
                        
                        <li><NavLink to={"/blogs"}>Blog</NavLink></li>

                        <li><a href="/#contact">Contact</a></li>

                    </ul>
            </>
        );
    };
};

export default Navigation;