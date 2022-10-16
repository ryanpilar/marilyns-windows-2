import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Slider from './../Segments/Slider';
import About from './../Segments/About';
import LatestProjects from './../Segments/LatestProjects';
import WhoWeAre from './../Segments/WhoWeAre';
import TeamMembers from './../Segments/TeamMembers';
import Blog from './../Segments/Blog';
import Statistics from './../Segments/Statistics';
import Testimonials from './../Segments/Testimonials';
import ClientsLogo from './../Segments/ClientsLogo';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider />
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

export default Home;