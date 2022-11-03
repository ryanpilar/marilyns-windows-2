import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Contact from './Contact';
import Gallery from '../Pages/Gallery22';

const images = [
    require('./../../images/gallery/portrait/pic1.jpg'),
    require('./../../images/gallery/portrait//pic2.jpg'),
    require('./../../images/gallery/portrait//pic3.jpg'),

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
                                            <p className="text-lowercase">
                                                When designing any space, drapery window treatments are a major component of a room’s aesthetic. The right curtains or 
                                                sheers help bring a space together into a cohesive design, and can inject color, pattern, texture or simple elegance 
                                                into the room. Specialty coated fabrics offer the increased benefits of temperature control, while motorized options 
                                                allow for easy operation. Regardless of the configuration or accessories, drapery adds an important element for 
                                                transforming a space so that it matches your design vision. We offer a wide variety of styles, including pocket, 
                                                grommet, and ripple-fold drapery. Browse our product lines and discover how our design professionals match you with the perfect drapery solutions for your space.
                                            </p>
                                            <p className="text-lowercase">
                                                Founded with the goal to offer the best in luxury design, Marilyn's Windows has spent nearly 4 decades helping clients 
                                                in New York City and the surrounding areas achieve interior perfection with our custom window treatments. Whether you are 
                                                looking to attain a certain aesthetic, gain control over lighting, privacy and views, or hoping to achieve all of the above, 
                                                New York Window Fashion has a solution for you.
                                            </p>
                                            <p className="text-lowercase">
                                                Our trained design representatives will work closely with you to discern your goals, and guide you through all of the
                                                products and features that best match your tastes and vision. We believe that each and every client, regardless of
                                                project size, deserves our very best personalized service. With our consultations, you have a one-on-one showroom experience.
                                            </p>

                                            <p className="text-lowercase">
                                                We are profession installers and you can ensure that your curtains are installed correctly, on time and to the highest standards. 
                                                Our industry-trained installation professionals will treat your project and your space with care and consideration, and will answer 
                                                any questions you have along the way.
                                            </p>
                                            <p className="text-lowercase">
                                                Turn your window treatments into "smart" designs through automation. At Marilyn's Windows, we can motorize virtually any window 
                                                treatment, allowing you to control your blinds, shades, draperies and more with a simple touch of button, voice command, or on a 
                                                preset schedule. Our motorized solutions are compatible with Apple, Google, and Amazon Alexa devices.
                                            </p>
                                            {/* <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Contact </span></NavLink> */}
                                            <NavLink to="/#contact" element={<Contact />}>Contact me</NavLink>
                                            <NavLink to="/gallery" element={<Gallery />}>Visit My Gallery</NavLink>
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