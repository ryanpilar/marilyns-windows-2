import React from 'react';

import Header3 from '../Common/Header3';
import Slider22 from './../Segments/Slider22';
import About from './../Segments/About';
import Services from './../Segments/Services';
import ClientsLogo from './../Segments/ClientsLogo';
import Testimonials from './../Segments/Testimonials';
import LatestProjects from './../Segments/LatestProjects';
import Statistics from './../Segments/Statistics';
import Contact from '../Segments/Contact';
import Footer from '../Common/Footer';

class Home2 extends React.Component {
    render() {
        return (
            <>
                <Header3 />

                <div className="page-content">

                    <Slider22 />
                    <About />
                    <Services />
                    <ClientsLogo />
                    <Testimonials />
                    <LatestProjects />
                    <Statistics />
                    <Contact />
 
                </div>
                <Footer />
            </>
        );
    };
};

export default Home2;