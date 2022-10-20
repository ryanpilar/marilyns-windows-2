import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Contact from './Contact';

const images = [
    require('./../../images/gallery/portrait/pic2.jpg'),
    require('./../../images/gallery/portrait/pic3.jpg'),
    require('./../../images/gallery/portrait/pic4.jpg'),
    require('./../../images/gallery/portrait/pic5.jpg'),
    require('./../../images/gallery/portrait/pic6.jpg'),
]

class About2 extends React.Component {
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: false,
        };
        return (
            <>
                <div className="section-full p-tb90 bg-gray square_shape2 tm-about2-wrap">
                        <div className="container">
                            <div className="section-content ">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="m-about m-l50 m-r50">

                                        <OwlCarousel className="owl-carousel about-us-carousel owl-btn-bottom-right" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                <div className="ow-img wt-img-effect zoom-slow">
                                                
                                                <NavLink to={""}><img src={item.default} alt="" /></NavLink>
                                                    </div>
                                                </div>

                                            ))}

                                        </OwlCarousel>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 ">
                                        <div className="m-about-containt text-uppercase text-black p-t30">
                                            <span className="font-30 font-weight-300">About Us</span>
                                            <h2 className="font-40">Our mission is the best Development &amp; interior design.</h2>
                                            <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p>
                                            <p className="text-lowercase">typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts, different general the content of dummy text is nonsensical. typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts, different general the content
                                            </p>
                                            {/* <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Contact </span></NavLink> */}
                                            <NavLink to="/#contact" element={<Contact />}>Contact me</NavLink>
                                            {/* <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> See Gallery </span></NavLink> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default About2;