import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

var img1 = require('./../../images/our-team5/pic1.jpg');
var bgimg = require('./../../images/background/ptn-1.png');

const members = [
    {
        image: require('./../../images/our-team5/pic2.jpg'),
        fullname: 'David Gray',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic3.jpg'),
        fullname: 'Taylor Roberts',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic4.jpg'),
        fullname: 'Robert willson',
        position: 'Co-manager associated',
    },
    {
        image: require('./../../images/our-team5/pic5.jpg'),
        fullname: 'Austin Evon',
        position: 'Co-manager associated',
    }
]

class TeamMembers2 extends React.Component {
    
    render() {
      
        return (
            <>
                <div className="section-full bg-white  square_shape2  tm-expert-wrap2">
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 bg-repeat" style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                                        <div className="wt-left-part m-experts p-t90">
                                            {/* TITLE START */}
                                            <div className="section-head text-left text-black">
                                                <h2 className="text-uppercase font-36">Our experts</h2>
                                                <div className="wt-separator-outer">
                                                    <div className="wt-separator bg-black" />
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="wt-team-six large-pic">
                                                <div className="wt-team-media wt-thum-bx">
                                                <img src={img1.default} alt=""/>
                                                </div>
                                                <div className="wt-team-info text-center p-lr10 p-tb20 bg-white">
                                                    <h2 className="wt-team-title text-uppercase"><span className="text-black font-32 font-weight-500">Robert willson</span></h2>
                                                    <p className="font-22">Co-manager associated</p>
                                                    <ul className="social-icons social-md social-square social-dark">
                                                        <li><a target="_blank" target="_blank" href="https://www.facebook.com" className="fa fa-facebook" /></li>
                                                        <li><a target="_blank" target="_blank" href="https://twitter.com" className="fa fa-twitter" /></li>
                                                        <li><a target="_blank" target="_blank" href="https://in.linkedin.com" className="fa fa-linkedin" /></li>
                                                        <li><a target="_blank" target="_blank" href="https://rss.com" className="fa fa-rss" /></li>
                                                        <li><a target="_blank" target="_blank" href="https://www.youtube.com/" className="fa fa-youtube" /></li>
                                                        <li><a target="_blank" target="_blank" href="https://www.instagram.com/" className="fa fa-instagram" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-right-part team-outer">
                                            <div className="row">
                                            {members.map((item, index) => (
                                                    <div className="col-md-6 col-sm-6 col-xs-6 col-xs-100pc m-tb15" key={index}>
                                                    <div className="wt-team-six bg-white">
                                                        <div className="wt-team-media wt-thum-bx wt-img-overlay1">
                                                            <img src={item.image.default} alt=""/>
                                                            <div className="overlay-bx">
                                                                <div className="overlay-icon">
                                                                    <ul className="social-icons social-square social-dark">
                                                                        <li><a target="_blank" target="_blank" href="https://www.facebook.com" className="fa fa-facebook" /></li>
                                                                        <li><a target="_blank" target="_blank" href="https://www.twitter.com" className="fa fa-twitter" /></li>
                                                                        <li><a target="_blank" target="_blank" href="https://in.linkedin.com" className="fa fa-linkedin" /></li>
                                                                        <li><a target="_blank" target="_blank" href="https://www.youtube.com" className="fa fa-youtube" /></li>
                                                                        <li><a target="_blank" target="_blank" href="https://www.instagram.com" className="fa fa-instagram" /></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="wt-team-info text-center bg-white p-lr10 p-tb20">
                                                            <h5 className="wt-team-title text-uppercase m-a0"><span>{item.fullname}</span>
                                                                
                                                            </h5>
                                                            <p className="m-b0">{item.position}</p>
                                                            </div>
                                                    </div>
                                                    </div>
                                                    
                                                ))}
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
};

export default TeamMembers2;