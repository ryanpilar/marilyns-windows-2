import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import createContentfulClient from "../../utils/createContentfulClient";
import SEO from "../Segments/SEO";
import Header3 from "../Common/Header3";
import LatestProjects2 from "../Segments/LatestProjects2";
import Footer from "../Common/Footer";

import Loader from "../Segments/Loader";


const GallerySingle = () => {
  const { slug } = useParams();
  const [spinner, setSpinner] = useState(true);
  const [imageData, setImageData] = useState(null);

  const cononicalLocation = useLocation();

  // Spinner for when gallery content is loading
  const toggleSpinner = () => {
    setSpinner((prevState) => !prevState);
  };

  // Contentful connect and data fetch
  useEffect(() => {
    const client = createContentfulClient()
    const getContentfulEntries = async () => {
      try {
        await client
          .getEntries({ content_type: "gallery", "fields.slug": slug })
          .then((galleryEntry) => {
            setImageData(galleryEntry.items[0]);
            toggleSpinner();
          });
      } catch (error) {
        console.log("error");
      }
    };

    getContentfulEntries();
  }, []);

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

  return (
    <>
      <SEO
        title={`Gallery | ${imageData?.fields?.cardTitle}`}
        description={`${imageData?.fields?.metaDescription}`}
        location={ cononicalLocation.pathname }
        robots={'index, follow'}
      />

      <Header3 />

      <div className="page-content gallery-single-page">
        <div className="">
          <div className="container">
            <div className="">
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
                        <img
                          src={imageData.fields.largeImage[0].secure_url}
                          alt={
                            imageData.fields.largeImage[0]?.context?.custom?.alt
                          }
                          data-caption={
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

      <div className="container p-lr10 gallery-single-content-gutter">
        <>
          <div className="">
            <div id="work" className="section-full p-t10 latest_project-outer">
              <div className=""></div>

              {/* TITLE HEADING AND PARAGRAPH START */}
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
  <p className="p-r30 gallery-single-description">
    {imageData.fields.cardDescription}
  </p>
</div>
                      </div>
                    </div>
                    <div className="row"></div>
                  </>
                )}
              </div>
              {/* HEADING AND PARAGRAPH END */}

            </div>
          </div>
        </>
      </div>
      <div className="container p-lr10 gallery-single-mobile-gutter">
        <div className="">
          <div
            style={{
              width: "100%",
              height: "5px",
              borderBottom: "2px solid lightgrey",
            }}
          ></div>
        </div>
      </div>

      {/* OTHER GALLERY SUGGESTION (CAROUSEL) */}
      {imageData && (
        <div className="page-content">
          <LatestProjects2
            excludedSlug={slug}
            sectionClassName="gallery-single-related-spacing"
            outerContainerClassName="p-lr10 gallery-single-mobile-gutter"
          />
        </div>
      )}

      <Footer />

    </>
  );
};

export default GallerySingle;
