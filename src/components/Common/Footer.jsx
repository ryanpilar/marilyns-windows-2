import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.currentstate = {
      logo: require("./../../images/logo-dark.png").default,
    };
  }

  updateFooterLogo = (updatedlogo) => {
    this.currentstate.logo = updatedlogo.default;
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
                  <a href={"/"} aria-label="Back to Home">
                    <img
                      src={require("./../../images/logo-dark.png").default}
                      alt=""
                      width={140}
                      height={58}
                    />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 text-center copyright-block p-t15">
                  <span className="copyrights-text">
                    © 2022 built by{" "}
                    <Link
                      to={{ pathname: "https://ryan-pilar.netlify.app/" }}
                      target="_blank"
                      rel="noreferrer"
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
