import React from 'react';
import { NavLink } from 'react-router-dom';

import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import About2 from './../Segments/About2';
import Services from './../Segments/Services';
import Story from './../Segments/Story';
import Blog from './../Segments/Blog';





var bnrimg = require('./../../images/banner/3.jpg');


var img1 = require('./../../images/gallery/pic2.jpg');
var img2 = require('./../../images/gallery/pic6.jpg');
var img3 = require('./../../images/gallery/pic1.jpg');
var img4 = require('./../../images/gallery/pic3.jpg');
var img5 = require('./../../images/gallery/pic5.jpg');
var img6 = require('./../../images/gallery/pic4.jpg');
var img7 = require('./../../images/gallery/pic8.jpg');

class AboutUs extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Fusing logic with imagination and truth with discovery." pagename="About Us" bgimage={bnrimg.default}/>
                    <About2 />
                    <Story />
                    {/* <Services /> */}
                    {/* <Story /> */}
                    {/* <Blog colorclass="text-white" /> */}
                </div>

                <Footer />
            </>
        );
    };
};

export default AboutUs;