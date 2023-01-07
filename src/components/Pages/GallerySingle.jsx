import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import { createClient } from "contentful";

import { NavLink } from "react-router-dom";
import Header2 from "../Common/Header2";
// import Footer from '../Common/Footer';
import Banner from "../Segments/Banner";
import SEO from "../Segments/SEO";

import { useParams } from "react-router-dom"



const GallerySingle = () => {
  const { id } = useParams(); // grabs the contentful :id form the address bar
  const [imageList, setImageList] = useState([]);
  const [bannerContent, setBannerContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryRoute = `https://marilyns-windows.netlify.app/gallery/room/${id}`;

  
  const client = createClient({
    // contentful connect
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  useEffect(() => {

    const getEntryById = async () => {

      try {
        await client.getEntry(id).then( (blogEntry) => {
          console.log("GALLERY ENTRY", blogEntry);
          // setSingleBlogPost(blogEntry);
        });
      } catch (error) {
        console.log("error");
      }
    };

    getEntryById();
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
    {/* UPDATE SEO WITH PROPER TITLE FROM CONTENFUL */}
      <SEO
        title={`Marilyn's Windows | Room | Beautiful Drapery Ideas`}
        description={`Bedroom curtain ideas. Window coverings for patio doors. Living room drapery ideas. Light filtering curtains and blackout blinds. Outdoor curtain ideas.`}
      />

      <Header2 />

      <div className="page-content ">

        {/* {bannerContent && (
          <Banner
            title={bannerContent.heading}
            pagename={bannerContent.pageName}
            bgimage={bannerContent.backgroundImage[0].secure_url}
          />
        )} */}

        <div className="container p-b30">
          {/* BREADCRUMB ROW */}
          <div className="">
            <div className="p-t20 m-r20">
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/gallery"}>Gallery</NavLink>
                  </li>
                  <li>High-def Room</li>
                </ul>
              </div>
            </div>
          </div>
          {/* BREADCRUMB ROW END */}

          {/* TITLE START */}
          <div className="text-left">
            <h2 className="text-uppercase font-36">High-def Gallery Image</h2>
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
                  {/* {imageList.map((item, index) => (
                    <div
                      key={index}
                      className={`${item.fields.filter} masonry-item col-lg-3 col-md-6 col-sm-6 m-b30 `}
                    >

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
                              <div
                                className="v-button letter-spacing-4 font-18 text-uppercase p-l20 make-pointer"

                                aria-hidden="true"
                                onClick={() => {
                                  setIsOpen(true);
                                  setPhotoIndex(Number(index));
                                }}
                              >
                                <p>
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Enlarge
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))} */}


                </div>
              </div>
            </div>
            {/* GALLERY CONTENT END */}
          </div>
        )}
        {/* SECTION CONTENT END  */}
      </div>

      {/* <>
            {bannerContent && <Footer />}
            </> */}
    </>
  );
};

export default GallerySingle;
