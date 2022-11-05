import React from 'react';


import Header2 from '../Common/Header2';
import Banner from './../Segments/Banner';
// import Story from './../Segments/Story';
import Service from './../Segments/Service'
import Service2 from '../Segments/Service2';
import Footer from '../Common/Footer';


var bnrimg = require('../../images/background/bg-11.jpg');
// var bnrimg = '';


const Services = () => {

        return (
            <>
                <Header2 />

                    <div className="page-content">
                        <Banner title="Serving Milton, Georgetown, Burlington, Oakville Mississauga and surrounding areas." pagename="Services" bgimage={bnrimg.default}/>
                        <Service2 />
                        <Service />
                    </div>

                <Footer />
            </>
        );
    };

export default Services;