import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import { createClient } from "contentful";

import { NavLink } from "react-router-dom";
import Header2 from "../Common/Header2";
// import Footer from '../Common/Footer';
import Banner from "../Segments/Banner";
import SEO from "../Segments/SEO";

import { useParams } from "react-router-dom";
import Footer from "../Common/Footer";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import toast, { Toaster } from "react-hot-toast";

import Loader from "../Segments/Loader";

const GallerySingle = () => {
  const { id } = useParams(); // grabs the contentful :id from the address bar (:id)
  const [imageData, setImageData] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [bannerContent, setBannerContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [spinner, setSpinner] = useState(true)

  const galleryRoute = `https://marilyns-windows.netlify.app/gallery/room/${id}`;

  const toggleSpinner = () => {
    setSpinner( prevState => !prevState )
}

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



  const client = createClient({
    // contentful connect
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((galleryEntry) => {
          // console.log("GALLERY ENTRY", galleryEntry);
          setImageData(galleryEntry);
          toggleSpinner()
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
        title={`Marilyn's Windows | Gallery Room | ${imageData?.fields?.cardTitle}`}
        description={`${imageData?.fields?.metaDescription}`}
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

        <>
          <div
            id="work"
            className="section-full p-t10 p-lr80 latest_project-outer square_shape3"
          >
            <div className="">
              <div className="section-content">
                {/* BREADCRUMB ROW */}
                <div className="">
                  <div className="p-t20 m-r20 m-b10">
                    <div>
                      <ul className="wt-breadcrumb breadcrumb-style-2">
                        <li>
                          <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/gallery"}>Gallery</NavLink>
                        </li>
                        <li>High-Def Photo</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* BREADCRUMB ROW END */}
              </div>
            </div>
            { spinner && <Loader /> }
            <div className="section-content text-center">
              {/* IMG CONTENT START */}

               
              
              <>
              
              {imageData && (
                <>
                
                <div className="section-full p-t0 p-b40 tm-work-wrap">
                  {/* <div className="container"> */}
                  <img
                    src={imageData.fields.largeImage[0].secure_url}
                    alt={imageData.fields.largeImage[0]?.context?.custom?.alt}
                    caption={
                      imageData.fields.largeImage[0]?.context?.custom?.caption
                    }
                    data-pin-description={
                      imageData.fields.largeImage[0]?.context?.custom?.dataPin
                    }
                    width="2000"
                    height="1200"
                  />
                  {/* </div> */}
                </div>
                </>

              )}

              </>
              
              
              
              
              {/* IMG CONTENT END  */}
            </div>

            {/* HEADING AND PARAGRAPH START */}
            {/* TITLE START */}
            <div className="section-head text-left">
              {imageData && (
                <>
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="col-sm-12">
                        <h2 className="text-uppercase font-36">
                          {imageData.fields.cardTitle}
                        </h2>

                        <div className="wt-separator-outer">
                          <div className="wt-separator bg-black" />
                        </div>
                      </div>

                      <div className="col-sm-12">
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
              <div className="m-b15 p-lr15">
                {/* react-shares here */}

                <div className="wt-box">
                  <div className="row  p-lr15">
                    <h4 className="tagcloud text-uppercase">
                      Share this Post:
                    </h4>

                    <div className="widget_social_inks">
                      <ul className="social-icons social-md social-square social-dark m-b40">
                        <li>
                          <FacebookShareButton
                            hashtag={"#marilynswindowsandinteriors"}
                            quote={`Checkout this fantastic room by Marilyn: '${imageData?.fields?.descriptiveTitle}'`}
                            url={galleryRoute}
                            aria-label="Share to Facebook"
                          >
                            <a className="fa fa-facebook" />
                          </FacebookShareButton>
                        </li>
                        <li>
                          <TwitterShareButton
                            title={`Another Fantastic Room by Marilyn: '${imageData?.fields?.descriptiveTitle}':`}
                            hashtags={["marilynswindowsandinteriors"]}
                            url={galleryRoute}
                            aria-label="Share to Twitter"
                          >
                            <a className="fa fa-twitter" />
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
                              rel="noreferrer"
                              href="https://in.linkedin.com"
                              className="fa fa-linkedin"
                              aria-label="Share to Linkedin"
                            />
                          </LinkedinShareButton>
                        </li>

                        <li>
                          <EmailShareButton
                            subject={`Share or save this room example from Marilyn's Gallery: '${imageData?.fields?.descriptiveTitle}'`}
                            body="Link to a high-def image: "
                            url={galleryRoute}
                          >
                            <a
                              className="fa fa-envelope"
                              aria-label="Share to Email"
                            />
                          </EmailShareButton>
                        </li>

                        <li>
                          <a
                            className="fa fa-link"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              navigator.clipboard.writeText(galleryRoute);
                              clipboardToast();
                            }}
                            aria-label="Copy Link Address"
                          />
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
        </>
      </div>

      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
      
    </>
  );
};

export default GallerySingle;
