import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        image: require('./../../images/projects/pic-1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.speriores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam.'
    },
    {
        image: require('./../../images/projects/pic-2.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.speriores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam.'
    },
    {
        image: require('./../../images/projects/pic-3.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.speriores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam.'
    },
    {
        image: require('./../../images/projects/pic-4.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.speriores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam.'
    },
    {
        image: require('./../../images/projects/pic-5.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.speriores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam.'
    }
]

var bnrimg = require('./../../images/banner/5.jpg');

class WorkCarousel extends React.Component {
    render() {
        const options = {
            loop:true,
            autoplay:false,
            center: true,
            items:3,
            margin:0,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                854:{
                    items:2
                }
                
            }
        };
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Improving quality of life with an integrated unified approach." pagename="Work carousel" bgimage={bnrimg.default}/>
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb90 bg-repeat tm-work-wrap" style={{ backgroundImage: 'url(images/background/ptn-1.png)' }}>
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="work-carousel-outer">
                                <OwlCarousel className="owl-carousel work-carousel owl-btn-vertical-center" {...options}>
                                    {projects.map((item, index) => (
                                        <div className="item" key={index}>
                                            <div className="wt-img-effect ">
                                                <img src={item.image.default} alt="" />
                                                <div className="overlay-bx-2 ">
                                                    <div className="line-amiation p-a40">
                                                        <div className="text-white  font-weight-300">
                                                            <h2><NavLink to={"/project-detail"} className="text-black font-36 letter-spacing-2 text-uppercase text-white">{item.title}</NavLink></h2>
                                                            <p>{item.description}
                                                            </p>
                                                            <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-l20">Read More</NavLink>
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
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default WorkCarousel;