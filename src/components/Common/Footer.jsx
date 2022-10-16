import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = { logo: require('./../../images/logo-dark.png').default };
    }

    updateFooterLogo = (updatedlogo) => { this.currentstate.logo = updatedlogo.default; }

    render() {

        return (
            <>
                <footer className="site-footer bg-gray footer-light footer-wide">
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main bg-black" style={{ opacity: 0 }} />
                        <div className="container p-t30">
                            <div className="row">
                                <div className="col-lg-4 col-md-3 wt-footer-bot-left">
                                <NavLink to={"/"}><img src={require("./../../images/logo-dark.png").default} alt="" width={140} height={58} /></NavLink>
                                </div>
                                <div className="col-lg-4 col-md-4 text-center copyright-block p-t15">
                                    <span className="copyrights-text">© 2022 Designed By thememajestic.</span>
                                </div>
                                <div className="col-lg-4 col-md-5 wt-footer-bot-right p-t15">
                                    <ul className="copyrights-nav pull-right">
                                        <li><NavLink to={"/aboutus"}>Terms  &amp; Condition</NavLink></li>
                                        <li><NavLink to={"/aboutus"}>Privacy Policy</NavLink></li>
                                        <li><NavLink to={"/contactus"}>Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </>
        );
    };
};

export default Footer;