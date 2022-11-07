import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import SEO from '../Segments/SEO';


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
                <SEO 
                    title={`Marilyn's Windows | My Story`} 
                    description={`Professionally sewing for over 30 years and specializing in the tailored creation of hand-sewn curtains, drapes, blinds, and custom bedding.`} 
                />

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
                                                
                                                    <img 
                                                        src={item.default}  
                                                        // alt={item.context.custom.alt} 
                                                        // data-pin-description={item.context.custom.dataPin}
                                                        // caption={item.context.custom.caption} 
                                                        width={360}
                                                        height={560} 
                                                        alt=''
                                                    />
                                                </div>
                                                </div>

                                            ))}

                                        </OwlCarousel>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 ">
                                        <div className="m-about-containt text-uppercase text-black p-t30">
                                            <span className="font-30 font-weight-300">About Marilyn</span>
                                            <h2 className="font-40">Our mission is the best Development &amp; interior design.</h2>
                                            <p><b>INTERIOR DESIGNER IN MILTON, ONTARIO.</b></p>
                                            <p className="text-lowercase">
                                                Marilyn discovered her love for couture as a little girl, sewing miniature gowns and dresses for her doll collections by hand. 
                                                Throughout school, she worked long hours to purchase her first professional sewing machine, which she still uses to craft her 
                                                many custom projects to this day.
                                            </p>
                                            <p className="text-lowercase">
                                                After pursuing a degree in Textiles at the University of Guelph, Marilyn quickly established herself among Ontario’s elite 
                                                luxury homeowners, interior designers, custom home builders, real estate agents, and insurance companies for her beautifully 
                                                designed custom curtains and soft furnishings.
                                            </p>
                                            <p className="text-lowercase">
                                                For over 30 years, Marilyn has specialized in the tailored creation of hand-sewn curtains, drapes, blinds, and home bedding and 
                                                accents with the world’s finest fabrics, hardware, and accessories. 
                                            </p>

                                            <p className="text-lowercase">
                                                Masterful attention to detail and excellent customer service are woven into the fabric of every piece that leaves Marilyn’s 
                                                sewing machines. Together with her team of professional seamstresses and installers, Marilyn is defining the exquisite art of 
                                                custom design and couture window dressings.
                                            </p>
                                            
                                            {/* <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Contact </span></NavLink> */}
                                            <a href='/#contact' className="btn-half site-button button-lg m-b15 m-r15"><span>Hire Marilyn</span><em /></a>
                                            <a href='/services' className="btn-half site-button button-lg m-b15"><span>See My Services</span><em /></a>
                                            
                                            {/* <NavLink to="/#contact" element={<Contact />}>Contact me</NavLink>
                                            <NavLink to="/gallery" element={<Gallery />}>Visit My Gallery</NavLink> */}
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