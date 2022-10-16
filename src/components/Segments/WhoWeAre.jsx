import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        image: require('./../../images/projects/pic-1.jpg'),
        title: 'New Acropolis Museum',
        description: 'Mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enimnulla sed, egestas, maximus non nulla sed, egestas venenatis felis',
    },
    {
        image: require('./../../images/projects/pic-2.jpg'),
        title: 'New Acropolis Museum',
        description: 'Mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enimnulla sed, egestas, maximus non nulla sed, egestas venenatis felis',
    },
    {
        image: require('./../../images/projects/pic-3.jpg'),
        title: 'New Acropolis Museum',
        description: 'Mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enimnulla sed, egestas, maximus non nulla sed, egestas venenatis felis',
    },
    {
        image: require('./../../images/projects/pic-4.jpg'),
        title: 'New Acropolis Museum',
        description: 'Mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enimnulla sed, egestas, maximus non nulla sed, egestas venenatis felis',
    },
    {
        image: require('./../../images/projects/pic-5.jpg'),
        title: 'New Acropolis Museum',
        description: 'Mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enimnulla sed, egestas, maximus non nulla sed, egestas venenatis felis',
    }
]

var img1 = require('./../../images/slider-corner.jpg');
var bgimg = require('./../../images/background/ptn-1.png');

class WhoWeAre extends React.Component {
  
    render() {
        const options = {
            loop:true,
            autoplay:true,
            margin:0,
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
                <div className="section-full p-t140 bg-repeat tm-whoweare-wrap"  style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-5 col-sm-12">
                                        <div className="wt-left-part">
                                            <div className="text-uppercase text-black">
                                                <span className="font-30 font-weight-300">Wo we are </span>
                                                <h2 className="font-40">
                                                    We are creative architecture Studio
                                                </h2>
                                                <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use texts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-12">
                                        <div className="m-carousel-2">
                                        <OwlCarousel className="owl-carousel carousel-hover home-carousel-2 owl-btn-vertical-center" {...options}>
                                                {projects.map((item, index) => (
                                                    <div className="item" key={index}>
                                                    <div className="wt-box">
                                                        <div className="ow-img wt-carousel-block gradi-black">
                                                            <img src={item.image.default} alt=""/>
                                                            <div className="p-a50 wt-carousel-info text-white">
                                                                <div className="carousel-line">
                                                                    <h2 className="font-28 font-weight-400 m-b10">{item.title}</h2>
                                                                    <p className="m-b0">{item.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    
                                                ))}
                                            
                                            </OwlCarousel>
                                            
                                            <div className="carousel-bg-img">
                                                <img src={img1.default} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="hilite-title p-lr20 m-tb20 text-left text-uppercase bdr-gray bdr-left">
                                    <strong>30+ Projects</strong>
                                    <span className="text-black">Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default WhoWeAre;