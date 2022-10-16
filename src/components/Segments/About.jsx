import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    
    // require('./../../images/gallery/bedroom-bright.jpg'),
    require('./../../images/gallery/fabric-samples.jpeg'),
    // require('./../../images/gallery/living-room.jpg'),
    require('./../../images/gallery/bedroom-condo.jpg'),
    require('./../../images/gallery/sewing-machine-working.jpg'),
    require('./../../images/gallery/living-room-soft.jpg'),
    require('./../../images/gallery/workroom-misc.jpg'),
    require('./../../images/gallery/roman-shades.jpeg'),
    require('./../../images/gallery/spools-of-thread.png'),
    require('./../../images/gallery/kitchen-cute.png'),
]


class About extends React.Component {

    render() {
        const options = {
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            //center: true,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        };
        return (
            <>
                <div id='about' className="section-full p-t90 bg-gray tm-welcome-warp">


                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-5 col-sm-12 text-uppercase text-black">
                                    <span className="font-30 font-weight-300">Welcome, I'm Marilyn</span>
                                    <h2 className="font-40">
                                        We are a <span className={this.props.colorclass1}>creative</span> <span className={this.props.colorclass2}> professional workroom</span>. 
                                    </h2>
                                    <p>
                                        For over 30 years, we have been in the business of creating beautiful fine window coverings, pillows, and custom bedding 
                                        using couture methods. Our clients return again and again because of the exceptional quality and the detail-oriented 
                                        designs that we deliver.
                                    </p>
                                    <p className="text-lowercase">
                                        We provide custom window treatment design solutions for residential and commercial spaces, across Oakville, Burlington, 
                                        Mississauga, Georgetown, Milton and surrounding areas.  
                                    </p>
                                    <NavLink to={"/aboutus"} className="btn-half site-button button-lg m-b15"><span>Read More</span><em /></NavLink>
                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <div className="m-carousel-1 m-l100">
                                        <OwlCarousel className="owl-carousel home-carousel-1 owl-btn-vertical-center" {...options}>
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
                            </div>
                            <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
                                <strong>30+ Years</strong>
                                <span className="text-black">Experience Working</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About;