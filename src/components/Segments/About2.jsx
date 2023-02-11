import React from "react";
// import { NavLink, Link } from 'react-router-dom';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import SEO from "../Segments/SEO";
import { NavLink } from "react-router-dom";

import AboutImages2 from "./AboutImages2";

// const images = [
//     require('./../../images/gallery/portrait/pic1.jpg'),
//     require('./../../images/gallery/portrait//pic2.jpg'),
//     require('./../../images/gallery/portrait//pic3.jpg'),

// ]

const About2 = ({ images }) => {
  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    items: 1,
    dots: false,
  };

  return (
    <>
      <SEO
        title={`Marilyn's Windows | My Story`}
        description={`Professionally sewing for over 30 years and specializing in the tailored creation of hand-sewn curtains, drapes, blinds, and custom bedding.`}
      />

      {/* <div className="section-full p-b90 bg-gray square_shape2 tm-about2-wrap"> */}
      {/* <div className="container"> */}
      <div className="section-content ">
        {/* TITLE START */}
        <div className="p-b40 p-l20 text-left ">
          {/* <h1 className="text-uppercase font-50">Marilyn's Story</h1> */}
          {/* <div className="wt-separator-outer"> */}
            <div className="wt-separator bg-black" />
          {/* </div> */}
        </div>
        {/* TITLE END */}

        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="m-about-containt text-uppercase text-black p-l20 p-r10">
              <span className="font-28 font-weight-300 ">About Marilyn</span>
              <h2 className="font-40 font-weight-500 ">
                Our mission is the best Development &amp; interior design.
              </h2>

              <p className="">
                {/* <b>INTERIOR DESIGNER IN MILTON, ONTARIO.</b> */}
              </p>

              <p className="text-lowercase">
                I discovered her love for couture as a little girl, sewing
                miniature gowns and dresses for her doll collections by hand.
                Throughout school, she worked long hours to purchase her first
                professional sewing machine, which she still uses to craft her
                many custom projects to this day.
              </p>
              <p className="text-lowercase">
                After pursuing a degree in Textiles at the University of Guelph,
                Marilyn quickly established herself among Ontario’s elite luxury
                homeowners, interior designers, custom home builders, real
                estate agents, and insurance companies for her beautifully
                designed custom curtains and soft furnishings. For over 30
                years, Marilyn has specialized in the tailored creation of
                hand-sewn curtains, drapes, blinds, and home bedding and accents
                with the world’s finest fabrics, hardware, and accessories.
              </p>
              <div className="m-t40">
                <NavLink
                  to={"/gallery"}
                  className="btn-half text-white site-button button-md m-b15 m-r15"
                >
                  <span className="p-lr5">Gallery</span>
                  <em />
                </NavLink>
                <NavLink
                  to={"/blog"}
                  className="btn-half text-white site-button button-md m-b15"
                >
                  <span className="p-lr5"> Blog</span>
                  <em />
                </NavLink>
              </div>
            </div>
          </div>
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
              <AboutImages2 images={images} />
            </div>

            {/* </div> */}
          </div>{" "}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default About2;
