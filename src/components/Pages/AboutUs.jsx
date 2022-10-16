import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import About2 from './../Segments/About2';
import TeamMembers2 from './../Segments/TeamMembers2';
import Services from './../Segments/Services';
import Story from './../Segments/Story';

var bnrimg = require('./../../images/banner/3.jpg');

class AboutUs extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Fusing logic with imagination and truth with discovery." pagename="About Us" bgimage={bnrimg.default}/>
                    <About2 />
                    <TeamMembers2 />
                    <Services />
                    <Story />
                </div>

                <Footer />
            </>
        );
    };
};

export default AboutUs;