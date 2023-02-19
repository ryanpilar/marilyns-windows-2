import React from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";
import { useEffect, useState, useLayoutEffect } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const LatestProjects = () => {
  const [content, setContent] = useState(null);

  // Connect to Contentful and Fetch Data
  useEffect(() => {
    const getAllEntries = async () => {
      const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
      });
      try {
        await client
          .getEntries({ content_type: "gallery" })
          .then((allEntries) => {
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

  useLayoutEffect(() => {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/custom.js");
  }, []);

  // LATEST PROJECTS Shuffle
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle,
    while (currentIndex !== 0) {
      // Pick a remaining element,
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
    return shuffle(projects).slice(0, 9);
  };

  const options = {
    loop: true,
    autoplay: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      580: {
        items: 2,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1152: {
        items: 4,
      },
      1360: {
        items: 4,
      },
      1366: {
        items: 4,
      },
    },
  };

  return (
    <>
      <div
        id="work"
        className="section-full p-t90 p-lr80 latest_project-outer square_shape3"
      >
        <div className="container">
          <div className="section-content">
            <div className="section-head text-left">
              <div className="row">
                <div className="col-lg-4 col-md-12 ">
                  <h2 className="text-uppercase font-34">Latest Projects</h2>
                  <div className="wt-separator-outer">
                    <div className="wt-separator bg-black" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-9 col-sm-12">
                  <p className="p-r30">
                    Explore our gallery of window treatment designs and discover
                    the artistry that goes into every project. From elegant
                    drapes to functional shades, we offer a range of options to
                    fit any design style.{" "}
                    <Link
                      className="link-style font-14 text-uppercase"
                      to="/gallery"
                    >
                      Click here to see the full gallery
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE CAROUSEL START */}
        <div className="section-content">
          {content && (
            <OwlCarousel
              className="owl-carousel owl-carousel-filter  owl-btn-bottom-left"
              {...options}
            >
              <>
                {selectRandom(content).map((item, index) => (
                  <div
                    key={index}
                    className={`${item.fields.filter} item fadingcol`}
                  >
                    <div className="wt-img-effect ">
                      <div className="wt-img-black-bg">
                        <div className="img-opacity">
                          <img
                            src={item.fields.smallImage[0].secure_url}
                            alt={item.fields.smallImage[0].context.custom.alt}
                            caption={
                              item.fields.smallImage[0].context.custom.caption
                            }
                            data-pin-description={
                              item.fields.smallImage[0].context.custom.dataPin
                            }
                            width="360"
                            height="560"
                          />
                        </div>
                      </div>

                      <div className="overlay-bx-2 ">
                        <div className="line-amiation">
                          <div className="text-white  font-weight-300 p-a40">
                            <h3 className="text-white font-20 letter-spacing-1 text-uppercase">
                              {item.fields.cardTitle}
                            </h3>
                            <p>{item.fields.cardDescription}</p>

                            <Link to={`/gallery/room/${item.fields.slug}`}>
                              <div className="v-button letter-spacing-4 font-18 text-uppercase p-l15 make-pointer">
                                <p>
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Zoom
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            </OwlCarousel>
          )}
        </div>
        {/* IMAGE CAROUSEL END */}

        <div className="section-content m-t20 m-b40">
          <Link
            to="/gallery"
            className="btn-half site-button button-lg  font-30 m-tb15 text-right"
          >
            <span className="">Visit My Gallery</span>
            <em />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LatestProjects;
