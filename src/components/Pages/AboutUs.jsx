import React from 'react';
// import { NavLink } from 'react-router-dom';

import Header2 from '../Common/Header2';
import Banner from './../Segments/Banner';
import About2 from './../Segments/About2';
import Story from './../Segments/Story';
import Footer from '../Common/Footer';

// var bnrimg = require('./../../images/banner/sewing-machine-lamp-freepic.png');
// var bnrimg = require('./../../images/banner/workroom-misc.jpg');
// var bnrimg = require('./../../images/banner/istockphoto-92190914-1024x1024.jpg');
// var bnrimg = require('./../../images/banner/istockphoto-1212171439-1024x1024.jpg');
var bnrimg = require('./../../images/background/fabric-bolts.jpg');

class AboutUs extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Fusing logic with imagination and truth with discovery." pagename="About Us" bgimage={bnrimg.default}/>
                    <About2 />
                    <Story />
                </div>

                <Footer />
            </>
        );
    };
};

export default AboutUs;