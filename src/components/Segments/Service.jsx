import React from "react";
import { NavLink } from "react-router-dom";

const Service = ({ process }) => {
  return (
    <>
      <div className="section-full bg-gray p-tb90 square_shape1 tw-our-story-wrap">
        <div className="container">
          <div className="max-mid-container">
            {/* TITLE START */}
            <div id="designProcess" className="section-head text-left text-black">
              <h2 className="text-uppercase font-34">Our Design Process</h2>
              <div className="wt-separator-outer p-b20">
                <div className="wt-separator bg-black" />
              </div>
              <p className="">
                From design to installation, we will work with you to
                bring your room to life. 
              </p>
            </div>
            {/* TITLE END */}

            <div className="section-content our-story">
              {/* CONSULTATION */}
              <div className="row">
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
                  <div className="wt-box our-story-detail">
                    {/* <h3 className="text-uppercase">1</h3> */}
                    <h3 className="font-24 font-weight-500 text-uppercase">1. Book a consultation</h3>
                    <p>Lets connect and talk about your project needs. </p>

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
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="wt-box our-story-detail">
                    {/* <h3 className="text-uppercase">2</h3> */}
                    <h3 className="font-24 font-weight-500 text-uppercase">
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
              <div className="row m-b20">
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
                  <div className="wt-box our-story-detail">
                    <h3 className="font-24 font-weight-500 text-uppercase">3. Professional Installs</h3>
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
              <div className="row ">
                <div className="col-md-6 col-sm-12 ">
                  <div className="wt-box our-story-detail">
                    {/* <h3 className="text-uppercase">2017-18</h3> */}
                    <h3 className="font-24 font-weight-500 text-uppercase">
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
        </div>
      </div>
    </>
  );
};

export default Service;
