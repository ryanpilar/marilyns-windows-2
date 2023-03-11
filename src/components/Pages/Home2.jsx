
import { useEffect, useLayoutEffect } from 'react';

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

// import GoogleAnalytics from '../Segments/GoogleAnalytics';
import { useLocation } from "react-router-dom";
import GA4React from "react-ga4";

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

  useLayoutEffect(() => {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/custom.js");
  }, []);



  return (
    <>
      <SEO
        title={`Marilyn's Windows | Home | Crafting High-End Custom Drapes & Window Treatments in Milton, Ontario and Beyond.`}
        description={`Custom handcrafted window coverings, curtains, shades, blinds and soft furnishings. Serving Milton, Burlington, Oakville, Mississauga and surrounding areas.`}
        location={ cononicalLocation.pathname }
        
      />

      <Header3 />

      <div className="page-content">
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
