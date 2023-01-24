import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import { createClient } from "contentful";

import { NavLink } from "react-router-dom";
import Header2 from "../Common/Header2";
// import Footer from '../Common/Footer';
import Banner from "../Segments/Banner";
import SEO from "../Segments/SEO";
import Footer from "../Common/Footer";

// const bnrimg = require('./../../images/banner/sewing-machine-lamp-freepic.png');

const Gallery22 = () => {
  const [imageList, setImageList] = useState(null);
  const [bannerContent, setBannerContent] = useState(null);


  const filters = [
    { label: "Bedroom", filter: ".Bedroom" },
    { label: "Bath", filter: ".Bathroom" },
    { label: "Dining", filter: ".Dining" },
    { label: "Kitchen", filter: ".Kitchen" },
    { label: "Living", filter: ".Living" },
    { label: "Office", filter: ".Office" },
  ];

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
          .getEntries({ content_type: "gallery", order: "fields.priority" })
          .then((allEntries) => {
            setImageList(allEntries.items);
          });
      } catch (error) {
        console.log(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };

    const getBannerContent = async () => {
      // contentful get data
      try {
        await client
          .getEntries({ content_type: "banner" })
          .then((allEntries) => {
            // console.log('BANNER CONTENT', allEntries.items[0].fields)
            setBannerContent(allEntries.items[0].fields);
            // console.log('NEW STATE', imageList)
          });
      } catch (error) {
        console.log(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };
    getBannerContent();
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
  
  useEffect(() => {
    window.addEventListener('load', () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener('load', () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);

  return (
    <>
      <SEO
        title={`Marilyn's Windows | Gallery | Beautiful Drapery Ideas`}
        description={`Bedroom curtain ideas. Window coverings for patio doors. Living room drapery ideas. Light filtering curtains and blackout blinds. Outdoor curtain ideas.`}
      />

        {bannerContent && imageList && (
          
          <>
          <Header2 />
          <div className="page-content ">
            <Banner
              title={bannerContent.heading}
              pagename={bannerContent.pageName}
              bgimage={bannerContent.backgroundImage[0].secure_url}
            />

            <div className="container p-b30">
              {/* BREADCRUMB ROW */}
              <div className="">
                <div className="p-t20 m-r20">
                  <div>
                    <ul className="wt-breadcrumb breadcrumb-style-2">
                      <li>
                        <NavLink to={"/"}>Home</NavLink>
                      </li>
                      <li>Gallery</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* BREADCRUMB ROW END */}

              {/* TITLE START */}
              <div className="text-left">
                <h2 className="text-uppercase font-50 font-weight-500">Marilyn's Gallery</h2>
                <div className="wt-separator-outer">
                  <div className="wt-separator bg-black" />
                </div>
              </div>
              {/* TITLE END */}
            </div>

            {/* SECTION CONTENT START */}
            
              <div className="section-full p-t5 p-b90 tm-work-wrap  ">
                <div className="container ">
                  {/* PAGINATION START */}
                  <div className="filter-wrap p-b50 ">
                    <ul className="masonry-filter link-style  text-uppercase ">
                      <li className="active">
                        <a data-filter="*" href="#">
                          All
                        </a>
                      </li>
                      {filters.map((item, index) => (
                        <li key={index}>
                          <a data-filter={item.filter} href="#">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* PAGINATION END */}
                </div>
                {/* GALLERY CONTENT START */}

                <div className="portfolio-wrap mfp-gallery work-grid clearfix ">
                  <div className="container-fluid ">
                    <div className="row m-lr10 ">
                      {imageList.map((item, index) => (
                        <div
                          key={index}
                          className={`${item.fields.filter} masonry-item col-lg-3 col-md-6 col-sm-6 m-b30`}
                        >
                          <div className="wt-img-effect wt-img-black-bg">
                            <div className="img-opacity">
                              <img
                                src={item.fields.smallImage[0].secure_url}
                                alt={
                                  item.fields.smallImage[0]?.context?.custom
                                    ?.alt
                                }
                                caption={
                                  item.fields.smallImage[0]?.context?.custom
                                    ?.caption
                                }
                                data-pin-description={
                                  item.fields.smallImage[0]?.context?.custom
                                    ?.dataPin
                                }
                                width="360"
                                height="560"
                              />
                            </div>
                            <div className="overlay-bx-2 ">
                              <div className="line-amiation">
                                <div className="text-white font-weight-300 p-a40">
                                  <h2>{item.fields.cardTitle}</h2>
                                  <p>{item.fields.cardDescription}</p>

                                  <NavLink to={`/gallery/room/${item.sys.id}`}>
                                    <div className="v-button letter-spacing-4 font-18 text-uppercase p-l15 make-pointer">
                                      <p>
                                        <i
                                          className="fa fa-search"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Zoom
                                      </p>
                                    </div>
                                  </NavLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* GALLERY CONTENT END */}
              </div>
            
            {/* SECTION CONTENT END  */}
            </div>

          </>
        )}

      <Footer />
    </>
  );
};

export default Gallery22;
