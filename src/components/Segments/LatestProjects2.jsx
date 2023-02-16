import React from "react";
import { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import { createClient } from "contentful";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const LatestProjects2 = ({ content }) => {
  const [imageList, setImageList] = useState(null);

  // const galleryRoute = webSitePaths.galleryRoomRoute;

  useEffect(() => {
    const client = createClient({
      // contentful connect
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });

    const selectRandom = (projects) => {
      return shuffle(projects).slice(0, 9);
    };

    // LATEST PROJECTS Shuffle
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
    const getEntry = async () => {
      try {
        await client
          .getEntries({ content_type: "gallery" })
          .then((allEntries) => {
            // allEntries.items.sort((a, b) => {
            //   return a.fields.priority - b.fields.priority;
            // });

            setImageList(selectRandom(allEntries.items));
          });
      } catch (error) {
        console.log("error");
      }
    };

    getEntry();
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
        items: 2,
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
        className="section-full p-t90 latest_project-outer square_shape3"
      >
        <div className="container">
          <div className="container">
            <div className="section-content">
              {/* TITLE START */}
              <div className="section-head text-left">
                <div className="row">
                  <div className="col-lg-4 col-md-12 ">
                    <h2 className="text-uppercase font-34">
                      More From The Gallery
                    </h2>
                    <div className="wt-separator-outer">
                      <div className="wt-separator bg-black" />
                    </div>
                  </div>
                </div>
              </div>
              {/* TITLE END */}
            </div>
          </div>
          {/* IMAGE CAROUSEL START */}
          <div className="container">
            <div className="section-content">
              {/* <OwlCarousel className="owl-carousel  owl-btn-bottom-left" {...options}> */}
              {imageList && (
                <OwlCarousel
                  className="owl-carousel owl-carousel-filter  owl-btn-bottom-left"
                  {...options}
                >
                  <>
                    {imageList.map((item, index) => (
                      <div
                        key={index}
                        className={`${item.fields.filter} item fadingcol`}
                      >
                        <div className="wt-img-effect ">
                          <div className="wt-img-black-bg">
                            <div className="img-opacity">
                              <img
                                src={item.fields.smallImage[0].secure_url}
                                alt={
                                  item.fields.smallImage[0].context.custom.alt
                                }
                                caption={
                                  item.fields.smallImage[0].context.custom
                                    .caption
                                }
                                data-pin-description={
                                  item.fields.smallImage[0].context.custom
                                    .dataPin
                                }
                                width="360"
                                height="560"
                              />
                            </div>
                          </div>
                          <div className="overlay-bx-2 ">
                            <div className="line-amiation">
                              <div className="text-white  font-weight-300 p-a40">
                                <h2 className="text-white font-20 letter-spacing-1 text-uppercase">
                                  {item.fields.cardTitle}
                                </h2>
                                <p>{item.fields.cardDescription}</p>
                                <Link to={`${item.fields.slug}`}>
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
              <div className="section-content m-t20 m-b40">
                <Link
                  to="/gallery"
                  className="site-button black button-app m-r15 m-b15 "
                >
                  <span className="text-center">Visit My Gallery</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="section-content "> */}

        {/* </div> */}

        {/* <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
          <strong>Awesome</strong>
          <span className="text-black">Designs</span>
        </div> */}
      </div>
    </>
  );
};

export default LatestProjects2;
