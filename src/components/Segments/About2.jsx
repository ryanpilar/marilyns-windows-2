import { HashLink } from "react-router-hash-link";

import SEO from "../Segments/SEO";
import AboutImages2 from "./AboutImages2";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const About2 = ({ images }) => {
  
  // const options = {
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   margin: 30,
  //   nav: true,
  //   navText: [
  //     '<i class="fa fa-angle-left"></i>',
  //     '<i class="fa fa-angle-right"></i>',
  //   ],
  //   items: 1,
  //   dots: false,
  // };

  return (
    <>
      <SEO
        title={`Marilyn's Windows | My Story`}
        description={`Professionally sewing for over 30 years and specializing in the tailored creation of hand-sewn curtains, drapes, blinds, and custom bedding.`}
      />


      <div className="section-content ">
        {/* TITLE START */}
        <div className="p-b40 p-l30 text-left ">
          <div className="wt-separator bg-black" />
        </div>
        {/* TITLE END */}



        <div className="row p-l30">
          <div className="wt-post-text col-md-8 col-sm-12 col-xs-12 p-l15 p-b15">
            <div className="">
              <span className="font-24 font-weight-300 text-uppercase m-b20">
                Designer’s Spotlight
              </span>
              <h2 className="font-40 font-weight-500 text-uppercase letter-spacing-2 m-t15  p-t0">
                An Intimate Journey into the Artistry of Marilyn’s Custom Window
                Treatments
              </h2>
              <h3 className="text-uppercase font-weight-600 m-a0 p-a0 font-16 ">
                Introduction
              </h3>
              <p className="">
                Hello, I’m Marilyn. Allow me to take you on a trip down memory
                lane, where my passion for sewing first blossomed. Join me in
                revisiting my early beginnings, where my love for sewing first
                took root and has continued to grow ever since.
              </p>

              <p className="">
                Amidst 600 design books and fabric swatches, my trusty 1962
                Bernina and its accompanying Serger and Blind Hemmer await (my
                loyal sewing machines). This journey began with a humble needle
                and thread, which over 30 years has developed into a thriving
                career. My love for sewing was rooted in my upbringing on a farm
                and that is where my story begins.
              </p>
            </div>
          </div>
          {/* TABLE OF CONTENTS */}
          {/* <div className="wt-post-text col-md-4 col-sm-12 col-xs-12 p-lr20 float-right ">
            <div className="quick-links-border">
              <h3 className="font-weight-600 text-uppercase font-16 m-t0 m-t30 m-b5 p-t0 p-l5">
                Table Of Contents
              </h3>
              <ul className="list-unstyled p-l10 ">
                <li className="m-a0">
                  <HashLink
                    smooth
                    className="link-style font-14 text-capitalize "
                    to="#peaches"
                    aria-label="scroll down to PEACHES, FABRIC & FACTORIES"
                  >
                    <div className="p-lr10">
                      peaches, fabric & factories
                    </div>
                  </HashLink>
                </li>
                <li>
                  <ul className="p-l20 list-arrow">
                    <li className="">
                      <HashLink
                        smooth
                        className="font-14 text-capitalize"
                        to="#niagara"
                        aria-label="scroll down to niagara on the lake"
                      >
                        <div className="p-lr10">niagara on the lake</div>
                      </HashLink>
                    </li>

                    <li className="">
                      <HashLink
                        smooth
                        className="font-14 text-capitalize"
                        to="#fabricsToCars"
                        aria-label="scroll down to fabrics to cars and back"
                      >
                        <div className="p-lr10 p-tb0 m-tb0">
                          from fabrics to cars and back
                        </div>
                      </HashLink>
                    </li>
                    <li className="">
                      <HashLink
                        smooth
                        className="font-14 text-capitalize"
                        to="#backToMyRoots"
                        aria-label="scroll down to back to my roots"
                      >
                        <div className="p-lr10 p-tb0 m-tb0">
                          back to my roots
                        </div>
                      </HashLink>
                    </li>
                  </ul>
                </li>

                <li className="">
                  <HashLink
                    smooth
                    className="link-style font-14 text-capitalize"
                    to="#timeless"
                    aria-label="scroll down to CRAFTING TIMELESS WINDOW TREATMENTS"
                  >
                    <div className="p-lr10">
                      crafting timeless window treatments
                    </div>
                  </HashLink>
                </li>
                <li>
                  <ul className="p-l20 list-arrow">
                    <li className="m-a0">
                      <HashLink
                        smooth
                        className="font-14 text-capitalize "
                        to="#allInclusive"
                        aria-label="scroll down to all inclusive approach"
                      >
                        <div className="p-lr10">all inclusive approach</div>
                      </HashLink>
                    </li>
                    <li className="">
                      <HashLink
                        smooth
                        className="font-14 text-capitalize"
                        to="#reading"
                        aria-label="scroll down to reading the room"
                      >
                        <div className="p-lr10">reading the room</div>
                      </HashLink>
                    </li>

                    <li className="">
                      <HashLink
                        smooth
                        className="font-14 text-capitalize"
                        to="#fostering"
                        aria-label="scroll down to fostering a supportive community"
                      >
                        <div className="p-lr10 p-tb0 m-tb0">
                          fostering a supportive community
                        </div>
                      </HashLink>
                    </li>
                  </ul>
                </li>

                <li className="">
                  <HashLink
                    smooth
                    className="link-style font-14 text-capitalize"
                    to="#personalizedService"
                    aria-label="scroll down to PERSONALIZED SERVICE FROM START TO FINISH"
                  >
                    <div className="p-lr10 p-tb0 m-tb0">
                      personalized service from start to finish
                    </div>
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <ul className="p-l20 list-arrow">
                    <li className="m-a0">
                      <HashLink
                        smooth
                        className="font-14 text-capitalize "
                        to="#aftercare"
                        aria-label="scroll down to exceptional aftercare"
                      >
                        <div className="p-lr10">exceptional aftercare</div>
                      </HashLink>
                    </li>
                    <li className="">
                      <HashLink
                        smooth
                        className="font-14 text-capitalize"
                        to="#myWork"
                        aria-label="scroll down to my work"
                      >
                        <div className="p-lr10">my work</div>
                      </HashLink>
                    </li>

                    <li className="">
                      <HashLink
                        smooth
                        className="font-14 text-capitalize"
                        to="#thankYou"
                        aria-label="scroll down to thank you"
                      >
                        <div className="p-lr10 p-tb0 m-tb0">thank you</div>
                      </HashLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div> */}
        </div>

        <div className="row">
          {" "}
          <div className="col-lg-12 col-md-12">
            {/* <div className="m-about m-l50 m-r50"> */}

            {/* <OwlCarousel
                className="owl-carousel about-us-carousel owl-btn-bottom-right"
                {...options}
              >
                {images.images.map((item, index) => (
                  <div className="item" key={index}>
                    <div className="ow-img wt-img-effect zoom-slow">
                      <img
                        src={item.secure_url}
                        // alt={item.context.custom.alt}
                        // data-pin-description={item.context.custom.dataPin}
                        // caption={item.context.custom.caption}

                        alt={item.context.custom.alt}
                        caption={item.context.custom.caption}
                        data-pin-description={item.context.custom.dataPin}
                        width={360}
                        height={560}
                      />
                    </div>
                  </div>
                ))}
              </OwlCarousel> */}

            <div className="">
              <AboutImages2 images={images} id="aboutImages2" />
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About2;
