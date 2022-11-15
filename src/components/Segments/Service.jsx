import React from 'react'; 
// import { NavLink } from 'react-router-dom';


var img1 = require('./../../images/gallery/pic1.jpg');
var img2 = require('./../../images/gallery/pic3.jpg');
var img3 = require('./../../images/gallery/pic4.jpg');
var img4 = require('./../../images/gallery/pic5.jpg');


const Service = ({process}) => {

        
        return (
            <>
                <div className="section-full bg-gray p-tb90 square_shape1 tw-our-story-wrap">
                        <div className="container">
                            <div className="max-mid-container">
                                {/* TITLE START */}
                                <div className="section-head text-left text-black">
                                    <h2 className="text-uppercase font-36">Our Design Process</h2>
                                    <div className="wt-separator-outer">
                                        <div className="wt-separator bg-black" />
                                    </div>
                                </div>
                                {/* TITLE END */}
                                <div className="section-content our-story">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="wt-media our-story-pic">
                                                <img 
                                                    src={process.consultation.image.secure_url}  
                                                    alt={process.consultation.image.context.custom.alt}
                                                    caption={process.consultation.image.context.custom.caption}
                                                    data-pin-description={process.consultation.image.context.custom.dataPin}
                                                    width={360}
                                                    height={560}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="wt-box our-story-detail">
                                                {/* <h3 className="text-uppercase">1</h3> */}
                                                <h2 className="text-uppercase">1. Book a consultation</h2>
                                                <p>Lets connect and talk about your project needs.  </p>
                                                <a href="/#contact" className="btn-half site-button button-lg m-b15"><span>Make Appointment</span><em /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="wt-box our-story-detail">
                                                {/* <h3 className="text-uppercase">2</h3> */}
                                                <h2 className="text-uppercase">2. Drapery Ideas, Fabric Samples and Measurements</h2>
                                                <p>
                                                    My drapery workroom has over 600 fabric books from over 20 of the very best designers. We bring you a curated 
                                                    selection of fabric samples, talk about drapery design ideas and take measurements of your windows. Once you 
                                                    approve your design, we’ll begin sewing.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="wt-media our-story-pic">
                                            <img 
                                                src={process.ideas.image.secure_url}  
                                                alt={process.ideas.image.context.custom.alt}
                                                caption={process.ideas.image.context.custom.caption}
                                                data-pin-description={process.ideas.image.context.custom.dataPin}
                                                width={360}
                                                height={560}
                                            />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="wt-media our-story-pic">
                                            <img 
                                                src={process.install.image.secure_url}  
                                                alt={process.install.image.context.custom.alt}
                                                caption={process.install.image.context.custom.caption}
                                                data-pin-description={process.install.image.context.custom.dataPin}
                                                width={360}
                                                height={560}
                                            />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="wt-box our-story-detail">
                                                {/* <h3 className="text-uppercase">2015-16</h3> */}
                                                <h2 className="text-uppercase">3. Professional Installs</h2>
                                                <p>
                                                    The installation process is easy and enjoyable. We personally install each drape, curtain, 
                                                    blind, shade or accessory to make sure everything is perfect. You’ll see each room come to 
                                                    life as your couture window dressings are placed just as you ordered.
                                                </p>
                                                <a href="/#contact" className="btn-half site-button button-lg m-b15"><span>Get Free Estimate</span><em /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="wt-box our-story-detail">
                                                {/* <h3 className="text-uppercase">2017-18</h3> */}
                                                <h2 className="text-uppercase">4. Maintenance and Warranty</h2>
                                                <p>
                                                    Benefit from years of professional experience, top-quality custom designs and materials, 
                                                    and superior customer service. We are always available to answer your questions and provide 
                                                    you with information about our newest window treatment products and services. 
                                                </p>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="wt-media our-story-pic">
                                                <img 
                                                    src={process.warranty.image.secure_url}  
                                                    alt={process.warranty.image.context.custom.alt}
                                                    caption={process.warranty.image.context.custom.caption}
                                                    data-pin-description={process.warranty.image.context.custom.dataPin}
                                                    width={360}
                                                    height={560}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }

export default Service;

