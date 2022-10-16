import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';

var bnrimg = require('./../../images/banner/4.jpg');

class Button extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                <Banner title="Inspired design for people" pagename="Buttons" bgimage={bnrimg.default}/>
                    
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            <div className="row">
                                <SidebarNav />
                                <div className="col-md-9 col-sm-9">
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Site Button</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <div className="section-content">
                                            <button className="m-b15 site-button m-r15 text-uppercase letter-spacing-2" type="button">Pramary button</button>
                                            <button className="m-b15 site-button-secondry text-uppercase letter-spacing-2" type="button">secondry button</button>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Border Button</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <div className="section-content">
                                            <a href="#" className="site-button outline  black button-app m-r15 m-b15">Download on the <strong className="text-center">Google play</strong></a>
                                            <a href="#" className="site-button outline  black button-app m-r15 m-b15">Download on the <strong className="text-center">App Store</strong></a>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Site button different size</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <button className="m-b15 site-button button-xl m-r15" type="button">Button Extra Large</button>
                                        <button className="m-b15 site-button button-lg m-r15" type="button">Button Large</button>
                                        <button className="m-b15 site-button m-r15" type="button">Button Medium</button>
                                        <button className="m-b15 site-button button-sm m-r15" type="button">Button Samll</button>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Bootstrap Button</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <button className="m-b15 btn btn-default" type="button">Default</button>
                                        <button className="m-b15 btn btn-primary" type="button">Primary</button>
                                        <button className="m-b15 btn btn-custom" type="button">Custom</button>
                                        <button className="m-b15 btn btn-success" type="button">Success</button>
                                        <button className="m-b15 btn btn-info" type="button">Info</button>
                                        <button className="m-b15 btn btn-warning" type="button">Warning</button>
                                        <button className="m-b15 btn btn-danger" type="button">Danger</button>
                                        <button className="m-b15 btn btn-link" type="button">Link</button>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Buttons with icons</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <button className="m-b15 site-button white m-r5" type="button"><span className="site-button-inr">white <i className="fa fa-user" /></span></button>
                                        <button className="m-b15 site-button orange m-r5" type="button"><span className="site-button-inr">Orange <i className="fa fa-key" /></span></button>
                                        <button className="m-b15 site-button red  m-r5" type="button"><span className="site-button-inr">Red <i className="fa fa-umbrella" /></span></button>
                                        <button className="m-b15 site-button brown m-r5" type="button"><span className="site-button-inr">Brown <i className="fa fa-random" /></span></button>
                                        <button className="m-b15 site-button yellow m-r5" type="button"><span className="site-button-inr">Yellow <i className="fa fa-image" /></span></button>
                                        <button className="m-b15 site-button purple m-r5" type="button"><span className="site-button-inr">Purpal <i className="fa fa-paint-brush" /></span></button>
                                        <button className="m-b15 site-button black m-r5" type="button"><span className="site-button-inr">Black <i className="fa fa-arrow-circle-o-right" /></span></button>
                                        <button className="m-b15 site-button gray m-r5" type="button"><span className="site-button-inr">Gray <i className="fa fa-dollar" /></span></button>
                                        <button className="m-b15 site-button pink m-r5" type="button"><span className="site-button-inr">Pink <i className="fa fa-envelope" /></span></button>
                                        <button className="m-b15 site-button blue m-r5" type="button"><span className="site-button-inr">Blue <i className="fa fa-gavel" /></span></button>
                                        <button className="m-b15 site-button green m-r5" type="button"><span className="site-button-inr">Green <i className="fa fa-joomla" /></span></button>
                                    </div>
                                    <div className="m-b0">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Outline Buttons</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <button className="m-b15 site-button outline white m-r15" type="button">white</button>
                                        <button className="m-b15 site-button outline orange m-r15" type="button">Orange</button>
                                        <button className="m-b15 site-button outline red m-r15" type="button">Red</button>
                                        <button className="m-b15 site-button outline brown m-r15" type="button">Brown</button>
                                        <button className="m-b15 site-button outline yellow m-r15" type="button">Yellow</button>
                                        <button className="m-b15 site-button outline purple m-r15" type="button">Purpal</button>
                                        <button className="m-b15 site-button outline black m-r15" type="button">Black</button>
                                        <button className="m-b15 site-button outline gray m-r15" type="button">Gray</button>
                                        <button className="m-b15 site-button outline pink m-r15" type="button">Pink</button>
                                        <button className="m-b15 site-button outline blue m-r15" type="button">Blue</button>
                                        <button className="m-b15 site-button outline green m-r15" type="button">Green</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default Button;