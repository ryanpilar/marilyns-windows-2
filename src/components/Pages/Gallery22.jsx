import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import createContentfulClient from "../../utils/createContentfulClient";
import loadMasonryAssets from "../../utils/loadMasonryAssets";

import SEO from "../Segments/SEO";
import Header3 from "../Common/Header3";
import Banner from "../Segments/Banner";
import Footer from "../Common/Footer";

const Gallery22 = () => {
  const [imageList, setImageList] = useState(null);
  const [bannerContent, setBannerContent] = useState(null);
  const [openCards, setOpenCards] = useState({});
  const [activeFilter, setActiveFilter] = useState("*");
  const filters = [
    { label: "Bed", filter: ".Bedroom" },
    { label: "Bath", filter: ".Bathroom" },
    { label: "Dine", filter: ".Dining" },
    { label: "Kitchen", filter: ".Kitchen" },
    { label: "Living", filter: ".Living" },
    { label: "Office", filter: ".Office" },
  ];
  const filterTabs = [{ label: "All", filter: "*" }, ...filters];

  const cononicalLocation = useLocation();

  

  // Get Blog Post data from Contentful:
  useEffect(() => {
    const client = createContentfulClient()
    const getAllEntries = async () => {
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
      try {
        await client
          .getEntries({ content_type: "banner" })
          .then((allEntries) => {
            setBannerContent(allEntries.items[0].fields);
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

  useEffect(() => {
    if (!imageList) {
      return;
    }

    loadMasonryAssets();
  }, [imageList]);

  const toggleCardOverlay = (slug) => {
    setOpenCards((previous) => ({
      ...previous,
      [slug]: !previous[slug],
    }));
  };

  const closeCardOverlay = (event, slug) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenCards((previous) => ({
      ...previous,
      [slug]: false,
    }));
  };

  const handleFilterTabKeyDown = (event, index) => {
    const horizontalKeys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!horizontalKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % filterTabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + filterTabs.length) % filterTabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = filterTabs.length - 1;
    }

    const nextFilter = filterTabs[nextIndex].filter;
    setActiveFilter(nextFilter);

    window.requestAnimationFrame(() => {
      const nextTab = document.getElementById(`gallery-filter-tab-${nextIndex}`);
      if (nextTab) {
        nextTab.focus();
      }
    });
  };

  // Scroll to top upon page load
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
        title={`Gallery | A Collection of Marilyn's Beautiful Custom Window Treatment Designs`}
        description={`Bedroom curtain ideas. Window coverings for patio doors. Living room drapery ideas. Light filtering curtains and blackout blinds. Outdoor curtain ideas.`}
        location={cononicalLocation.pathname}
        robots={'index, follow'}
      />

      <Header3 />

      <div className="page-content ">
        <Banner
          title={`Marilyn's Gallery`}
          pagename={bannerContent?.pageName}
          bgimage={bannerContent?.backgroundImage?.[0]?.secure_url}
          posLeft={true}
          // posRight={true}
        />

        {imageList && (
          <section
            className="section-full p-t5 p-b90 tm-work-wrap  "
            aria-labelledby="gallery-intro-title"
          >
            <div className="container">
              <div className="container">
                <div className="">
                  {/* BREADCRUMB ROW START*/}
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

                <div className="row">
                  <div className="col-lg-8 col-md-9 col-sm-12">
                    {/* TITLE START */}
                    <div className="section-head text-left text-black p-t20">
                      <h2
                        id="gallery-intro-title"
                        className="text-uppercase font-34"
                      >
                        Explore Our Collection of Beautiful Drapes, Blinds, and
                        Other Unique Works
                      </h2>
                      <div className="wt-separator-outer">
                        <div className="wt-separator bg-black" />
                      </div>
                    </div>
                    {/* TITLE END */}

                    <p className="p-r30">
                      We invite you to take a closer look at our portfolio and
                      appreciate the level of quality and attention to detail
                      that goes into each of our projects.
                    </p>
                    <p className="p-r30">
                      From modern minimalism to classic elegance, our designs
                      are tailored to suit the unique needs and preferences of
                      each client.
                    </p>
                  </div>
                </div>
                {/* PAGINATION START */}
                <div className="filter-wrap p-b50 p-t10">
                  <ul
                    className="masonry-filter link-style  text-uppercase "
                    role="tablist"
                    aria-label="Filter gallery items by room type"
                  >
                    {filterTabs.map((item, index) => {
                      const isActive = activeFilter === item.filter;
                      return (
                      <li
                        key={index}
                        role="presentation"
                        className={isActive ? "active" : ""}
                      >
                        <button
                          id={`gallery-filter-tab-${index}`}
                          role="tab"
                          type="button"
                          data-filter={item.filter}
                          className={index === 0 ? "font-30 " : undefined}
                          aria-label={`Show ${item.label.toLowerCase()} items`}
                          aria-selected={isActive}
                          aria-controls="gallery-grid"
                          tabIndex={isActive ? 0 : -1}
                          onKeyDown={(event) =>
                            handleFilterTabKeyDown(event, index)
                          }
                          onClick={() => setActiveFilter(item.filter)}
                        >
                          {item.label}
                        </button>
                      </li>
                    )})}
                  </ul>
                </div>
                {/* PAGINATION END */}
              </div>
            </div>

            {/* GALLERY CONTENT START */}
            <section
              id="gallery-grid"
              role="tabpanel"
              aria-labelledby={`gallery-filter-tab-${filterTabs.findIndex(
                (tab) => tab.filter === activeFilter
              )}`}
              className="portfolio-wrap mfp-gallery work-grid clearfix "
              aria-label="Gallery items"
            >
              <div className="container-fluid ">
                <div className="row m-lr10 " role="list">
                  {imageList.map((item, index) => (
                    <div
                      key={index}
                      role="listitem"
                      className={`${item.fields.filter} masonry-item col-lg-3 col-md-6 col-sm-6 m-b30 `}
                    >
                      <div className="add-box-shadow p-a5">
                        <div
                          className="wt-img-effect wt-img-black-bg gallery-click-overlay-card"
                          onClick={() => toggleCardOverlay(item.fields.slug)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              toggleCardOverlay(item.fields.slug);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label={`Toggle details for ${item.fields.cardTitle}`}
                        >
                          <div className="img-opacity ">
                            <img
                              src={item.fields.smallImage[0].secure_url}
                              alt={
                                item.fields.smallImage[0]?.context?.custom
                                  ?.alt
                              }
                              loading="lazy"
                              decoding="async"
                              fetchpriority="low"
                              data-caption={
                                item.fields.smallImage[0]?.context?.custom
                                  ?.caption
                              }
                              data-pin-description={
                                item.fields.smallImage[0]?.context?.custom
                                  ?.dataPin
                              }
                              width={360}
                              height={560}
                            />
                          </div>
                          <div
                            className={`overlay-bx-2 gallery-click-overlay${
                              openCards[item.fields.slug] ? " is-open" : ""
                            }`}
                          >
                            <div className="line-amiation">
                              <div className="text-white font-weight-300 p-a40">
                                <button
                                  type="button"
                                  className="gallery-click-overlay-close"
                                  aria-label="Close card details"
                                  onClick={(event) =>
                                    closeCardOverlay(event, item.fields.slug)
                                  }
                                >
                                  <span
                                    className="gallery-click-overlay-close-icon"
                                    aria-hidden="true"
                                  ></span>
                                </button>
                                <h3 className="gallery-click-overlay-title text-white font-20 letter-spacing-1 text-uppercase">
                                  {item.fields.cardTitle}
                                </h3>
                                <p className="gallery-click-overlay-description">
                                  {item.fields.cardDescription}
                                </p>
                                <NavLink
                                  to={`/gallery/room/${item.fields.slug}`}
                                  className="gallery-click-overlay-see-more"
                                  onClick={(event) => event.stopPropagation()}
                                >
                                  See More
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* GALLERY CONTENT END */}
          </section>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Gallery22;
