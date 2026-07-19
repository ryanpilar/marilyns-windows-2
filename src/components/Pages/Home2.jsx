
import { useEffect } from 'react';

import SEO from "../Segments/SEO";
import Header3 from "../Common/Header3";
import Slider22 from "./../Segments/Slider22";
import About from "./../Segments/About";
import About22 from '../Segments/About22';
import Services from "./../Segments/Services";
import ClientsLogoEmbla from "./../Segments/ClientsLogoEmbla";
import TestimonialsEmbla from "./../Segments/TestimonialsEmbla";
import LatestProjectsEmbla from "./../Segments/LatestProjectsEmbla";

import Contact from "../Segments/Contact";
import Footer from "../Common/Footer";
import { homeSuppliers } from "../../content/homeContent";
import { SEO_IMAGES } from "../../content/seoImages";

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
        title={`Custom Window Treatments in Milton | Marilyn's Windows`}
        description={`Custom drapery, blinds, shades and soft furnishings handcrafted in Milton and serving Burlington, Oakville, Mississauga and surrounding areas.`}
        location={ cononicalLocation.pathname }
        robots={'index, follow'}
        image={SEO_IMAGES.home}
        imageAlt="Grand living room with custom floor-to-ceiling drapery and motorized blinds"
      />

      <Header3 />

      <main className="page-content home-page-layout">
        <Slider22 />
        <About />
        <About22 />

        <Services showButton={true} />
        <LatestProjectsEmbla />
        <ClientsLogoEmbla content={homeSuppliers} />
        <TestimonialsEmbla />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
};

export default Home2;
