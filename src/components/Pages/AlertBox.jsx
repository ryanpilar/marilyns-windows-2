import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';

var bnrimg = require('./../../images/banner/3.jpg');

class AlertBox extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Natural plus modern." pagename="Alert box" bgimage={bnrimg.default}/>
                    
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
                                            <h3>Background None</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* ALERT BOX NO BACKGROUND  */}
                                        <div className="section-content">
                                            <div className="alert alert-success no-bg">
                                                <strong>Success!</strong> You successfully read this important alert message.
                                            </div>
                                            <div className="alert alert-info no-bg">
                                                <strong>Info!</strong> This alert needs your attention, but it's not super important
                                            </div>
                                            <div className="alert alert-warning no-bg">
                                                <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                            </div>
                                            <div className="alert alert-danger no-bg">
                                                <strong>Danger!</strong> Change a few things up and try submitting again.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Box With Icon</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* ALERT BOX WITH ICON */}
                                        <div className="section-content">
                                            <div className="alert alert-success">
                                                <strong><i className="fa fa-thumbs-o-up" /> Success!</strong> You successfully read this important alert message.
                                            </div>
                                            <div className="alert alert-info">
                                                <strong><i className="fa fa-info-circle" /> Info!</strong> This alert needs your attention, but it's not super important
                                            </div>
                                            <div className="alert alert-warning">
                                                <strong><i className="fa fa-warning" /> Warning!</strong> Better check yourself, you're not looking too good.
                                            </div>
                                            <div className="alert alert-danger">
                                                <strong><i className="fa fa-remove" /> Danger!</strong> Change a few things up and try submitting again.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Box With Closable</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* ALERT BOX CLOSABLE */}
                                        <div className="section-content">
                                            <div className="alert alert-success fade in">
                                                <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                                                <strong>Success!</strong> This alert box could indicate a successful or positive action.
                                            </div>
                                            <div className="alert alert-info fade in">
                                                <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                                                <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
                                            </div>
                                            <div className="alert alert-warning fade in">
                                                <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                                                <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
                                            </div>
                                            <div className="alert alert-danger fade in">
                                                <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                                                <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b0">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Box With Sizing</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* ALERT BOX SIZING */}
                                        <div className="section-content">
                                            <div className="alert alert-success alert-sm">
                                                <strong>Success!</strong> You successfully read this important alert message.
                                            </div>
                                            <div className="alert alert-info">
                                                <strong>Info!</strong> This alert needs your attention, but it's not super important
                                            </div>
                                            <div className="alert alert-warning alert-lg">
                                                <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                            </div>
                                            <div className="alert alert-danger alert-xl">
                                                <strong>Danger!</strong> Change a few things up and try submitting again.
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

export default AlertBox;