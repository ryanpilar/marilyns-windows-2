import React from 'react';
import Header from '../Common/Header';
import Footer3 from '../Common/Footer3';
import Slider5 from './../Segments/Slider5';
import About from './../Segments/About';
import LatestProjects from './../Segments/LatestProjects';
import Blog from './../Segments/Blog';
import ClientsLogo2 from './../Segments/ClientsLogo2';
import Statistics3 from './../Segments/Statistics3';
import Testimonials from './../Segments/Testimonials';

class Home5 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider5 />
                    <About colorclass1="" colorclass2="text-yellow" />
                    <LatestProjects />
                    <Blog colorclass="text-yellow" />
                    <ClientsLogo2 />
                    <Statistics3 />
                    <Testimonials />
                </div>
                <Footer3 />
            </>
        );
    };
};

export default Home5;