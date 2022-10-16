import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';
import CountUp from 'react-countup';

var bnrimg = require('./../../images/banner/1.jpg');

class Counter extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                <Banner title="Exploring our clients goals, priorities, lifestyle, and tastes." pagename="Counter" bgimage={bnrimg.default}/>
                    
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            <div className="row">
                                <SidebarNav />
                                <div className="col-md-9 col-sm-9">
                                    {/* SECTION CONTENT */}
                                    <div className="section-content m-counter tm-counter-shortcode">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-4 col-xs-4">
                                                <div className="p-a30 m-b5 wt-box text-center">
                                                    <div className="counter font-18 font-weight-600 text-primary m-b5"><CountUp end={1999} duration={5} /></div>
                                                    <span>PROJECT COMPLETED</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4">
                                                <div className="p-a30 m-b5 wt-box text-center">
                                                    <div className="counter font-18 font-weight-600 text-primary m-b5"><CountUp end={2499} duration={5} /></div>
                                                    <span>HAPPY CLIENTS</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4">
                                                <div className="p-a30 m-b5 wt-box text-center">
                                                    <div className="counter font-18 font-weight-600 text-primary m-b5"><CountUp end={4999} duration={5} /></div>
                                                    <span>WORKERS EMPLOYED</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wt-divider bg-gray-dark"><i className="icon-dot c-square" /></div>
                                    </div>
                                    {/* SECTION CONTENT END */}
                                    {/* SECTION CONTENT */}
                                    <div className="section-content tm-counter-shortcode">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-4 col-xs-4">
                                                <div className="wt-icon-box-wraper left p-a10 text-black m-b30">
                                                    <span className="icon-sm p-t10">
                                                        <i className="fa fa-university" />
                                                    </span>
                                                    <div className="icon-content">
                                                        <div className="font-18 font-weight-600 text-black m-b5"><span className="counter"><CountUp end={1999} duration={5} /></span><b>+</b></div>
                                                        <span className="text-uppercase">PROJECT COMPLETED</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4">
                                                <div className="wt-icon-box-wraper left p-a10 text-black m-b30">
                                                    <span className="icon-sm p-t10">
                                                        <i className="fa fa-soccer-ball-o" />
                                                    </span>
                                                    <div className="icon-content">
                                                        <div className="font-18 font-weight-600 text-black m-b5"><span className="counter"><CountUp end={2499} duration={5} /></span><b>+</b></div>
                                                        <span>HAPPY CLIENTS</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4">
                                                <div className="wt-icon-box-wraper left p-a10 text-black m-b30">
                                                    <span className="icon-sm p-t10">
                                                        <i className="fa fa-vcard" />
                                                    </span>
                                                    <div className="icon-content">
                                                        <div className="font-18 font-weight-600 text-black m-b5"><span className="counter"><CountUp end={4999} duration={5} /></span><b>+</b></div>
                                                        <span>WORKERS EMPLOYED</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wt-divider bg-gray-dark"><i className="icon-dot c-square" /></div>
                                    </div>
                                    {/* SECTION CONTENT END */}
                                    {/* SECTION CONTENT */}
                                    <div className="section-content tm-counter-shortcode">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-4 col-xs-4">
                                                <div className="m-b30 text-black wt-icon-box-wraper center">
                                                    <div className="counter font-60 font-weight-800 m-b5"><CountUp end={1999} duration={5} /></div>
                                                    <span className="font-18">PROJECT COMPLETED</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4">
                                                <div className="m-b30 text-black wt-icon-box-wraper center">
                                                    <div className="counter font-60 font-weight-800 m-b5"><CountUp end={2499} duration={5} /></div>
                                                    <span className="font-18">HAPPY CLIENTS</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4">
                                                <div className="m-b30 text-black wt-icon-box-wraper center">
                                                    <div className="counter font-60 font-weight-800 m-b5"><CountUp end={4999} duration={5} /></div>
                                                    <span className="font-18">WORKERS EMPLOYED</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* SECTION CONTENT END */}
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

export default Counter;