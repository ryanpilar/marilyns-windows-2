import React from "react";
import { useEffect, useState } from "react";

import Header3 from "../Common/Header3";
import Banner from "./../Segments/Banner";
import Banner2 from "../Segments/Banner2";
// import Story from './../Segments/Story';
import Service from "./../Segments/Service";
import Service2 from "../Segments/Service2";
import Footer from "../Common/Footer";
import SEO from "../Segments/SEO";
import { createClient } from "contentful";
import { Link } from "react-router-dom";
import Contact from "../Segments/Contact";
import ClientsLogo from "../Segments/ClientsLogo";
import { useLocation } from "react-router-dom";

const Services = () => {
  const [banner, setBanner] = useState(null);
  const [testimonial, setTestimonial] = useState(null);
  const [designProcess, setDesignProcess] = useState(null);
  const [affiliates, setAffiliates] = useState(null);

  const client = createClient({
    // contentful connect
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("load", () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener("load", () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);

  // useEffect(() => {
  //   if (!location.hash) {
  //     window.scrollTo(0, 0);
  //   }
  // }, [location])

  useEffect(() => {
    const getContentfulContents = async () => {
      try {
        await client
          .getEntries({ content_type: "servicesFull" })

          // await client.getEntries()
          .then((allEntries) => {
            const servicesContent = allEntries.items;

            setBanner({
              image: servicesContent[0].fields.topBanner[0].secure_url,
            });
            setTestimonial({
              image: servicesContent[0].fields.testimonialImage[0],
            });
            setDesignProcess({
              consultation: {
                image: servicesContent[0].fields.consultationImage[0],
              },
              ideas: {
                image: servicesContent[0].fields.draperyIdeaImage[0],
              },
              install: {
                image: servicesContent[0].fields.installImage[0],
              },
              warranty: {
                image: servicesContent[0].fields.warrantyImage[0],
              },
            });
          });
        await client
          .getEntries({ content_type: "affiliates" })
          .then((allEntries) => {
            const affiliatesContent = allEntries.items;

            setAffiliates(affiliatesContent);
          });
      } catch (error) {
        console.log(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };
    getContentfulContents();
  }, []);

  return (
    <>
      <SEO
        title={`Marilyn's Windows | Services | Sewing Custom Drapery for the Halton Region`}
        description={`Specializing in custom drapery, high-end blinds and custom soft furnishings. Marilyn's work defines the art of couture drapery and interior design.`}
      />
      <Header3 />
      {affiliates && banner && designProcess && (
      <div className="page-content">
        
          <>
            <Banner
              heading="Services"
              title="Serving Milton, Georgetown, Burlington, Oakville Mississauga and surrounding areas."
              bgimage={banner.image}
            />

            <div className="container">
              <div className="max-mid-container">
                {/* BREADCRUMB ROW */}
                <div className="p-t20">
                  <div>
                    <ul className="wt-breadcrumb breadcrumb-style-2">
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>Services</li>
                    </ul>
                  </div>
                </div>
                {/* BREADCRUMB ROW END */}
              </div>
            </div>

            <Service2 />

            <Service process={designProcess} />

            <ClientsLogo content={affiliates} supplierList={true} />

            {/* <Banner
              heading="Some Words From Marilyn"
              title="Free Consultation - Drapery and Design Ideas - 600 Fabric Books - Professional Installation - Maintenance and Warranty."

              quote="I am a skilled and experienced sewing professional with a
                  passion for creating beautiful and functional drapery and
                  every other custom window treatment you can imagine. I have a
                  deep understanding of various fabrics, patterns, and
                  techniques, and I am able to use this knowledge to create
                  custom designs that meet my clients' needs."
              quote2="I am also able to work with a wide range of clients, 
                  from individual customers to talented interior designers, and I am 
                  always willing to go the extra mile to ensure their satisfaction. 
                  I am organized, detail-oriented, and able to work under tight 
                  deadlines, making me an ideal candidate for any project. Overall, 
                  I am a dedicated and talented sewing professional who is committed 
                  to creating beautiful and high-quality products."
              bgimage={banner.image}
            /> */}
            <Contact />
          </>
      </div>
      )}


      <Footer />
    </>
  );
};

export default Services;
