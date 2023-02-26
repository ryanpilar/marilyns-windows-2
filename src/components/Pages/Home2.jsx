
import { useEffect, useLayoutEffect } from 'react';

import SEO from "../Segments/SEO";
import Header3 from "../Common/Header3";
import Slider22 from "./../Segments/Slider22";
import About from "./../Segments/About";
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

  // const location = useLocation();

  // useEffect(() => {

  //   // GA4React.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID);


  //   GA4React.send({ hitType: "pageview", page: location.pathname });

  // }, []);
  

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
        title={`MMarilyn's Windows | Home | Sewing High End Custom Drapes in Milton, Ontario`}
        description={`Custom handcrafted window coverings, curtains, shades, blinds and soft furnishings. Serving Milton, Burlington, Oakville, Mississauga and surrounding areas.`}
      />

      <Header3 />

      <div className="page-content">
        <Slider22 />
        <About />
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
