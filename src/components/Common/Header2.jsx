import React from 'react';
import Navigation2 from './Navigation2';
import { NavLink } from 'react-router-dom';

class Header2 extends React.Component {
    // isMenuActive
    constructor(props) {
        super(props);
        this.state = { logo: require('./../../images/logo-dark.png') };
    }

    state = { isMenuActive: false };



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
        const isMenuActive = this.state.isMenuActive;

        return (
            <>
                <header className={`${isMenuActive ? "active" : null} site-header header-style-1  nav-wide mobile-responsive-navigation`}>
                    <div id='top' className="sticky-header main-bar-wraper">
                        <div className="main-bar bg-white p-t10">
                            <div className="container">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <a href='/' aria-label="Back to Home"><img src={this.state.logo.default} width={221} height={70} alt="Marilyn's Logo" /></a>
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
                                            <a href="#" className="site-search-btn dropdown-toggle" data-toggle="dropdown" aria-label="My Social Media"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                                            <div className="dropdown-menu bg-white">
                                                <div className="top-bar">
                                                    <ul className="social-bx list-inline">
                                                        <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/MarilynsWindows/" aria-label="My Facebook"><i className="fa fa-facebook" /></a></li>
                                                        <li><a target="_blank" rel="noreferrer" href="https://twitter.com/marilynswindows" aria-label="My Twitter"><i className="fa fa-twitter" /></a></li>
                                                        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/marilynswindows/" aria-label="My Linkedin"><i className="fa fa-linkedin" /></a></li>
                                                        <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/marilynwindowsandinteriors/" aria-label="My Instagram"><i className="fa fa-instagram" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* MAIN Vav */}
                                <div className="header-nav navbar-collapse collapse">
                                    <Navigation2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


            </>
        );
    };
};

export default Header2;

