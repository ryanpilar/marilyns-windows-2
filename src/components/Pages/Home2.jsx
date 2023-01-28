import Header2 from "../Common/Header2";
import Slider22 from "./../Segments/Slider22";
import About from "./../Segments/About";
import Services from "./../Segments/Services";
import ClientsLogo from "./../Segments/ClientsLogo";
import Testimonials from "./../Segments/Testimonials";
import LatestProjects from "./../Segments/LatestProjects";

import Contact from "../Segments/Contact";
import Footer from "../Common/Footer";
import SEO from "../Segments/SEO";

import { useEffect, useLayoutEffect } from 'react';

const Home2 = () => {

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
        // title={`Marilyn's Windows | High-end Custom Drapery`}
        title={`Marilyn's Windows | High End Custom Drapes in Milton, Ontario`}
        description={`Custom handcrafted window coverings, curtains, shades, blinds and soft furnishings. Serving Milton, Burlington, Oakville, Mississauga and surrounding areas.`}
      />

      <Header2 />

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
