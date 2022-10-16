import React from 'react';
import Header3 from '../Common/Header3';
import Footer2 from '../Common/Footer2';
import Slider4 from './../Segments/Slider4';
import About from './../Segments/About';
import LatestProjects from './../Segments/LatestProjects';
import Blog from './../Segments/Blog';
import ClientsLogo2 from './../Segments/ClientsLogo2';
import Statistics2 from './../Segments/Statistics2';
import Testimonials from './../Segments/Testimonials';

class Home4 extends React.Component {
    render() {
        return (
            <>
                <Header3 />
                <div className="page-content">
                    <Slider4 />
                    <About colorclass1="text-yellow" colorclass2="" />
                    <LatestProjects />
                    <Blog colorclass="text-yellow" />
                    <ClientsLogo2 />
                    <Statistics2 />
                    <Testimonials />
                </div>
                <Footer2 />
            </>
        );
    };
};

export default Home4;