import React from 'react';


import Header2 from '../Common/Header2';
import Banner from '../Segments/Banner';
import About2 from '../Segments/About2';
// import Story from './../Segments/Story';
import Footer from '../Common/Footer';
import SEO from '../Segments/SEO';


var bnrimg = require('./../../images/background/bg-11.jpg');

class AboutMe extends React.Component {
    render() {
        return (
            <>
                <SEO 
                    // title={`Marilyn's Windows | High-end Custom Drapery`} 
                    title={`Marilyn's Windows | My Story `}
                    description={`Professionally sewing for over 30 years and specializing in the tailored creation of hand-sewn curtains, drapes, blinds, and custom bedding`} 
                />
                <Header2 />
                <div className="page-content">
                    <Banner title="Fusing logic with imagination and truth with discovery." pagename="About Us" bgimage={bnrimg.default}/>
                    <About2 />
                    {/* <Story /> */}
                </div>

                <Footer />
            </>
        );
    };
};

export default AboutMe;