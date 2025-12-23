import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import SEO from "../Segments/SEO";
import Header3 from "../Common/Header3";
import Banner from "../Segments/Banner";
import About2 from "../Segments/About2";
import AboutImages from "../Segments/AboutImages";
import AboutColumns from "../Segments/AboutColumns";
import LatestProjects from "../Segments/LatestProjects";
import Footer from "../Common/Footer";
import createContentfulClient from "../../utils/createContentfulClient";
import { logError } from "../../utils/logger";

const AboutMe = () => {
  const [banner, setBanner] = useState(null);
  const [imageCarousel, setImageCarousel] = useState(null);
  const [imagesTwo, setImagesTwo] = useState(null);
  const [imagesThree, setImagesThree] = useState(null);

  const cononicalLocation = useLocation();

  // Get content from Contentful:
  useEffect(() => {
    const getContentfulContents = async () => {
      try {
        const client = createContentfulClient()


        await client.getEntries().then((allEntries) => {
          const contentfulContent = allEntries.items;
          const aboutContent = contentfulContent.filter(
            (entry) => entry.fields.location === "aboutFull"
          );

          setBanner({
            image: {
              data: aboutContent[0].fields.banner[0],
            },
          });
          setImageCarousel({
            images: aboutContent[0].fields.images,
          });
          setImagesTwo(aboutContent[0].fields.images2);
          setImagesThree(aboutContent[0].fields.images3);
        });
      } catch (error) {
        logError(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };
    getContentfulContents();
  }, []);

  return (
    <>
      <SEO
        title={`Marilyn's Windows | My Story `}
        description={`Professionally sewing for over 30 years and specializing in the tailored creation of hand-sewn curtains, drapes, blinds, and custom bedding`}
        location={ cononicalLocation.pathname }
        robots={'index, follow'}

      />
      {/* Navigation  */}
      <Header3 />

      <div className="page-content">
        {/* BANNER  */}
        {banner && (
          <Banner
            title="Marilyn's Story"
            pagename="About Us"
            bgimage={banner.image.data.secure_url}
            posLeft={true}
            // posRight={true}

          />
        )}

        <div className="section-full p-b90 bg-gray tm-about2-wrap">
          <div className="container ">
            {/* BREADCRUMB Start  */}
            <div className="p-t20 p-l30">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>My Story</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* BREADCRUMB END  */}

            {/* INTRO & 1ST SET OF IMAGES START */}
            {imageCarousel && <About2 images={imageCarousel} />}

            {/* 1ST COLUMNER TEXT */}
            <AboutColumns>
              <div className="row m-t20 text-black">
                <div className="section-content">
                  <div className="col-sm-12">
                    <h2
                      id="peaches"
                      className="text-uppercase font-30 font-weight-300"
                    >
                      Peaches, Fabric & Factories
                    </h2>
                  </div>
                  <div
                    id="niagara"
                    className="col-lg-6 col-md-6 col-sm-12 p-r20"
                  >
                    <h3 className="text-uppercase font-weight-600 m-a0 p-a0 font-16 ">
                      Niagara On The Lake - my early years
                    </h3>
                    <p>
                      Nestled amongst the lush peach orchards of Niagara on the
                      Lake, Ontario, my childhood was a tapestry of hard work
                      and creative expression. Raised on the family farm, I
                      discovered my love for sewing at an early age, fashioning
                      clothing for my dolls with my own two hands. With no prior
                      influence or guidance from my mother or grandmother, who
                      in their own right were masters at crocheting, I taught
                      myself to sew and honed my skills through determination
                      and practice. By my teenage years, I saved up enough money
                      from my summer job at the local ice cream store, to
                      purchase my very own sewing machine, which became a proud
                      symbol of my unwavering passion and drive.
                    </p>
                    <p>
                      At just 16, I took my first step into the world of
                      professional sewing, landing a job at our local fabric
                      store. There, I fully immersed myself in the craft,
                      refining my skills in fabric preparation, machine
                      maintenance, and advanced sewing classes. Unbeknownst to
                      me at the time, the experiences of these years would prove
                      to be immensely formative. These were the years that set
                      the stage for my professional journey and laid the
                      groundwork for my success.
                    </p>
                    <h3
                      id="fabricsToCars"
                      className="text-uppercase font-weight-600 m-a0 p-a0 font-16 "
                    >
                      From Fabrics to Cars and Back
                    </h3>
                    <p>
                      I pursued a double major and graduated with a Bachelor of
                      Science and Textiles from the University of Guelph.
                      Despite my growing interest in textiles and design, job
                      prospects in that industry were limited, but undeterred I
                      remained.{" "}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 p-r20">
                    <p>
                      Fuelled by my ambition to build a better future and to
                      save for a house, I pivoted towards a career in automotive
                      manufacturing at General Motors. It was during this time
                      in my life that I met my future husband, and together we
                      established roots in Milton, Ontario, started a family,
                      and purchased our home. My passion for sewing never faded
                      and I soon found myself weaving my way back into the
                      industry.
                    </p>
                    <p>
                      As I continued to cultivate my skills through various
                      sewing workshops, one opportunity led to the next, and I
                      enrolled in a window treatment specific sewing course at
                      the local community college. With my trusty sewing machine
                      in tow, I sewed my very first pleated drapes! Little did I
                      know, this was just the beginning of my life-long journey
                      into the wonderful eclectic world of custom drapery.
                    </p>
                    <h3
                      id="backToMyRoots"
                      className="text-uppercase font-weight-600 m-a0 p-a0 font-16 "
                    >
                      Back To My Roots
                    </h3>
                    <p>
                      I’m incredibly blessed to be doing what I have been doing
                      for all these years. Although my life has mostly been
                      centred around family and business, the many influences
                      from growing up on the farm have never left me. If you
                      asked me what I am doing when I’m not at my sewing table,
                      it would unquestionably be gardening. In my spare time, I
                      tend to my beautiful garden, especially my nasturtiums and
                      geraniums. To this day, I dream about moving back onto a
                      farm, where I can spend my days surrounded by nature,
                      still working with my hands, and living a simple life
                      close to the land. Perhaps, one day, this will still
                      happen. I digress…
                    </p>
                  </div>
                </div>
              </div>
            </AboutColumns>

            {/* 2ND SET OF IMAGES */}
            {imagesTwo && <AboutImages id="aboutImages2" images={imagesTwo} />}

            {/* 2ND COLUMNER TEXT */}
            <AboutColumns>
              <div className="row m-t20 text-black">
                <div className="section-content">
                  <div className="col-md-7 col-sm-12">
                    <h2
                      id="timeless"
                      className="text-uppercase font-30 font-weight-300"
                    >
                      Crafting Timeless Window Treatments: A Holistic Approach
                      to Form and Function
                    </h2>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 p-r20">
                    <h3
                      id="allInclusive"
                      className="text-uppercase font-weight-600 m-a0 p-a0 font-16 "
                    >
                      My all inclusive approach
                    </h3>
                    <p>
                      I am proud to showcase my all-inclusive approach to this
                      timeless craft. My unique approach allows me to bring my
                      clients’ vision to life. From start to finish, I am
                      passionate about guiding each client through the process,
                      sharing my knowledge and recommendations every step of the
                      way, and making them feel empowered to select and create
                      the window treatment of their dreams. I carefully create
                      the desired look for each project by using my design books
                      and extensive knowledge in materials and fabrics.
                    </p>
                    <p>
                      As an artisanal designer, I utilize a blend of technical
                      expertise and creative vision to bring each project to
                      life. In my workroom, I have 7 specialized sewing machines
                      that serve as a foundation to my meticulous craftsmanship,
                      while my background in interior design supports my ability
                      to bring conceptual ideas to life.
                    </p>
                    <h3
                      id="reading"
                      className="text-uppercase font-weight-600 m-a0 p-a0 font-16 "
                    >
                      Reading the room
                    </h3>
                    <p>
                      There is an art to creating timeless long-lasting window
                      treatments. The key to success lies in taking a holistic
                      approach that blends form and function, and that’s exactly
                      what I deliver. I ‘read the room’ in terms of intent and
                      function to ensure that each project is customized to meet
                      the specific needs of the client and the space we are
                      working with.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 p-r20">
                    <p>
                      My repertoire of blinds, shades, and custom automation
                      ensures each client has a tailored experience. I embrace
                      complexity, pushing the boundaries of what is possible, to
                      create unforgettable designs that stand the test of time.
                      From conception to execution, every detail is fastidiously
                      tended to, elevating the look and feel of every space I
                      touch. No project is too big, no challenge too complex.
                      From the very first stitch to the final touch, I pour my
                      heart and soul into each project, always striving for
                      absolute perfection.
                    </p>
                    <h3
                      id="fostering"
                      className="text-uppercase font-weight-600 m-a0 p-a0 font-16 "
                    >
                      Fostering a supportive community
                    </h3>
                    <p>
                      Recognizing the power of collaboration and community, I am
                      proud to have been a part of the Business Networking
                      International (BNI) group for 21 years. This involvement
                      has opened doors and created many opportunities, bringing
                      me into a diverse network of talented designers. I am a
                      firm believer in the value of sharing knowledge and
                      fostering a supportive community, and my experience in BNI
                      has only reinforced that belief. Whether collaborating on
                      projects, exchanging best practices, or simply being a
                      listening ear, I am consistently inspired by the
                      creativity, passion, and unwavering dedication of my
                      fellow designers.
                    </p>
                  </div>
                </div>
              </div>
            </AboutColumns>

            {/* 3RD SET OF IMAGES */}
            {imagesThree && (
              <AboutImages id="aboutImages3" images={imagesThree} />
            )}

            {/* 3RD COLUMNER TEXT */}
            <AboutColumns>
              <div className="row m-t20 text-black">
                <div className="section-content">
                  <div className="col-md-7 col-sm-12">
                    <h2
                      id="personalizedService"
                      className="text-uppercase font-30 font-weight-300"
                    >
                      Personalized Service from Start to Finish and Beyond - My
                      commitment to you
                    </h2>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 p-r20">
                    <h3
                      id="aftercare"
                      className="text-uppercase font-weight-600 m-a0 p-a0 font-16 "
                    >
                      Exceptional Aftercare
                    </h3>
                    <p>
                      My commitment to you is focused on matching your vision
                      with my quality work. It starts with our very first call
                      and from there, I endeavour to inspire and bring your
                      vision to a tangible reality. As I guide you through each
                      step of bringing your custom window treatment to life, you
                      won’t be left wondering what’s next. Through a series of
                      personalized questions, I gain a comprehensive
                      understanding of your needs, allowing me to present a
                      carefully curated selection of window treatment options
                      that align with your vision.
                    </p>
                    <p>
                      At the forefront of my business is a dedication to
                      providing exceptional aftercare services, ensuring that
                      your window treatments are always in top condition. This
                      includes ongoing support for fabric care, maintenance, and
                      troubleshooting even long after a window treatment is
                      installed. I am committed to being responsive to my
                      clients' needs, and I am always available to provide
                      consistent support. I stay informed of changes in window
                      treatment regulations to ensure that my recommendations
                      are up to date and always in compliance with code.
                    </p>
                  </div>
                  <div
                    id="myWork"
                    className="col-lg-6 col-md-6 col-sm-12 p-r20"
                  >
                    <h3 className="text-uppercase font-weight-600 m-a0 p-a0 font-16 ">
                      My Work
                    </h3>
                    <p>
                      My handcrafted designs can be found throughout Ontario,
                      gracing both residential and commercial spaces in cities
                      such as Oakville, Burlington, Mississauga, Georgetown,
                      Milton and the Greater Toronto Area.
                    </p>

                    <p>
                      If you haven’t already, I invite you to peruse through{" "}
                      <NavLink
                        to={"/gallery"}
                        className="text-uppercase link-style font-14"
                      >
                        <span className="">The Gallery</span>
                      </NavLink>{" "}
                      to see some of my beautiful work. Or read{" "}
                      <NavLink
                        to={"/blog"}
                        className="text-uppercase link-style font-14"
                      >
                        <span className="">My Blog</span>
                      </NavLink>{" "}
                      for valuable insights and information on window
                      treatments.
                    </p>
                    <h3
                      id="thankYou"
                      className="text-uppercase font-weight-600 m-a0 p-a0 font-16 "
                    >
                      Thank You
                    </h3>

                    <p>
                      Thank you for indulging me in my trip down memory lane!
                      It's been a pleasure to take you on a tour of my life of
                      sewing. If you're eager to learn more about my work, don't
                      be shy! Let's connect and schedule a time to chat. I can't
                      wait to hear about your project and work together to
                      create something truly unique and beautiful.
                    </p>

                    <div className="text-center">
                      <HashLink
                        smooth
                        className="btn-half site-button adjust-color button-lg font-weight-600 font-30 m-tb30 text-right"
                        to="/services/#contact"
                      >
                        <span>Book Appointment Here</span>
                        <em />
                      </HashLink>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </AboutColumns>
          </div>
        </div>

        {/* GALLERY SUGGESTIONS (CAROUSEL) */}
        <LatestProjects />
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
