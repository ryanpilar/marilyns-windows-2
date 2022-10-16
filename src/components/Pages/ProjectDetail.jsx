import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';

var bnrimg = require('./../../images/banner/1.jpg');
var bgimg = require('./../../images/banner/5.jpg');

class ProjectDetail extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Creating places that enhance the human experience." pagename="Project detail" bgimage={bnrimg.default}/>
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb90 tm-work-detail-wrap">
                        <div className="container">
                            <div className="project-detail-outer bg-top-left bg-parallax bg-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 project-detail-pic" />
                                    <div className="col-md-6 col-sm-12 project-detail-containt bg-black square_shape3">
                                        <div className="p-lr20 p-tb80">
                                            <div className="bg-white p-lr30 p-tb50 text-black">
                                                <h2 className="m-t0"><span className="font-34 text-uppercase">Small &amp; Minimal House On Paters on Hill</span></h2>
                                                <p>Typefaces and layouts, and in appeara nce of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                                                <div className="product-block">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 m-b30">
                                                            <h5 className="text-uppercase">Date</h5>
                                                            <p>January 04, 2022</p>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 m-b30">
                                                            <h5 className="text-uppercase">Client</h5>
                                                            <p>Branding NthPsd Company</p>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 m-b30">
                                                            <h5 className="text-uppercase">Project type</h5>
                                                            <p>Contruction, Brading</p>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 m-b30">
                                                            <h5 className="text-uppercase">Creative Director</h5>
                                                            <p>Lorem Ipsum doler</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-t0">
                                                    <ul className="social-icons social-square social-darkest m-b0">
                                                        <li><a target="_blank" href="https://www.facebook.com" className="fa fa-facebook" /></li>
                                                        <li><a target="_blank"
                                                         href="https://twitter.com" className="fa fa-twitter" /></li>
                                                        <li><a target="_blank"
                                                         href="https://in.linkedin.com" className="fa fa-linkedin" /></li>
                                                        <li><a target="_blank"
                                                         href="https://rss.com" className="fa fa-rss" /></li>
                                                        <li><a target="_blank"
                                                         href="https://www.youtube.com/" className="fa fa-youtube" /></li>
                                                        <li><a target="_blank"
                                                         href="https://www.instagram.com/" className="fa fa-instagram" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ProjectDetail;