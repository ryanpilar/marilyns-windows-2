import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer3 extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = { logo: require('./../../images/logo-dark.png').default };
    }

    updateFooterLogo = (updatedlogo) => { this.currentstate.logo = updatedlogo.default; }

    render() {

        return (
            <>
                <footer className="site-footer footer-large footer-light footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                        <NavLink to={"/"}><img src={require("./../../images/logo-dark.png").default} alt="" width={230} height={67} /></NavLink>
                                            
                                        </div>
                                        <p>Typefaces and layouts, and in content of dummy text is nonsensical.typefaces of dummy text is appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.
                                        </p>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget recent-posts-entry">
                                        <h4 className="widget-title  text-uppercase">Recent Posts</h4>
                                        <div className="section-content">
                                            <div className="widget-post-bx">
                                                <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src={require("./../../images/blog/recent-blog/pic1.jpg").default} alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-header">
                                                            <h6 className="post-title"><NavLink to={"/post-right-sidebar"}>Lorem ipsum dolor sit amet</NavLink></h6>
                                                        </div>
                                                        <div className="wt-post-meta">
                                                            <ul>
                                                                <li className="post-author">25 Dec</li>
                                                                <li className="post-comment"> 20 comment</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src={require("./../../images/blog/recent-blog/pic2.jpg").default} alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-right-sidebar"}>Debitis nihil placeat, illum est </NavLink></h6>
                                                        </div>
                                                        <div className="wt-post-meta">
                                                            <ul>
                                                                <li className="post-author">25 Dec</li>
                                                                <li className="post-comment"> 15 comment</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Useful links</h4>
                                        <ul>
                                            <li><NavLink to={"/aboutus"}>About</NavLink></li>
                                            <li><NavLink to={"/post-gallery"}>Gallery</NavLink></li>
                                            <li><NavLink to={"/news-grid"}>News</NavLink></li>
                                            <li><NavLink to={"/work-masonary"}>Work</NavLink></li>
                                            <li><NavLink to={"/project-detail"}>Project</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Contact us</NavLink></li>
                                            <li><NavLink to={"/work-masonary"}>Site Map</NavLink></li>
                                            <li><NavLink to={"/project-detail"}>Career</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Help </NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* TAGS */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="tag-small widget  widget_tag_cloud m-b20">
                                        <h4 className="widget-title">Tags</h4>
                                        <div className="tagcloud">
                                        <NavLink to={"/aboutus"}>Trouble </NavLink>
                                            <NavLink to={"/aboutus"}>Programmer </NavLink>
                                            <NavLink to={"/aboutus"}>Never </NavLink>
                                            <NavLink to={"/aboutus"}>Tell </NavLink>
                                            <NavLink to={"/aboutus"}>Doing </NavLink>
                                            <NavLink to={"/aboutus"}>Person </NavLink>
                                            <NavLink to={"/aboutus"}>Between  </NavLink>
                                            <NavLink to={"/aboutus"}>Macho </NavLink>
                                            <NavLink to={"/aboutus"}>Gets  </NavLink>
                                            <NavLink to={"/aboutus"}>Inventors </NavLink>
                                            <NavLink to={"/aboutus"}>Abilities </NavLink>
                                            <NavLink to={"/aboutus"}>Fault  </NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="wt-footer-bot-left">
                                    <span className="copyrights-text">© 2022 Your Company. Designed By thememajestic.</span>
                                </div>
                                <div className="wt-footer-bot-right">
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

export default Footer3;