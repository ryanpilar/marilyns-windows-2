import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import { createClient } from "contentful";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

import { NavLink } from "react-router-dom"
import Header2 from "../Common/Header2"
// import Footer from '../Common/Footer';
import Banner from "../Segments/Banner"
import SEO from "../Segments/SEO";
import Footer from "../Common/Footer";

// const bnrimg = require('./../../images/banner/sewing-machine-lamp-freepic.png');

const Gallery22 = () => {
  const [imageList, setImageList] = useState([]);
  const [bannerContent, setBannerContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // const [ filters, setFilters ] = useState([
  //     { label: "House", filter: ".cat-1" },
  //     { label: "Building", filter: ".cat-2" },
  //     { label: "Office", filter: ".cat-3" },
  //     { label: "Bedroom", filter: ".cat-4" },
  //     { label: "Interior", filter: ".cat-5" }
  // ]);

  const client = createClient({
    // contentful connect
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  const sortPriority = (imgList) => {
    imgList.sort((a, b) => {
      return a.fields.priority - b.fields.priority;
    });
  };

  useEffect(() => {
    const getAllEntries = async () => {
      // contentful get data
      try {
        await client
          .getEntries({ content_type: "gallery" })
          .then((allEntries) => {
            // console.log("ALL ENTRIES", allEntries);
            // const sortedImages = sortPriority(allEntries.items)
            const sortedImages = allEntries.items.sort((a, b) => {
              return a.fields.priority - b.fields.priority;
            });
            // console.log("sorted", sortedImages);
            setImageList(allEntries.items);
            // console.log('NEW STATE', imageList)
            // sortPriority()
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
    setIsOpen(true);
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

  return (
    <>
      <SEO
        title={`Marilyn's Windows | Gallery | Beautiful Drapery Ideas`}
        description={`Bedroom curtain ideas. Window coverings for patio doors. Living room drapery ideas. Light filtering curtains and blackout blinds. Outdoor curtain ideas.`}
      />

      <Header2 />

      <div className="page-content ">
        {bannerContent && (
          <Banner
            title={bannerContent.heading}
            pagename={bannerContent.pageName}
            bgimage={bannerContent.backgroundImage[0].secure_url}
          />
        )}

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
            <h2 className="text-uppercase font-36">Marilyn's Gallery</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black" />
            </div>
          </div>
          {/* TITLE END */}
        </div>

        {/* SECTION CONTENT START */}
        {imageList && (
          <div className="section-full p-t40 p-b90 tm-work-wrap">
            <div className="container">
              {/* PAGINATION START */}
              {/* <div className="filter-wrap p-b50">
                                <ul className="masonry-filter link-style  text-uppercase">
                                    <li className="active" aria-hidden="true"><a data-filter="*" href="#" >All</a></li>
                                    
                                    {filters.map((item, index) => (
                                        <li key={index}><a data-filter={item.filter} href="#" aria-hidden="true">{item.label}</a></li>
                                    ))}

                                </ul>
                            </div> */}
              {/* PAGINATION END */}
            </div>
            {/* GALLERY CONTENT START */}

            <div className="portfolio-wrap mfp-gallery work-grid clearfix">
              <div className="container-fluid">
                <div className="row">
                  {imageList.map((item, index) => (
                    <div
                      key={index}
                      className={`${item.fields.filter} masonry-item col-lg-3 col-md-6 col-sm-6 m-b30 `}
                    >
                      {/* <div className="wt-img-effect">
                        <div className=""> */}
                      <div className="wt-img-effect wt-img-black-bg">
                        <div className="img-opacity">
                          <img
                            src={item.fields.smallImage[0].secure_url}
                            alt={
                              item.fields.smallImage[0]?.context?.custom?.alt
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
        )}
        {/* SECTION CONTENT END  */}
      </div>
    </>
  );
};

export default Gallery22;
