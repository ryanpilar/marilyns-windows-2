import React from "react";
// import { RedditIcon } from "react-share";

const Service = ({ process }) => {
  const pokaDots = require("../../assets/media/images/ptn-1.png");
  return (
    <>
      <div className="section-full bg-gray p-tb90 square_shape1 tw-our-story-wrap">
        <div className="container">
          <div className="max-mid-container">
            {/* TITLE START */}
            <div
              id="designProcess"
              className="section-head text-left text-black col-lg-9 col-md-9"
            >
              <h2 className="text-uppercase font-34">Our Design Process</h2>
              <div className="wt-separator-outer p-b20">
                <div className="wt-separator bg-black" />
              </div>
              <p className="">
                From consultation, design to installation, we will work with you to bring your
                project ideas to life. I am excited to learn more about your
                vision and help you turn it into a reality.
              </p>
            </div>
            {/* TITLE END */}

            <div className="section-content our-story">
              {/* CONSULTATION */}
              <div className="row p-b50">
                <div className="col-md-6 col-sm-12">
                  <div className="wt-media our-story-pic">
                    <img
                      src={process.consultation.image.secure_url}
                      alt={process.consultation.image.context.custom.alt}
                      caption={
                        process.consultation.image.context.custom.caption
                      }
                      data-pin-description={
                        process.consultation.image.context.custom.dataPin
                      }
                      width={800}
                      height={500}
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="wt-box our-story-detail" id="consultation">
                    {/* <h3 className="text-uppercase">1</h3> */}
                    <h3 className="font-24 font-weight-500 text-uppercase ">
                      1. Book a consultation
                    </h3>
                    <p>
                      Lets connect and talk about your project needs. With so
                      many choices to consider and questions to ask, the best
                      way to turn your vision into reality is through a friendly
                      chat over the phone or an in-person meeting.
                    </p>

                    <a
                      href="#contact"
                      className="btn-half site-button button-lg m-tb15 text-right"
                    >
                      <span>Make Appointment</span>
                      <em />
                    </a>
                  </div>
                </div>
              </div>

              {/* DRAPERY IDEAS */}
              <div className="row p-b50">
                <div className="col-md-6 col-sm-12">
                  <div className="wt-box our-story-detail" id="ideas">
                    {/* <h3 className="text-uppercase">2</h3> */}
                    <h3 className="font-24 font-weight-500 text-uppercase ">
                      2. Drapery Ideas, Fabric Samples and Measurements
                    </h3>
                    <p>
                      My drapery workroom has over 600 fabric books from over 20
                      of the very best designers. We bring you a curated
                      selection of fabric samples, talk about drapery design
                      ideas and take measurements of your windows. Once you
                      approve your design, we’ll begin sewing.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="wt-media our-story-pic">
                    <img
                      src={process.ideas.image.secure_url}
                      alt={process.ideas.image.context.custom.alt}
                      caption={process.ideas.image.context.custom.caption}
                      data-pin-description={
                        process.ideas.image.context.custom.dataPin
                      }
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              {/* INSTALLATION */}
              <div className="row p-b50">
                <div className="col-md-6 col-sm-12">
                  <div className="wt-media our-story-pic">
                    <img
                      src={process.install.image.secure_url}
                      alt={process.install.image.context.custom.alt}
                      caption={process.install.image.context.custom.caption}
                      data-pin-description={
                        process.install.image.context.custom.dataPin
                      }
                      width={800}
                      height={500}
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="wt-box our-story-detail" id="install">
                    <h3 className="font-24 font-weight-500 text-uppercase ">
                      3. Professional Installs
                    </h3>
                    <p>
                      The installation process is easy and enjoyable. We
                      personally install each drape, curtain, blind, shade or
                      accessory to make sure everything is perfect. You’ll see
                      each room come to life as your couture window dressings
                      are placed just as you ordered.
                    </p>
                  </div>
                </div>
              </div>

              {/* MAINTENANCE AND WARRANTY */}
              <div className="row p-b50">
                <div className="col-md-6 col-sm-12 ">
                  <div className="wt-box our-story-detail" id="warranty">
                    {/* <h3 className="text-uppercase">2017-18</h3> */}
                    <h3 className="font-24 font-weight-500 text-uppercase ">
                      4. Maintenance and Warranty
                    </h3>
                    <p>
                      Benefit from years of professional experience, top-quality
                      custom designs and materials, and superior customer
                      service. We are always available to answer your questions
                      and provide you with information about our newest window
                      treatment products and services.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="wt-media our-story-pic">
                    <img
                      src={process.warranty.image.secure_url}
                      alt={process.warranty.image.context.custom.alt}
                      caption={process.warranty.image.context.custom.caption}
                      data-pin-description={
                        process.warranty.image.context.custom.dataPin
                      }
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* WORDS FROM MARILYN */}
          {/* <div
            className="max-mid-container m-t80"
            id="selectServices"
            
          >
            <div className="blog-post date-style-1 blog-detail text-black p-b10">
              <div className="wt-post-text col-md-8 col-sm-12 p-a20 p-lr30" style={{


              boxShadow: '0px 8px 10px 0px #555', 
            }}>
                <div className="section-head text-left text-black">
                  <h2 className="text-uppercase font-50 font-weight-400">
                    Words From Marilyn...
                  </h2>
                  <div className="wt-separator-outer">
                    <div className="wt-separator bg-black" />
                  </div>
                </div>

                <p className="p-r30 p-b20 text-left text-black ">
                  I am a skilled and experienced sewing professional with a
                  passion for creating beautiful and functional drapery and
                  every other custom window treatment you can imagine. I have a
                  deep understanding of various fabrics, patterns, and
                  techniques, and I am able to use this knowledge to create
                  custom designs that meet my clients' needs.
                </p>

                <p className="p-r30 p-b20 text-left text-black ">
                  I am also able to work with a wide range of clients, from
                  individual customers to large fashion brands, and I am always
                  willing to go the extra mile to ensure their satisfaction. I
                  am organized, detail-oriented, and able to work under tight
                  deadlines, making me an ideal candidate for any project.
                  Overall, I am a dedicated and talented sewing professional who
                  is committed to creating beautiful and high-quality products.
                </p>
              </div>
            </div>
            
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Service;
