import React from 'react';
import Header3 from '../Common/Header3';
// import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Contact from '../Segments/Contact';


// import Slider2 from './../Segments/Slider2';
import Slider22 from './../Segments/Slider22';
import About from './../Segments/About';
import LatestProjects from './../Segments/LatestProjects';
import Blog from './../Segments/Blog';
import Statistics from './../Segments/Statistics';
import Testimonials from './../Segments/Testimonials';
import ClientsLogo from './../Segments/ClientsLogo';

import Story from './../Segments/Story';

import Services from './../Segments/Services';
import BlogComments from '../Segments/BlogComments';

class Home2 extends React.Component {
    render() {
        return (
            <>
                <Header3 />
                {/* <Header /> */}
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