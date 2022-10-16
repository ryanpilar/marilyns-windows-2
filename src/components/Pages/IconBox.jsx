import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';

var bnrimg = require('./../../images/banner/3.jpg');

class IconBox extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                <Banner title="Delivering architecture, planning, and design globally." pagename="Icon Box" bgimage={bnrimg.default}/>
                    
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-t80 p-b50 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            <div className="row">
                            <SidebarNav />
                                <div className="col-md-9 col-sm-9">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <h3>Icon Box Style</h3>
                                        <div className="wt-separator-outer">
                                            <div className="wt-separator bg-black" />
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    {/* ICON BOX */}
                                    <div className="section-content m-b50">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a30 center bg-white">
                                                    <div className="wt-icon-box-sm bg-primary m-b20">
                                                        <span className="icon-cell text-white"><i className="fa fa-github" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase letter-spacing-2 font-weight-800">Square center</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts, different general.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a30 center bg-white">
                                                    <div className="wt-icon-box-sm radius bg-primary m-b20">
                                                        <span className="icon-cell text-white"><i className="fa fa-github-alt" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">Circle center</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts, different general.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a30 center bg-white">
                                                    <div className="wt-icon-box-sm text-primary bg-white radius bdr-2 m-b20">
                                                        <span className="icon-cell text-primary"><i className="fa fa-google-wallet" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">Outline center</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts, different general.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a30 center bg-white">
                                                    <div className="icon-xl m-b20">
                                                        <span className="icon-cell text-primary"><i className="fa fa-gitlab" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">Normal center</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts, different general.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ICON BOX */}
                                    <div className="section-content m-b50">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a20 left bg-white">
                                                    <div className="wt-icon-box-xs bg-primary">
                                                        <span className="icon-cell text-white"><i className="fa fa-github" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">Square Left</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a20 right bg-white">
                                                    <div className="wt-icon-box-xs bg-primary">
                                                        <span className="icon-cell text-white"><i className="fa fa-github-alt" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">Square Right</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a20 left bg-white">
                                                    <div className="wt-icon-box-xs radius bg-primary">
                                                        <span className="icon-cell text-white"><i className="fa fa-github" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">Circle Left</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a20 right bg-white">
                                                    <div className="wt-icon-box-xs radius bg-primary">
                                                        <span className="icon-cell text-white"><i className="fa fa-github-alt" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">Circle Right</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ICON BOX */}
                                    <div className="section-content tm-shortcode-icon-4">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a20 left bg-white">
                                                    <div className="wt-icon-box-xs text-primary bg-white radius bdr-2 ">
                                                        <span className="icon-cell text-primary"><i className="fa fa-google-wallet" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">Outline left</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a20 right bg-white">
                                                    <div className="wt-icon-box-xs text-primary bg-white radius bdr-2 ">
                                                        <span className="icon-cell text-primary"><i className="fa fa-gitlab" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">Outline right</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a20 left bg-white">
                                                    <div className="icon-sm m-b20">
                                                        <span className="icon-cell text-primary"><i className="fa fa-google-wallet" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">Normal left</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper bx-style-1 p-a20 right bg-white">
                                                    <div className="icon-sm m-b20">
                                                        <span className="icon-cell text-primary"><i className="fa fa-gitlab" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">Normal right</h5>
                                                        <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts.</p>
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

export default IconBox;