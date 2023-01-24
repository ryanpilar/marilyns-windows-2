import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { createClient } from "contentful";
import { useEffect, useState, useLayoutEffect } from "react";

const Testimonials = () => {
  const [content, setContent] = useState(null);
  const [bgimg, setBgimg] = useState(null);

  const client = createClient({
    // contentful connect
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  useEffect(() => {
    const getAllEntries = async () => {
      // contentful get data
      try {
        await client
          .getEntries({ content_type: "background" })
          .then((allEntries) => {
            // console.log("background entries", allEntries.items);
            setBgimg(allEntries.items);
          });

        await client
          .getEntries({ content_type: "testimonials" })
          .then((allEntries) => {
            // console.log("testimonial entries", allEntries.items);
            setContent(selectRandom(allEntries.items));
          });
      } catch (error) {
        console.log(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };

    getAllEntries();
  }, []);

  // Owl Carousel Options
  const options = {
    smartSpeed: 600,
    loop: true,
    autoplay: true,
    margin: 80,
    nav: false,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    autoplayTimeout: 10000,
    responsive: {
      0: {
        items: 1,
      },
      991: {
        items: 2,
      },
    },
  };

  // TESTIMONIAL SHUFFLE
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const selectRandom = (projects) => {
    return shuffle(projects);
  };

  return (
    <>
      {content && bgimg && (
        <div
          className="section-full p-t70 bg-repeat tm-testimonial-wrap"
          style={{
            backgroundImage: `url(${bgimg[0].fields.cloudinaryImage[0].secure_url})`,
          }}
        >
          <div className="container">
            <div className="section-content">
              {/* TITLE START */}
              <div className="section-head text-left">
                <h2 className="text-uppercase font-34">Testimonials</h2>
                <div className="wt-separator-outer">
                  <div className="wt-separator bg-black" />
                </div>
              </div>
              {/* TITLE END */}
              {/* TESTIMONIAL 4 START ON BACKGROUND */}
              <div className="section-content">
                {content && (
                  <OwlCarousel
                    className="owl-carousel testimonial-home"
                    {...options}
                  >
                    {content.map((item, index) => (
                      <div className="item" key={index}>
                        <div className="testimonial-6">
                          {/* commented out the image in testamonial: */}
                          {/* <div className="testimonial-pic-block">
                                                
                                                <div className="testimonial-pic">
                                                    <img src={item.image.default} alt="" width={132} height={132} />
                                                </div>
                                            </div> */}

                          <div className="testimonial-text clearfix bg-white">
                            <div className="testimonial-detail clearfix">
                              <strong className="testimonial-name">
                                {item.fields.fullName}
                              </strong>
                              <span className="testimonial-position p-t0">
                                {item.fields.position}
                              </span>
                            </div>
                            <div className="p-b10">
                              <span
                                className="fa fa-star p-r5"
                                style={{ color: "#e7a403" }}
                              />
                              <span
                                className="fa fa-star p-r5"
                                style={{ color: "#e7a403" }}
                              />
                              <span
                                className="fa fa-star p-r5"
                                style={{ color: "#e7a403" }}
                              />
                              <span
                                className="fa fa-star p-r5"
                                style={{ color: "#e7a403" }}
                              />
                              <span
                                className="fa fa-star p-r5"
                                style={{ color: "#e7a403" }}
                              />
                            </div>
                            <div className="testimonial-paragraph text-black p-t15">
                              <span className="fa fa-quote-left" />
                              <p>{item.fields.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                )}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
              <strong>clients</strong>
              <span className="text-black">Say</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
