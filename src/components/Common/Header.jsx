import React from 'react';
import Navigation from '../Common/Navigation';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {logo: require('./../../images/logo-dark.png')};
    }

    state = { isSearchActive: false, isQuoteActive: false };

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });
    };

    handleQuoteToggle = () => {
        this.setState({ isQuoteActive: !this.state.isQuoteActive });
    };

    componentDidMount() {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

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

    }

    render() {
        const isSearchActive = this.state.isSearchActive;
        const isQuoteActive = this.state.isQuoteActive;

        return (
            <>
                <header className="site-header header-style-1  nav-wide mobile-responsive-navigation">
                    <div className="sticky-header main-bar-wraper">
                        <div className="main-bar bg-white p-t10">
                            <div className="container">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"./"}>
                                            <img src={this.state.logo.default} width={171} height={49} alt="Marilyn's Logo" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* ETRA Nav */}
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                    <NavLink to={"#"} className="vnav-btn" onClick={this.handleQuoteToggle}><span className="fa fa-bars" /></NavLink>
                                        
                                    </div>
                                </div>
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                    <NavLink to={"#"} className="site-search-btn" onClick={this.handleSearchToggle}> 
                                            <i className="fa fa-search" />
                                        </NavLink>
                                        
                                    </div>
                                </div>
                                <div className="extra-nav header-top-info">
                                    <div className="extra-cell">
                                        <div className="wt-topbar-right clearfix top-bar">
                                            <ul className="social-bx list-inline pull-right">
                                                <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com" className="fa fa-facebook" /></li>
                                                <li><a rel="noreferrer" target="_blank" href="https://twitter.com" className="fa fa-twitter" /></li>
                                                <li><a rel="noreferrer" target="_blank" href="https://in.linkedin.com" className="fa fa-linkedin" /></li>
                                                <li><a rel="noreferrer" target="_blank" href="https://rss.com" className="fa fa-rss" /></li>
                                                <li><a rel="noreferrer" target="_blank" href="https://www.youtube.com/" className="fa fa-youtube" /></li>
                                                <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/" className="fa fa-instagram" /></li>
                                            </ul>
                                            <ul className="list-unstyled list-inline e-p-bx pull-right">
                                                <li><i className="fa fa-envelope" />Info@gmail.com</li>
                                                <li><i className="fa fa-phone" />(654) 123-4567</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* ETRA Nav */}
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <div className="dropdown share-icon-btn2">
                                            <a href="#" className="site-search-btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-share-alt" /></a>
                                            <div className="dropdown-menu bg-white">
                                                <div className="top-bar">
                                                    <ul className="social-bx list-inline">
                                                        <li><a href="https://www.facebook.com" className="fa fa-facebook" /></li>
                                                        <li><a href="https://twitter.com" className="fa fa-twitter" /></li>
                                                        <li><a href="https://in.linkedin.com" className="fa fa-linkedin" /></li>
                                                        <li><a href="https://rss.com" className="fa fa-rss" /></li>
                                                        <li><a href="https://www.youtube.com/" className="fa fa-youtube" /></li>
                                                        <li><a href="https://www.instagram.com/" className="fa fa-instagram" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* SITE Search */}
                                <div id="search" className={isSearchActive ? "open" : null}>
                                    <span className="close" onClick={this.handleSearchToggle} />
                                    <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                        <div className="input-group">
                                            <input defaultValue="" name="q" type="search" placeholder="Type to search" />
                                            <span className="input-group-btn"><button type="button" className="search-btn"><i className="fa fa-search" /></button></span>
                                        </div>
                                    </form>
                                </div>
                                {/* STYLE SWITCHER  ======= */}
                                <div className="nav-sidebar" style={{ right: isQuoteActive ? '0px' : '-500px' }}>
                                    <NavLink to={"#"} className="vnav-close" onClick={this.handleQuoteToggle} />
                                    <div className="nav-siderbar-scroll">
                                        <div className="vertical-content-wrap">
                                            <div className="vertical-content-area vertical-centered">
                                                {/* MAIN Vav */}
                                                <div className="vertical-nav">
                                                <Navigation />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* STYLE SWITCHER END ==== */}
                            </div>
                        </div>
                    </div>
                </header>

            </>
        );
    };
};

export default Header;

