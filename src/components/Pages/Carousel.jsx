import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';

const gapslider = [
    {
        thumb: require('./../../images/our-work/pic1.jpg'),
        full: require('./../../images/gallery/pic1.jpg'),
    },
    {
        thumb: require('./../../images/our-work/pic2.jpg'),
        full: require('./../../images/gallery/pic2.jpg'),
    },
    {
        thumb: require('./../../images/our-work/pic3.jpg'),
        full: require('./../../images/gallery/pic3.jpg'),
    },
    {
        thumb: require('./../../images/our-work/pic4.jpg'),
        full: require('./../../images/gallery/pic1.jpg'),
    },
    {
        thumb: require('./../../images/our-work/pic5.jpg'),
        full: require('./../../images/gallery/pic5.jpg'),
    },
    {
        thumb: require('./../../images/our-work/pic6.jpg'),
        full: require('./../../images/gallery/pic6.jpg'),
    }
]

const fadeslider = [
    { image: require('./../../images/gallery/pic1.jpg') },
    { image: require('./../../images/gallery/pic2.jpg') },
    { image: require('./../../images/gallery/pic3.jpg') },
]

const slideslider = [
    { image: require('./../../images/gallery/pic4.jpg') },
    { image: require('./../../images/gallery/pic7.jpg') },
    { image: require('./../../images/gallery/pic8.jpg') },
]

var bnrimg = require('./../../images/banner/4.jpg');

class Carousel extends React.Component {
    render() {
        const options1 = {
            loop:true,
            margin:0,
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
                    items:3
                },
                1000:{
                    items:3
                }
            }
        };
        const options2 = {
            loop:true,
            autoplay:true,
            autoplayTimeout:2000,
            margin:30,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true,
            animateOut:'fadeOut',
        };
        const options3 = {
            loop:true,
            autoplay:true,
            autoplayTimeout:2000,
            margin:30,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true,
        };
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Improving quality of life with an integrated unified approach." pagename="Carousel" bgimage={bnrimg.default} />

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
                                            <h3>No Gap Slider</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <div className="section-content">
                                            {/* CAROUSEL */}
                                            <div className="section-content">
                                                <OwlCarousel className="owl-carousel portfolio-carousel-nogap mfp-gallery gallery owl-btn-vertical-center" {...options1}>
                                                    {gapslider.map((item, index) => (
                                                        <div className="item" key={index}>
                                                            <div className="ow-portfolio">
                                                                <div className="ow-portfolio-img wt-img-overlay1 wt-img-effect zoom-slow">
                                                                    <img src={item.thumb.default} alt="" />
                                                                    <div className="overlay-bx">
                                                                        <div className="overlay-icon">
                                                                            <a href={item.full.default} className="mfp-link">
                                                                                <i className="fa fa-search-plus wt-icon-box-xs" />
                                                                            </a>
                                                                            <NavLink to={"project-detail"}>
                                                                                <i className="fa fa-external-link wt-icon-box-xs" />
                                                                            </NavLink>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </OwlCarousel>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Fade Slider</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <div className="section-content">
                                            {/*Fade slider*/}
                                            <OwlCarousel className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-center" {...options2}>
                                                {fadeslider.map((item, index) => (
                                                    <div className="item" key={index}>
                                                        <div className="aon-thum-bx">
                                                            <img src={item.image.default} alt="" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </OwlCarousel>

                                            {/*fade slider END*/}
                                        </div>
                                    </div>
                                    <div className="m-b0">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Slide slider</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <div className="section-content">
                                            {/*Slide slider*/}
                                            <OwlCarousel className="owl-carousel owl-slide-slider-one owl-btn-vertical-center owl-dots-bottom-center" {...options3}>
                                                {slideslider.map((item, index) => (
                                                    <div className="item" key={index}>
                                                        <div className="aon-thum-bx">
                                                            <img src={item.image.default} alt="" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </OwlCarousel>

                                            {/*fade slider END*/}
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

export default Carousel;