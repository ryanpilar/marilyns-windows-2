import React from "react";
import { useEffect, useState } from "react";

import Header2 from "../Common/Header2";
import Banner from "../Segments/Banner";
import About2 from "../Segments/About2";
// import Story from './../Segments/Story';
import Footer from "../Common/Footer";
import SEO from "../Segments/SEO";
import { createClient } from "contentful";
import { NavLink } from "react-router-dom";

const AboutMe = () => {
  const [banner, setBanner] = useState(null);
  const [imageCarousel, setImageCarousel] = useState(null);

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
          const aboutContent = contentfulContent.filter(
            (entry) => entry.fields.location === "aboutFull"
          );
          console.log("aboutContent", aboutContent);

          setBanner({
            image: {
              data: aboutContent[0].fields.banner[0],
            },
          });
          setImageCarousel({
            images: aboutContent[0].fields.images,
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
        // title={`Marilyn's Windows | High-end Custom Drapery`}
        title={`Marilyn's Windows | My Story `}
        description={`Professionally sewing for over 30 years and specializing in the tailored creation of hand-sewn curtains, drapes, blinds, and custom bedding`}
      />
      <Header2 />

      {imageCarousel && (
        <div className="page-content">
          <Banner
            title="Fusing logic with imagination and truth with discovery."
            pagename="About Us"
            bgimage={banner.image.data.secure_url}
          />

          {/* BREADCRUMB ROW */}
          <div className="container ">
            <div className="p-tb20">
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>My Story</li>
                </ul>
              </div>
            </div>
          </div>


          <About2 carousel={imageCarousel} />
        </div>
      )}
      <Footer />
    </>
  );
};

export default AboutMe;
