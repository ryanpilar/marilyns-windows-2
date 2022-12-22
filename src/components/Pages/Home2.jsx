import React from 'react';
import { useEffect, useState } from 'react';
import {createClient} from 'contentful'
// import { Helmet } from 'react-helmet-async';


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
import SEO from '../Segments/SEO';



const Home2 = () => {

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
                    const statsContent = allEntries.items.filter( entry => entry.fields.location === 'statistics')
                    const galleryContent = allEntries.items.filter( entry => entry.fields.location === 'gallery')
                    const testimonialContent = allEntries.items.filter( entry => entry.fields.location === 'testimonials')
                    const background = allEntries.items.filter( entry => entry.fields.location === 'background')
                    // const sliderContent = allEntries.items.filter( entry => entry.fields.location === 'slider')

                    // console.log('testimonialContent', testimonialContent)
                    
                    setContent({ 
                        about: aboutContent[0].fields, 
                        services: servicesContent[0].fields,
                        stats: statsContent[0].fields,
                        projects: galleryContent,
                        testimonials: testimonialContent, 
                        background: background
                    })
                })
            }
            catch (error) {
                console.log('this error arose from the client.getEntries() call to contentful')
            }
        }
        getContentfulContents()

    }, [])

    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    const selectRandom = (projects) => {
        return shuffle(projects).slice(0,9)
    }

    
        return (
            <>
                <SEO 
                    // title={`Marilyn's Windows | High-end Custom Drapery`} 
                    title={`Marilyn's Windows | High End Custom Drapes in Milton, Ontario`}
                    description={`Custom handcrafted window coverings, curtains, shades, blinds and soft furnishings. Serving Milton, Burlington, Oakville, Mississauga and surrounding areas.`} 
                />

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
                    { content &&
                    <LatestProjects content={selectRandom(content.projects)}/>
                    }
                    { content &&
                    <>
                    <Statistics content={content.stats} />
                    <Testimonials content={content.testimonials} bgimg={content.background} />
                    </> 
                    }
                    <Contact />
 
                </div>
                <Footer />
            </>
        );
    };

export default Home2;