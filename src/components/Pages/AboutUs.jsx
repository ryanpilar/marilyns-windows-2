import React from 'react';
import Header3 from '../Common/Header3';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import About2 from './../Segments/About2';
import Services from './../Segments/Services';
import Story from './../Segments/Story';

var bnrimg = require('./../../images/banner/3.jpg');

class AboutUs extends React.Component {
    render() {
        return (
            <>
                <Header3 />
                <div className="page-content">
                    <Banner title="Fusing logic with imagination and truth with discovery." pagename="About Us" bgimage={bnrimg.default}/>
                    <About2 />
                    <Services />
                    {/* <Story /> */}
                </div>

                <Footer />
            </>
        );
    };
};

export default AboutUs;