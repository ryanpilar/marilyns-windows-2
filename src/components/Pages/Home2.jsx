
import { useEffect } from 'react';

import SEO from "../Segments/SEO";
import Header3 from "../Common/Header3";
import Slider22 from "./../Segments/Slider22";
import About from "./../Segments/About";
import About22 from '../Segments/About22';
import Services from "./../Segments/Services";
import ClientsLogo from "./../Segments/ClientsLogo";
import Testimonials from "./../Segments/Testimonials";
import LatestProjects from "./../Segments/LatestProjects";

import Contact from "../Segments/Contact";
import Footer from "../Common/Footer";

import { useLocation } from "react-router-dom";

const Home2 = () => {

  const cononicalLocation = useLocation();

  useEffect(() => {
    window.addEventListener('load', () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener('load', () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);

  return (
    <>
      <SEO
        title={`Home | Crafting High-End Custom Drapes & Window Treatments in Milton, Ontario and Beyond.`}
        description={`Custom handcrafted window coverings, curtains, shades, blinds and soft furnishings. Serving Milton, Burlington, Oakville, Mississauga and surrounding areas.`}
        location={ cononicalLocation.pathname }
        robots={'index, follow'}
        
      />

      <Header3 />

      <div className="page-content home-page-layout">
        <Slider22 />
        <About />
        <About22 />

        <Services showButton={true} />
        <LatestProjects />
        <ClientsLogo supplierList={false} />
        <Testimonials />
        <Contact />
      </div>
      
      <Footer />
    </>
  );
};

export default Home2;
