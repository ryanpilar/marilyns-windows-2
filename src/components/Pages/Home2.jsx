import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import {createClient} from 'contentful'


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



const Home2 = () => {

    const [ backgroundImages, setBackgroundImages ] = useState(null)
    const [ content, setContent ] = useState(null)

    const client = createClient({                                   // contentful connect
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    })

    useEffect( () => {

        const getContentfulContents = async() => {
            try {

                await client.getEntries().then( allEntries => {
                    
                    const aboutContent = allEntries.items.filter( entry => entry.fields.location === 'about')
                    const servicesContent = allEntries.items.filter( entry => entry.fields.location === 'services')
                    console.log('SERVICES', servicesContent[0].fields)
                    
                    setContent({ about: aboutContent[0].fields, services: servicesContent[0].fields })
                })
            }
            catch (error) {
                console.log('this error arose from the client.getEntries() call to contentful')
            }
        }
        getContentfulContents()

        const getBackgrounds = async() => {                          // contentful get data
            try {

                await client.getEntries({content_type: 'background'}).then( allEntries => {

                    // const serviceImage = allEntries.items.filter( entry => entry.fields.location === 'services')
                    // const statisticsImage = allEntries.items.filter( entry => entry.fields.location === 'statistics')

                    // setBackgroundImages({services: serviceImage[0].fields, statistics: statisticsImage[0].fields})
                    
                })
            }
            catch (error) {
                console.log('this error arose from the client.getEntries() call to contentful and looking for background images')
            }
        }

        getBackgrounds()

        

    }, [])

        return (
            <>
                <Header3 />

                <div className="page-content">

                    <Slider22 />

                    { content && 
                    <>
                    <About content={content.about} />
                    <Services content={content.services} /> 
                    </>
                    }
                    <ClientsLogo />
                    <LatestProjects />

                    { backgroundImages && 
                    <Statistics bgimg={backgroundImages.statistics} /> 
                    }
                    
                    <Testimonials />
                    <Contact />
 
                </div>
                <Footer />
            </>
        );
    };

export default Home2;