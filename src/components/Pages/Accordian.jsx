import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';

var bnrimg = require('./../../images/banner/3.jpg');

class Accordian extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                <Banner title="Passionate about great architecture and all things sustainable." pagename="Accordion" bgimage={bnrimg.default}/>
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
                                            <h3>Accordian Default</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* ACCORDIAN  DEFAULT */}
                                        <div className="section-content">
                                            <div className="wt-accordion acc-default" id="accordion1">
                                                <div className="panel wt-panel">
                                                    <div className="acod-head acc-actives">
                                                        <h6 className="acod-title text-uppercase">
                                                            <a data-toggle="collapse" href="#collapseOne1" data-parent="#accordion1">
                                                                Awesome Web Design
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseOne1" className="acod-body collapse in">
                                                        <div className="acod-content p-tb15">Web design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the are industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                                    </div>
                                                </div>
                                                <div className="panel wt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title text-uppercase">
                                                            <a data-toggle="collapse" href="#collapseTwo1" className="collapsed" data-parent="#accordion1">
                                                                Different Graphic Design
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseTwo1" className="acod-body collapse">
                                                        <div className="acod-content p-tb15">Graphic design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the are industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining and essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                                    </div>
                                                </div>
                                                <div className="panel wt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title text-uppercase">
                                                            <a data-toggle="collapse" href="#collapseThree1" className="collapsed" data-parent="#accordion1">
                                                                Fast Developement
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseThree1" className="acod-body collapse">
                                                        <div className="acod-content p-tb15">Developement lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the are industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining and essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Accordion bg gray</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* ACCORDIAN  BACKGROUND GRAY */}
                                        <div className="section-content p-b0">
                                            <div className="wt-accordion acc-bg-gray" id="accordion5">
                                                <div className="panel wt-panel">
                                                    <div className="acod-head acc-actives">
                                                        <h6 className="acod-title text-uppercase">
                                                            <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                                Awesome Web Design
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseOne5" className="acod-body collapse in">
                                                        <div className="acod-content p-tb15">Web design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                                    </div>
                                                </div>
                                                <div className="panel wt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title text-uppercase">
                                                            <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                                Different Graphic Design
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseTwo5" className="acod-body collapse">
                                                        <div className="acod-content p-tb15">Graphic design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                                    </div>
                                                </div>
                                                <div className="panel wt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title text-uppercase">
                                                            <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                                Fast Developement
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseThree5" className="acod-body collapse">
                                                        <div className="acod-content p-tb15">Developement lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b0">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Accordion bg dark</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* ACCORDIAN  BG DARK */}
                                        <div className="section-content p-b0">
                                            <div className="wt-accordion acc-bg-dark" id="accordion9">
                                                <div className="panel wt-panel">
                                                    <div className="acod-head acc-actives">
                                                        <h6 className="acod-title text-uppercase">
                                                            <a data-toggle="collapse" href="#collapseOne9" data-parent="#accordion9"><i className="fa fa-globe" />
                                                                Awesome Web Design
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseOne9" className="acod-body collapse in">
                                                        <div className="acod-content p-tb15">Web design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the and industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                                    </div>
                                                </div>
                                                <div className="panel wt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title text-uppercase">
                                                            <a data-toggle="collapse" href="#collapseTwo9" className="collapsed" data-parent="#accordion9"><i className="fa fa-photo" />
                                                                Different Graphic Design
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseTwo9" className="acod-body collapse">
                                                        <div className="acod-content p-tb15">Graphic design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the and industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                                    </div>
                                                </div>
                                                <div className="panel wt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title text-uppercase">
                                                            <a data-toggle="collapse" href="#collapseThree9" className="collapsed" data-parent="#accordion9"><i className="fa fa-cog" />
                                                                Fast Developement
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseThree9" className="acod-body collapse">
                                                        <div className="acod-content p-tb15">Developement lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the and industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
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

export default Accordian;