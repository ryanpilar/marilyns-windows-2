import React from 'react';
// import { NavLink } from 'react-router-dom';
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
                    
                        <li><a href="/">Home</a></li>
                        
                        <li><a href="/aboutme">My Story</a></li>

                        <li><a href="/services">Services</a></li>

                        <li><a href="/gallery">Gallery</a></li>

                        <li><a href="/blogs">Blog</a></li>

                        <li><a href="/#contact">Contact</a></li>
                        
                    </ul>
            </>
        );
    };
};

export default Navigation;