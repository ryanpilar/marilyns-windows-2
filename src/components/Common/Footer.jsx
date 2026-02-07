import React from "react";
import { Link } from "react-router-dom";
import logoDark from "../../images/logo-dark.png";

class Footer extends React.Component {
  
  constructor(props) {
    super(props);
    this.currentstate = {
      logo: logoDark,
    };
  }

  updateFooterLogo = (updatedlogo) => {
    this.currentstate.logo =
      updatedlogo && updatedlogo.default ? updatedlogo.default : updatedlogo;
  };

  render() {
    return (
      <>
        <footer className="site-footer bg-gray footer-light footer-wide">
          <div className="footer-bottom overlay-wraper">
            <div className="overlay-main bg-black" style={{ opacity: 0 }} />
            <div className="container p-t30">
              <div className="row">
                <div className="col-lg-4 col-md-3 wt-footer-bot-left">
                  <a href={"/"} aria-label="Home">
                    <img
                      src={this.currentstate.logo}
                      alt="marilyn's windows company logo"
                      width={140}
                      height={58}
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 text-center copyright-block p-t15">
                  <span className="copyrights-text">
                    © 2026 made with <i className='fa fa-heart heart-change' /> by{" "}
                    
                    <Link
                      to={{ pathname: "https://ryan-pilar.netlify.app/" }}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      ryanpilar
                    </Link>
                  </span>
                </div>
                <div className="col-lg-4 col-md-5 wt-footer-bot-right p-t15">
                  <ul className="copyrights-nav pull-right">
                    <li>
                      <Link to={"/terms"}>Terms &amp; Condition</Link>
                    </li>
                    <li>
                      <Link to={"/privacy"}>Privacy Policy</Link>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
