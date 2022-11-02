import React from 'react';


import Header2 from '../Common/Header2';
import Banner from './../Segments/Banner';
import About2 from './../Segments/About2';
import Story from './../Segments/Story';
import Footer from '../Common/Footer';

var bnrimg = require('./../../images/background/bg-11.jpg');

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