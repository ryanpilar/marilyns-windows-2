import React from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

class Header3 extends React.Component {
    isMenuActive
    constructor(props) {
        super(props);
        this.state = { logo: require('./../../images/logo-dark.png') };
    }

    state = { isSearchActive: false, isMenuActive: false };



    handleMenuToggle = () => {
        this.setState({ isMenuActive: !this.state.isMenuActive });
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

        window.updateTopMostParent = (logopath) => {
            this.setState({ logo: logopath });
        };
    }

    render() {
        // const isSearchActive = this.state.isSearchActive;
        const isMenuActive = this.state.isMenuActive;

        return (
            <>
                <header className={`${isMenuActive ? "active" : null} site-header header-style-1  nav-wide mobile-responsive-navigation`}>
                    <div id='top' className="sticky-header main-bar-wraper">
                        <div className="main-bar bg-white p-t10">
                            <div className="container">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"./"}>
                                            <img src={this.state.logo.default} width={171} height={49} alt="Marilyn's Logo" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button onClick={this.handleMenuToggle} id="mobile-responsive-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />
                                </button>
                                {/* ETRA Nav */}
                                <div className="extra-nav">
                                    <div className="extra-cell">


                                    </div>
                                </div>


                                {/* ETRA Nav */}
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <div className="dropdown share-icon-btn">
                                            <a href="#" className="site-search-btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-share-alt" /></a>
                                            <div className="dropdown-menu bg-white">
                                                <div className="top-bar">
                                                    <ul className="social-bx list-inline">
                                                        <li><a target="_blank" href="https://www.facebook.com/MarilynsWindows/" className="fa fa-facebook" /></li>
                                                        <li><a target="_blank" href="https://twitter.com/marilynswindows" className="fa fa-twitter" /></li>
                                                        <li><a target="_blank" href="https://www.linkedin.com/in/marilynswindows/" className="fa fa-linkedin" /></li>
                                                        <li><a target="_blank" href="https://www.instagram.com/marilynwindowsandinteriors/" className="fa fa-instagram" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* MAIN Vav */}
                                <div className="header-nav navbar-collapse collapse">
                                    <Navigation />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


            </>
        );
    };
};

export default Header3;

