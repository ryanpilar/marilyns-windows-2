import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';

const logos = [
    { image: require('./../../images/client-logo/w1.png') },
    { image: require('./../../images/client-logo/w2.png') },
    { image: require('./../../images/client-logo/w3.png') },
    { image: require('./../../images/client-logo/w4.png') },
    { image: require('./../../images/client-logo/w5.png') },
    { image: require('./../../images/client-logo/w6.png') },
]

var bnrimg = require('./../../images/banner/4.jpg');

class ClientLogo extends React.Component {
    render() {
        const options1 = {
            loop:true,
            margin:30,
            nav:false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },			
                767:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        };
        const options2 = {
            loop:true,
            margin:30,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },			
                767:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        };
        const options3 = {
            loop:true,
            margin:30,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },			
                767:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        };
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Fusing logic with imagination and truth with discovery." pagename="Client Carousel" bgimage={bnrimg.default} />

                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            <div className="row">
                                <SidebarNav />
                                <div className="col-md-9 col-sm-9">
                                    {/* SECTION CONTENT*/}
                                    <div className="section-full m-b30">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>3 Item</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* 3 ITEM CAROUSEL */}
                                        <div className="section-content">
                                            <OwlCarousel className="owl-carousel client-logo-carousel-3 owl-btn-center-lr" {...options1}>
                                                {logos.map((item, index) => (
                                                    <div className="item" key={index}>
                                                        <div className="ow-client-logo">
                                                            <div className="client-logo wt-img-effect client-logo-media on-color ">
                                                                <NavLink to={"aboutus"}><img src={item.image.default} alt="" /></NavLink></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </OwlCarousel>

                                        </div>
                                    </div>
                                    {/* SECTION CONTENT END */}
                                    {/* SECTION CONTENT */}
                                    <div className="section-full p-t10">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8 col-sm-8">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <h3>2 Item</h3>
                                                    <div className="wt-separator-outer">
                                                        <div className="wt-separator bg-black" />
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                {/* 2 ITEM CAROUSEL */}
                                                <div className="section-content">
                                                    <OwlCarousel className="owl-carousel client-logo-carousel-2 owl-btn-center-lr" {...options2}>
                                                        {logos.map((item, index) => (
                                                            <div className="item" key={index}>
                                                                <div className="ow-client-logo">
                                                                    <div className="client-logo wt-img-effect client-logo-media on-color  ">
                                                                        <NavLink to={"aboutus"}><img src={item.image.default} alt="" /></NavLink></div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </OwlCarousel>

                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <h3>1 Item</h3>
                                                    <div className="wt-separator-outer">
                                                        <div className="wt-separator bg-black" />
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="section-content">
                                                    <OwlCarousel className="owl-carousel client-logo-carousel-1 owl-btn-center-lr" {...options3}>
                                                        {logos.map((item, index) => (
                                                            <div className="item" key={index}>
                                                            <div className="ow-client-logo">
                                                                <div className="client-logo wt-img-effect client-logo-media on-color ">
                                                                <NavLink to={"aboutus"}><img src={item.image.default} alt="" /></NavLink></div>
                                                            </div>
                                                            </div>
                                                        ))}
                                                    </OwlCarousel>
                                                    
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

export default ClientLogo;