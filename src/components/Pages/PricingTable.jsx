import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';

var bnrimg = require('./../../images/banner/6.jpg');

var bgimg1 = require('./../../images/our-work/pic1.jpg');
var bgimg2 = require('./../../images/our-work/pic2.jpg');
var bgimg3 = require('./../../images/our-work/pic3.jpg');

class PricingTable extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                <Banner title="Capitalizing on the unique qualities of each place." pagename="Pricing table" bgimage={bnrimg.default}/>
                    
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
                                            <h3>Pricing Table One</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE START */}
                                        {/* PRICING STYLE-3 COLUMNS 3 WITH GAP AND BACKGROUND */}
                                        <div className="section-content">
                                            <div className="pricingtable-row m-b30">
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b40">
                                                        <div className="pricingtable-wrapper pricing-table-style-4">
                                                            <div className="pricingtable-inner bg-gray">
                                                                <div className="overlay-wraper pricingtable-inner-overlay bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg1.default + ')' }}>
                                                                    <div className="pricingtable-title">
                                                                        <h3>Unlimited</h3>
                                                                    </div>
                                                                    <div className="pricingtable-price">
                                                                        <span className="pricingtable-bx">$29</span>
                                                                        <span className="pricingtable-type">per month</span>
                                                                    </div>
                                                                    <div className="overlay-main bg-black opacity-07" />
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check" />Building Design </li>
                                                                    <li><i className="fa fa-check" />Personal support </li>
                                                                    <li><i className="fa fa-check" />Map your domain</li>
                                                                    <li><i className="fa fa-check" />Create unlimited blogs</li>
                                                                    <li><i className="fa fa-check" />Unlimited storage</li>
                                                                </ul>
                                                                <div className="pricingtable-footer">
                                                                    <NavLink to={"#"} className="site-button text-uppercase letter-spacing-2">Buy Now</NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b40">
                                                        <div className="pricingtable-wrapper pricing-table-style-4">
                                                            <div className="pricingtable-inner bg-gray">
                                                                <div className="overlay-wraper pricingtable-inner-overlay bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg2.default + ')' }}>
                                                                    <div className="pricingtable-title">
                                                                        <h3>Premium</h3>
                                                                    </div>
                                                                    <div className="pricingtable-price">
                                                                        <span className="pricingtable-bx">$49</span>
                                                                        <span className="pricingtable-type">per month</span>
                                                                    </div>
                                                                    <div className="overlay-main bg-black opacity-07" />
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check" />Building Design </li>
                                                                    <li><i className="fa fa-check" />Personal support </li>
                                                                    <li><i className="fa fa-check" />Map your domain</li>
                                                                    <li><i className="fa fa-check" />Create unlimited blogs</li>
                                                                    <li><i className="fa fa-check" />Unlimited storage</li>
                                                                </ul>
                                                                <div className="pricingtable-footer">
                                                                    <NavLink to={"#"} className="site-button text-uppercase letter-spacing-2">Buy Now</NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b40">
                                                        <div className="pricingtable-wrapper pricing-table-style-4">
                                                            <div className="pricingtable-inner bg-gray">
                                                                <div className="overlay-wraper pricingtable-inner-overlay bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg3.default + ')' }}>
                                                                    <div className="pricingtable-title">
                                                                        <h3>Enterprise</h3>
                                                                    </div>
                                                                    <div className="pricingtable-price">
                                                                        <span className="pricingtable-bx">$99</span>
                                                                        <span className="pricingtable-type">per month</span>
                                                                    </div>
                                                                    <div className="overlay-main bg-black opacity-07" />
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check" />Building Design </li>
                                                                    <li><i className="fa fa-check" />Personal support </li>
                                                                    <li><i className="fa fa-check" />Map your domain</li>
                                                                    <li><i className="fa fa-check" />Create unlimited blogs</li>
                                                                    <li><i className="fa fa-check" />Unlimited storage</li>
                                                                </ul>
                                                                <div className="pricingtable-footer">
                                                                    <NavLink to={"#"} className="site-button text-uppercase letter-spacing-2">Buy Now</NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b0">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Pricing Table Two</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE START */}
                                        {/* PRICING STYLE-3 COLUMNS 3 WITH GAP AND BACKGROUND */}
                                        <div className="section-content">
                                            <div className="pricingtable-row no-col-gap">
                                                <div className="row p-lr15">
                                                    <div className="col-sm-6 col-md-4 col-lg-4 m-b40">
                                                        <div className="pricingtable-wrapper pricing-table-style-4">
                                                            <div className="pricingtable-inner bg-gray">
                                                                <div className="overlay-wraper pricingtable-inner-overlay bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg1.default + ')' }}>
                                                                    <div className="pricingtable-title">
                                                                        <h3>Unlimited</h3>
                                                                    </div>
                                                                    <div className="pricingtable-price">
                                                                        <span className="pricingtable-bx">$29</span>
                                                                        <span className="pricingtable-type">per month</span>
                                                                    </div>
                                                                    <div className="overlay-main bg-black opacity-07" />
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check" />Building Design </li>
                                                                    <li><i className="fa fa-check" />Personal support </li>
                                                                    <li><i className="fa fa-check" />Map your domain</li>
                                                                    <li><i className="fa fa-check" />Create unlimited blogs</li>
                                                                    <li><i className="fa fa-check" />Unlimited storage</li>
                                                                </ul>
                                                                <div className="pricingtable-footer">
                                                                    <NavLink to={"#"} className="site-button text-uppercase letter-spacing-2">Buy Now</NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-4 col-lg-4 m-b40">
                                                        <div className="pricingtable-wrapper pricing-table-style-4">
                                                            <div className="pricingtable-inner pricingtable-highlight bg-gray">
                                                                <div className="overlay-wraper pricingtable-inner-overlay bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg2.default + ')' }}>
                                                                    <div className="pricingtable-title">
                                                                        <h3>Premium</h3>
                                                                    </div>
                                                                    <div className="pricingtable-price">
                                                                        <span className="pricingtable-bx">$49</span>
                                                                        <span className="pricingtable-type">per month</span>
                                                                    </div>
                                                                    <div className="overlay-main bg-black opacity-07" />
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check" />Building Design </li>
                                                                    <li><i className="fa fa-check" />Personal support </li>
                                                                    <li><i className="fa fa-check" />Map your domain</li>
                                                                    <li><i className="fa fa-check" />Create unlimited blogs</li>
                                                                    <li><i className="fa fa-check" />Unlimited storage</li>
                                                                </ul>
                                                                <div className="pricingtable-footer">
                                                                    <NavLink to={"#"} className="site-button text-uppercase letter-spacing-2">Buy Now</NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-4 col-lg-4 m-b40">
                                                        <div className="pricingtable-wrapper pricing-table-style-4">
                                                            <div className="pricingtable-inner bg-gray">
                                                                <div className="overlay-wraper pricingtable-inner-overlay bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg3.default + ')' }}>
                                                                    <div className="pricingtable-title">
                                                                        <h3>Enterprise</h3>
                                                                    </div>
                                                                    <div className="pricingtable-price">
                                                                        <span className="pricingtable-bx">$99</span>
                                                                        <span className="pricingtable-type">per month</span>
                                                                    </div>
                                                                    <div className="overlay-main bg-black opacity-07" />
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check" />Building Design </li>
                                                                    <li><i className="fa fa-check" />Personal support </li>
                                                                    <li><i className="fa fa-check" />Map your domain</li>
                                                                    <li><i className="fa fa-check" />Create unlimited blogs</li>
                                                                    <li><i className="fa fa-check" />Unlimited storage</li>
                                                                </ul>
                                                                <div className="pricingtable-footer">
                                                                <NavLink to={"#"} className="site-button text-uppercase letter-spacing-2">Buy Now</NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default PricingTable;