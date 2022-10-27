import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Contact from './Contact';
import WorkGrid from '../Pages/Gallery';

const images = [
    require('./../../images/gallery/portrait/istockphoto-621687628-1024x1024.jpg'),
    require('./../../images/gallery/portrait/20210527_113548.jpg'),
    require('./../../images/gallery/portrait/AdobeStock_202662356_Preview.jpeg'),
    require('./../../images/gallery/portrait/spools-of-thread.png'),
    require('./../../images/gallery/portrait/AdobeStock_322662088_Preview.jpeg'),
    require('./../../images/gallery/portrait/AdobeStock_323986170_Preview.jpeg'),
    require('./../../images/gallery/portrait/istockphoto-667524206-1024x1024.jpg'),
    require('./../../images/gallery/portrait/pexels-cottonbro-4614221.jpg'),
    require('./../../images/gallery/portrait/kitchen-cute-small.png'),
    require('./../../images/gallery/portrait/istockphoto-1315353397-1024x1024.jpg'),
    require('./../../images/gallery/portrait/istockphoto-1270231942-1024x1024.jpg'),
    require('./../../images/gallery/portrait/29982927_10156658190290101_8483271152786359446_o.jpg'),
    require('./../../images/gallery/portrait/istockphoto-667524206-1024x1024.jpg'),
    require('./../../images/gallery/portrait/istockphoto-837185424-1024x1024.jpg'),
    require('./../../images/gallery/portrait/sewing-machine-lamp-freepic.png'),
    require('./../../images/gallery/portrait/workroom-misc.jpg'),
    require('./../../images/gallery/portrait/istockphoto-491666019-1024x1024.jpg'),
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
                                                
                                                    <img src={item.default} alt="" />
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
                                            <NavLink to="/gallery" element={<WorkGrid />}>Visit My Gallery</NavLink>
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