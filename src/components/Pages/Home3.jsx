import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Slider3 from './../Segments/Slider3';
import About from './../Segments/About';
import LatestProjects from './../Segments/LatestProjects';
import WhoWeAre from './../Segments/WhoWeAre';
import TeamMembers from './../Segments/TeamMembers';
import Blog from './../Segments/Blog';
import Statistics from './../Segments/Statistics';
import Testimonials from './../Segments/Testimonials';
import ClientsLogo from './../Segments/ClientsLogo';

class Home3 extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Slider3 />
                    <About />
                    <LatestProjects />
                    <WhoWeAre />
                    <TeamMembers />
                    <Blog colorclass="text-white" />
                    <Statistics />
                    <Testimonials />
                    <ClientsLogo />
                </div>

                <Footer />
            </>
        );
    };
};

export default Home3;