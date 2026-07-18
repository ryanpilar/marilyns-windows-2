import React from "react";
import Navigation from "./Navigation";
import { NavLink } from 'react-router-dom';
import Icon from "./Icon";
import logoDark from "../../images/logo-dark.webp";


class Header3 extends React.Component {
  isMenuActive;

  constructor(props) {
    super(props);
    this.state = { logo: logoDark };
  }

  state = { isMenuActive: false };

  // Social Media Men Toggle
  handleMenuToggle = () => {
    this.setState({ isMenuActive: !this.state.isMenuActive });
  };
  componentDidMount() {
    window.updateTopMostParent = (logopath) => {
      const resolvedLogo =
        logopath && logopath.default ? logopath.default : logopath;
      this.setState({ logo: resolvedLogo });
    };
  }

  render() {

    const isMenuActive = this.state.isMenuActive;

    return (
      <>
        <header
          className={`${
            isMenuActive ? "active" : null
          } site-header site-header-sticky header-style-1 nav-wide mobile-responsive-navigation`}
        >
          <div id="top" className="sticky-header main-bar-wraper">
            <div className="main-bar bg-white p-t10">
              <div className="container">
                <div className="logo-header">
                  <div className="logo-header-inner logo-header-one">
                  <NavLink to={"/"} aria-label="Home">
                  <img
                        src={this.state.logo}
                        width={320}
                        height={123}
                        alt="Marilyn's Logo"
                      />
                  </NavLink>

                  </div>
                </div>
                
                {/* NAV Toggle Button */}
                <button
                  onClick={this.handleMenuToggle}
                  id="mobile-responsive-drawer"
                  data-target=".header-nav"
                  data-toggle="collapse"
                  type="button"
                  className="navbar-toggle collapsed"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar icon-bar-first" />
                  <span className="icon-bar icon-bar-two" />
                  <span className="icon-bar icon-bar-three" />
                </button>

                {/* ETRA Nav */}
                <div className="extra-nav">
                  <div className="extra-cell"></div>
                </div>
                {/* ETRA Nav */}

                <div className="extra-nav">
                  <div className="extra-cell">
                    <div className="dropdown share-icon-btn">
                      <button
                        type="button"
                        className="site-search-btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-label="Toggle My Social Media"
                      >
                        <Icon name="share-alt" />
                      </button>
                      <div className="dropdown-menu bg-white">
                        <div className="top-bar">
                          <ul className="social-bx list-inline">
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://www.facebook.com/marilynswindows/"
                                aria-label="My Facebook"
                              >
                                <Icon name="facebook" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://www.instagram.com/marilynwindowsandinteriors/"
                                aria-label="My Instagram"
                              >
                                <Icon name="instagram" />
                              </a>
                            </li>
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
  }
}

export default Header3;
