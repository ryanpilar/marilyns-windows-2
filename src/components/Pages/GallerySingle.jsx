import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import { createClient } from "contentful";

import { Link } from "react-router-dom";
import Header3 from "../Common/Header3";
import SEO from "../Segments/SEO";

import { useParams } from "react-router-dom";
import Footer from "../Common/Footer";
import Banner3 from "../Segments/Banner3";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import toast, { Toaster } from "react-hot-toast";

import Loader from "../Segments/Loader";
import LatestProjects2 from "../Segments/LatestProjects2";

import webSitePaths from "../../assets/js/webSitePaths";

const GallerySingle = () => {
  const { slug } = useParams(); // grabs the contentful :slug from the address bar (:slug)
  const [imageData, setImageData] = useState(null);
  // const [imageList, setImageList] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [galleryBanner, setGalleryBanner] = useState(null);

  const galleryRoute = webSitePaths.galleryRoomRoute + slug;

  const toggleSpinner = () => {
    setSpinner((prevState) => !prevState);
  };

  const clipboardToast = () =>
    toast.success("Copied! Check your clipboard for link.", {
      duration: 6000,
      // icon: '👏',
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  useEffect(() => {
    window.addEventListener("load", () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener("load", () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);

  useEffect(() => {
    const client = createClient({
      // contentful connect
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });
    const getContentfulEntries = async () => {
      try {
        await client
          // .getEntry(id)
          .getEntries({ content_type: "gallery", "fields.slug": slug })
          .then((galleryEntry) => {
            // console.log('GALLERY', galleryEntry)
            setImageData(galleryEntry.items[0]);
            toggleSpinner();
          });

        // await client
        //   .getEntries({ content_type: "gallery", 'fields.title': slug, })
        //   .then((allEntries) => {
        //     // allEntries.items.sort((a, b) => {
        //     //   return a.fields.priority - b.fields.priority;
        //     // });
        //     // console.log("allEntries.items", allEntries.items);
        //     setImageList(allEntries.items);
        //   });

        await client
          .getEntries({ content_type: "banner" })
          .then((galleryBanner) => {
            setGalleryBanner(
              galleryBanner.items[0].fields.backgroundImage[0].secure_url
            );
          });
      } catch (error) {
        console.log("error");
      }
    };

    getContentfulEntries();
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
      {/* <div className=""> */}
      <SEO
        title={`Marilyn's Windows | Gallery Room | ${imageData?.fields?.cardTitle}`}
        description={`${imageData?.fields?.metaDescription}`}
      />
      <Header3 />

      <div className="page-content">
        {galleryBanner && (
          <Banner3
            title="Gallery Photo"
            pagename="Blog Post"
            bgimage={galleryBanner}
            // posLeft={true}
            posRight={true}
          />
        )}

        <div className="">
          <div className="container">
            <div className="">
              {/* BREADCRUMB ROW */}
              <div className="">
                <div className="p-tb20 m-r40 m-b00">
                  <div>
                    <ul className="wt-breadcrumb breadcrumb-style-2">
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>
                        <Link to={"/gallery"}>Gallery</Link>
                      </li>
                      <li>High-Def Photo</li>
                    </ul>
                  </div>

                  {/* <div className="wt-separator-outer">
                    <div className="wt-separator bg-black" />
                  </div> */}
                </div>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>

          <div className="container">
            <div className="">
              {/* IMG CONTENT START */}
              {spinner && <Loader />}
              <div className="section-content ">
                <>
                  {imageData && (
                    <>
                      <div
                        className="section-full p-t0 p-b40 tm-work-wrap text-center"
                        width={2000}
                        height={1200}
                      >
                        {/* <div className="container"> */}
                        <img
                          src={imageData.fields.largeImage[0].secure_url}
                          alt={
                            imageData.fields.largeImage[0]?.context?.custom?.alt
                          }
                          caption={
                            imageData.fields.largeImage[0]?.context?.custom
                              ?.caption
                          }
                          data-pin-description={
                            imageData.fields.largeImage[0]?.context?.custom
                              ?.dataPin
                          }
                          width={2000}
                          height={1200}
                        />
                        {/* </div> */}
                      </div>
                    </>
                  )}
                </>
              </div>
              {/* IMG CONTENT END  */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* {bannerContent && (
            <Banner
              title={bannerContent.heading}
              pagename={bannerContent.pageName}
              bgimage={bannerContent.backgroundImage[0].secure_url}
            />
          )} */}
        <>
          <div className="container">
            <div id="work" className="section-full p-t10 latest_project-outer">
              <div className=""></div>

              {/* HEADING AND PARAGRAPH START */}
              {/* TITLE START */}
              <div className="section-head text-left">
                {imageData && (
                  <>
                    <div className="row">
                      <div className="col-md-7 col-lg-7">
                        <div className="">
                          <h2 className="text-uppercase font-34">
                            {imageData.fields.cardTitle}
                          </h2>
                          <div className="wt-separator-outer">
                            <div className="wt-separator bg-black" />
                          </div>
                        </div>
                        <div className="">
                          <p className="p-r30">
                            {imageData.fields.cardDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row"></div>
                  </>
                )}
              </div>

              {/* TITLE END */}
              {/* HEADING AND PARAGRAPH END */}
              <div className="section-content m-t20 ">
                <div className="m-b15">
                  {/* react-shares here */}
                  <div className="wt-box">
                    <div className="row  p-lr15">
                      <h2 className="tagcloud text-uppercase">
                        Share this Post:
                      </h2>
                      <div className="widget_social_inks">
                        <ul className="social-icons social-md social-square social-dark m-b40">
                          <li>
                            <FacebookShareButton
                              hashtag={"#marilynswindowsandinteriors"}
                              quote={`Checkout this fantastic room by Marilyn: '${imageData?.fields?.descriptiveTitle}'`}
                              url={galleryRoute}
                              aria-label="Share to Facebook"
                              role="button"
                            >
                              <a className="">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                            </FacebookShareButton>
                          </li>
                          <li>
                            <TwitterShareButton
                              title={`Another Fantastic Room by Marilyn: '${imageData?.fields?.descriptiveTitle}':`}
                              hashtags={["marilynswindowsandinteriors"]}
                              url={galleryRoute}
                              aria-label="Share to Twitter"
                              role="button"
                            >
                              <a className="">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                            </TwitterShareButton>
                          </li>
                          <li>
                            <LinkedinShareButton
                              title={imageData?.fields?.descriptiveTitle}
                              summary={imageData?.fields?.metaDescription}
                              source={galleryRoute}
                              url={galleryRoute}
                            >
                              <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://in.linkedin.com"
                                aria-label="Share to Linkedin"
                                role="button"
                              >
                                <i className="fa fa-linkedin" aria-hidden="true" />
                              </a>
                            </LinkedinShareButton>
                          </li>
                          <li>
                            <EmailShareButton
                              subject={`Share or save this room example from Marilyn's Gallery: '${imageData?.fields?.descriptiveTitle}'`}
                              body="Link to a high-def image: "
                              url={galleryRoute}
                              role="button"
                              aria-label="Share to Email"
                            >
                              <a >
                                <i className="fa fa-envelope" aria-hidden="true" />
                              </a>
                            </EmailShareButton>
                          </li>
                          <li>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                navigator.clipboard.writeText(galleryRoute);
                                clipboardToast();
                              }}
                              aria-label="Copy Link Address"
                              role="button"
                            >
                              <i className="fa fa-link" aria-hidden="true" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a
                  href="/gallery"
                  className="site-button black button-app m-r15 m-b15 "
                >
                  <span className="text-center">Visit My Gallery</span>
                </a> */}
              </div>
            </div>
          </div>

          {/* <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
            <strong>30+ Years</strong>
            <span className="text-black">Working Experience</span>
          </div> */}
        </>
      </div>
      <div className="container">
        <div className="container">
          <div
            style={{
              width: "100%",
              height: "5px",
              borderBottom: "2px solid lightgrey",
            }}
          ></div>
        </div>
      </div>

      {imageData && (
        <div className="page-content">
          <LatestProjects2 />
        </div>
      )}

      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* </div> */}
    </>
  );
};

export default GallerySingle;
