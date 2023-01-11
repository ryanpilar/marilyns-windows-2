import React from "react";
import { useEffect, useState } from "react";

import Header2 from "../Common/Header2";
import Banner from "./../Segments/Banner";
import Banner2 from "../Segments/Banner2";
// import Story from './../Segments/Story';
import Service from "./../Segments/Service";
import Service2 from "../Segments/Service2";
import Footer from "../Common/Footer";
import SEO from "../Segments/SEO";
import { createClient } from "contentful";
import { NavLink } from "react-router-dom";

const Services = () => {
  const [banner, setBanner] = useState(null);
  const [testimonial, setTestimonial] = useState(null);
  const [designProcess, setDesignProcess] = useState(null);

  const client = createClient({
    // contentful connect
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  useEffect(() => {
    const getContentfulContents = async () => {
      try {
        await client.getEntries().then((allEntries) => {
          const contentfulContent = allEntries.items;
          const servicesContent = contentfulContent.filter(
            (entry) => entry.fields.location === "servicesFull"
          );

          
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
        title={`Marilyn's Windows | Services | Sewing Custom Drapery`}
        description={`Specializing in hand-sewn drapes, high-end blinds and custom bedding. Marilyn's work defines the art of couture curtains and interior design.`}
      />

      <Header2 />

      <div className="page-content">
        {banner && (
          <Banner
            // heading="Services"
            title="Serving Milton, Georgetown, Burlington, Oakville Mississauga and surrounding areas."
            pagename="Services"
            bgimage={banner.image}
          />
        )}

        <div className="container">
          <div className="max-mid-container">
            {/* BREADCRUMB ROW */}
            <div className="p-t20">
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB ROW END */}

        {testimonial && <Service2 testimonial={testimonial} />}

        {/* {banner && (
          <Banner2
            // heading="The Creative Process"
            title="Free Consultation - Drapery and Design Ideas - 600 Fabric Books - Professional Installation - Maintenance and Warranty."
            pagename="Services"
            bgimage={banner.image}
          />
        )} */}

        {designProcess && <Service process={designProcess} />}
      </div>

      <Footer />
    </>
  );
};

export default Services;
