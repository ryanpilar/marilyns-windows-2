import React from "react";
import { useEffect, useState } from "react";

import Header2 from "../Common/Header2";
import Banner from "../Segments/Banner";
import About2 from "../Segments/About2";
import AboutImages from "../Segments/AboutImages";
import AboutColumns from "../Segments/AboutColumns";

// import Story from './../Segments/Story';
import Footer from "../Common/Footer";
import SEO from "../Segments/SEO";
import { createClient } from "contentful";
import { Link } from "react-router-dom";

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

          <div className="section-full p-b90 bg-gray square_shape1 square_shape2 tm-about2-wrap">
            {/* BREADCRUMB ROW */}
            <div className="container ">
              <div className="p-tb20">
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>My Story</li>
                </ul>
              </div>

              <About2 carousel={imageCarousel} />

              <AboutColumns>
                <div className="row m-t20 text-black">
                  <div className="section-content">
                  <div className="col-sm-12"><h2>Some Heading Content</h2></div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-r40">
                    
                      <p>
                        For over 30 years, Marilyn has specialized in the
                        tailored creation of hand-sewn curtains, drapes, blinds,
                        and home bedding and accents with the world’s finest
                        fabrics, hardware, and accessories. Masterful attention
                        to detail and excellent customer service are woven into
                        the fabric of every piece that leaves Marilyn’s sewing
                        machines. Together with her team of professional
                        seamstresses and installers, Marilyn is defining the
                        exquisite art of custom design and couture window
                        dressings.
                      </p>
                      <p>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-r40">
                      <p>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                      <p>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 col-sm-12">
                      <p>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div> */}
                  </div>
                </div>
              </AboutColumns>
              <AboutImages />
              <AboutColumns>
                <div className="row m-t20 text-black">
                  <div className="section-content">
                  <div className="col-sm-12"><h2>Some Heading Content</h2></div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-r40">
                    
                      <p>
                        For over 30 years, Marilyn has specialized in the
                        tailored creation of hand-sewn curtains, drapes, blinds,
                        and home bedding and accents with the world’s finest
                        fabrics, hardware, and accessories. Masterful attention
                        to detail and excellent customer service are woven into
                        the fabric of every piece that leaves Marilyn’s sewing
                        machines. Together with her team of professional
                        seamstresses and installers, Marilyn is defining the
                        exquisite art of custom design and couture window
                        dressings.
                      
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                      <p>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-r40">
                      <p>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                      <p>
                        For over 30 years, Marilyn has specialized in the
                        tailored creation of hand-sewn curtains, drapes, blinds,
                        and home bedding and accents with the world’s finest
                        fabrics, hardware, and accessories. Masterful attention
                        to detail and excellent customer service are woven into
                        the fabric of every piece that leaves Marilyn’s sewing
                        machines. Together with her team of professional
                        seamstresses and installers, Marilyn is defining the
                        exquisite art of custom design and couture window
                        dressings.
                      
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 col-sm-12">
                      <p>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div> */}
                  </div>
                </div>
              </AboutColumns>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AboutMe;
