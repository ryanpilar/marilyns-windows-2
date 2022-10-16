import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';

var bnrimg = require('./../../images/banner/3.jpg');

class Tabs extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                <Banner title="A whole different kind of architectural firm." pagename="Tabs" bgimage={bnrimg.default}/>
                    
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
                                            <h3>Tabs Default</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* TAB DEFAULT */}
                                        <div className="section-content">
                                            <div className="wt-tabs tabs-default">
                                                <ul className="nav nav-tabs">
                                                    <li className="active"><a data-toggle="tab" href="#web-design-1">Web design</a></li>
                                                    <li><a data-toggle="tab" href="#graphic-design-1">Graphic Design</a></li>
                                                    <li><a data-toggle="tab" href="#developement-1">Developement</a></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div id="web-design-1" className="tab-pane active">
                                                        <p className="m-b0"><strong>Web design lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br /> Suspendisse et justo.
                                                            Praesent mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet.
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                            commyolk augue aliquam ornare augue.</p>
                                                    </div>
                                                    <div id="graphic-design-1" className="tab-pane">
                                                        <p className="m-b0"><strong>Graphic Design lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br /> Praesent Suspendisse
                                                            et justo. mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet.
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                            commyolk augue aliquam ornare augue.</p>
                                                    </div>
                                                    <div id="developement-1" className="tab-pane">
                                                        <p className="m-b0"><strong>Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br />Commyolk Suspendisse
                                                            et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet.
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                            commyolk augue aliquam ornare augue.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Tabs Default nav left</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* TAB DEFAULT */}
                                        <div className="wt-tabs vertical tabs-default">
                                            <ul className="nav nav-tabs">
                                                <li className="active"><a data-toggle="tab" href="#web-design-3">Web design</a></li>
                                                <li><a data-toggle="tab" href="#graphic-design-3">Graphic Design</a></li>
                                                <li><a data-toggle="tab" href="#developement-3">Developement</a></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div id="web-design-3" className="tab-pane active">
                                                    <p className="m-b0"><strong>Web design lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br /> Suspendisse et justo.
                                                        Praesent mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulv inar lectus a est Curabitur eget orci Cras laoreet.
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                        commyolk augue aliquam ornare augue.</p>
                                                </div>
                                                <div id="graphic-design-3" className="tab-pane">
                                                    <p className="m-b0"><strong>Graphic Design lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br /> Praesent Suspendisse
                                                        et justo. mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulv inar lectus a est Curabitur eget orci Cras laoreet.
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                        commyolk augue aliquam ornare augue.</p>
                                                </div>
                                                <div id="developement-3" className="tab-pane">
                                                    <p className="m-b0"><strong>Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br />Commyolk Suspendisse
                                                        et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulv inar lectus a est Curabitur eget orci Cras laoreet.
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                        commyolk augue aliquam ornare augue.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Tabs with nav bg</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* TABS DEFAULT NAV LEFT */}
                                        <div className="wt-tabs vertical bg-tabs">
                                            <ul className="nav nav-tabs">
                                                <li className="active"><a data-toggle="tab" href="#web-design-15">Web design</a></li>
                                                <li><a data-toggle="tab" href="#graphic-design-15">Graphic Design</a></li>
                                                <li><a data-toggle="tab" href="#developement-15">Developement</a></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div id="web-design-15" className="tab-pane active">
                                                    <p className="m-b0"><strong>Web design lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br /> Suspendisse et justo.
                                                        Praesent mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulv inar lectus a est Curabitur eget orci Cras laoreet.
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                        commyolk augue aliquam ornare augue.</p>
                                                </div>
                                                <div id="graphic-design-15" className="tab-pane">
                                                    <p className="m-b0"><strong>Graphic Design lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br /> Praesent Suspendisse
                                                        et justo. mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulv inar lectus a est Curabitur eget orci Cras laoreet.
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                        commyolk augue aliquam ornare augue.</p>
                                                </div>
                                                <div id="developement-15" className="tab-pane">
                                                    <p className="m-b0"><strong>Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br />Commyolk Suspendisse
                                                        et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulv inar lectus a est Curabitur eget orci Cras laoreet.
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                        commyolk augue aliquam ornare augue.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b0">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Tabs left with nav bg</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* TAB DEFAULT WITH NAV BG */}
                                        <div className="section-content">
                                            <div className="wt-tabs bg-tabs">
                                                <ul className="nav nav-tabs">
                                                    <li className="active"><a data-toggle="tab" href="#web-design-13">Web design</a></li>
                                                    <li><a data-toggle="tab" href="#graphic-design-13">Graphic Design</a></li>
                                                    <li><a data-toggle="tab" href="#developement-13">Developement</a></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div id="web-design-13" className="tab-pane active">
                                                        <p className="m-b0"><strong>Web design lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br /> Suspendisse et justo.
                                                            Praesent mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet.
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                            commyolk augue aliquam ornare augue.</p>
                                                    </div>
                                                    <div id="graphic-design-13" className="tab-pane">
                                                        <p className="m-b0"><strong>Graphic Design lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br /> Praesent Suspendisse
                                                            et justo. mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet.
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                            commyolk augue aliquam ornare augue.</p>
                                                    </div>
                                                    <div id="developement-13" className="tab-pane">
                                                        <p className="m-b0"><strong>Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong><br />Commyolk Suspendisse
                                                            et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet.
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                                                            commyolk augue aliquam ornare augue.</p>
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

export default Tabs;