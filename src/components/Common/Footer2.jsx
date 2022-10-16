import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer2 extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = { logo: require('./../../images/logo-light.png').default };
    }

    updateFooterLogo = (updatedlogo) => { this.currentstate.logo = updatedlogo.default; }

    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
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
 
        loadScript('./assets/js/app.js');
        loadScript('./assets/js/particles.js');
      
    };
    
    render() {

        return (
            <>
                <footer className="site-footer   footer-dark footer-wide relative overflow-hide">
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main bg-black" style={{ opacity: 0 }} />
                        <div className="container p-t30">
                            <div className="row">
                                <div className="col-md-4 wt-footer-bot-left">
                                <NavLink to={"/"}><img src={require("./../../images/logo-light.png").default} width={140} height={58} alt="" /></NavLink>
                                </div>
                                <div className="col-md-4 text-center copyright-block p-t15">
                                    <span className="copyrights-text">© 2022 Marilyn's Windows & Interiors. Designed By ryanpilar.</span>
                                </div>
                                <div className="col-md-4 wt-footer-bot-right p-t15">
                                    <ul className="copyrights-nav pull-right">
                                        <li><NavLink to={"/aboutus"}>Terms  &amp; Condition</NavLink></li>
                                        <li><NavLink to={"/aboutus"}>Privacy Policy</NavLink></li>
                                        <li><NavLink to={"/contactus"}>Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="particles-dark" className="particles-canvas" />
                </footer>


            </>
        );
    };
};

export default Footer2;