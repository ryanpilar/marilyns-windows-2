import React from "react";
import { Link } from "react-router-dom";
import createContentfulClient from "../../utils/createContentfulClient";
import { useEffect, useRef, useState } from "react";

import LazyOwlCarousel from "../Common/LazyOwlCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const LatestProjects = () => {
  const [content, setContent] = useState(null);
  const carouselContainerRef = useRef(null);
  const SMALL_CARD_WIDTH_THRESHOLD = 225;
  const SMALL_CARD_MAX_DESCRIPTION_CHARS = 125;

  const truncateDescription = (text, maxChars) => {
    if (!text || text.length <= maxChars) {
      return text;
    }

    const trimmed = text.slice(0, maxChars);
    const lastSpaceIndex = trimmed.lastIndexOf(" ");
    const safeText = lastSpaceIndex > 0 ? trimmed.slice(0, lastSpaceIndex) : trimmed;
    return `${safeText}...`;
  };

  // Connect to Contentful and Fetch Data
  useEffect(() => {
    const getAllEntries = async () => {
      const client = createContentfulClient()

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

  useEffect(() => {
    const container = carouselContainerRef.current;
    if (!container) {
      return;
    }

    const handleCardClick = (event) => {
      const closeButton = event.target.closest(".gallery-click-overlay-close");
      if (closeButton) {
        event.preventDefault();
        event.stopPropagation();
        const card = closeButton.closest(".gallery-click-overlay-card");
        const overlay = card?.querySelector(".gallery-click-overlay");
        if (overlay) {
          overlay.classList.remove("is-open");
          overlay.setAttribute("aria-hidden", "true");
          overlay.setAttribute("inert", "");
        }
        if (card) {
          card.setAttribute("aria-expanded", "false");
          card.focus();
        }
        return;
      }

      const link = event.target.closest("a");
      if (link) {
        return;
      }

      const card = event.target.closest(".gallery-click-overlay-card");
      if (!card || !container.contains(card)) {
        return;
      }

      const description = card.querySelector(".gallery-click-overlay-description");
      if (description) {
        const fullText = description.getAttribute("data-full-text") || "";
        const isSmallCard = card.getBoundingClientRect().width < SMALL_CARD_WIDTH_THRESHOLD;
        description.textContent = isSmallCard
          ? truncateDescription(fullText, SMALL_CARD_MAX_DESCRIPTION_CHARS)
          : fullText;
      }

      const overlay = card.querySelector(".gallery-click-overlay");
      if (overlay) {
        const isOpen = !overlay.classList.contains("is-open");
        overlay.classList.toggle("is-open", isOpen);
        overlay.setAttribute("aria-hidden", isOpen ? "false" : "true");
        if (isOpen) {
          overlay.removeAttribute("inert");
        } else {
          overlay.setAttribute("inert", "");
        }
        card.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    };

    const handleCardKeyDown = (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      if (event.target.closest("a, button")) {
        return;
      }

      const card = event.target.closest(".gallery-click-overlay-card");
      if (!card || !container.contains(card)) {
        return;
      }

      event.preventDefault();
      card.click();
    };

    container.addEventListener("click", handleCardClick);
    container.addEventListener("keydown", handleCardKeyDown);

    return () => {
      container.removeEventListener("click", handleCardClick);
      container.removeEventListener("keydown", handleCardKeyDown);
    };
  }, [content]);

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
    navElement: 'button type="button"',
    navText: [
      '<span class="sr-only">Previous slide</span><i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<span class="sr-only">Next slide</span><i class="fa fa-angle-right" aria-hidden="true"></i>',
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
        className="section-full p-t90 p-lr80 latest_project-outer square_shape3 home-latest-projects"
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
                    fit any design style. Visit the{" "}
                    <Link
                      className="link-style font-14 text-uppercase"
                      to="/gallery"
                    >
                      Gallery
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE CAROUSEL START */}
        <section
          className="section-content gallery-related-cards"
          ref={carouselContainerRef}
          aria-label="Latest projects gallery cards"
        >

          {content && (
            <LazyOwlCarousel
              className="owl-carousel owl-carousel-filter  owl-btn-bottom-left "
              {...options}
            >
              <>
                {selectRandom(content).map((item, index) => (
                  <div
                    key={index}
                    className={`${item.fields.filter} item fadingcol m-b20 add-box-shadow m-r15 p-a5`}
                  >
                    <div
                      className="wt-img-effect gallery-click-overlay-card"
                      role="button"
                      tabIndex={0}
                      aria-expanded="false"
                      aria-controls={`latest-projects-overlay-${item.fields.slug}-${index}`}
                      aria-label={`Toggle details for ${item.fields.cardTitle}`}
                    >
                      <div className="wt-img-black-bg">
                        <div className="img-opacity">
                          <img
                            src={item.fields.smallImage[0].secure_url}
                            alt={item.fields.smallImage[0].context.custom.alt}
                            loading="lazy"
                            decoding="async"
                            fetchpriority="low"
                            data-caption={
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

                      <div
                        id={`latest-projects-overlay-${item.fields.slug}-${index}`}
                        className="overlay-bx-2 gallery-click-overlay"
                        aria-hidden="true"
                        inert=""
                      >
                        <div className="line-amiation">
                          <div className="text-white  font-weight-300 p-a40">
                            <button
                              type="button"
                              className="gallery-click-overlay-close"
                              aria-label="Close card details"
                            >
                              <span
                                className="gallery-click-overlay-close-icon"
                                aria-hidden="true"
                              ></span>
                            </button>


                            <h3 className="text-white font-20 letter-spacing-1 text-uppercase gallery-click-overlay-title">
                              {item.fields.cardTitle}
                            </h3>
                            <p
                              className="gallery-click-overlay-description"
                              data-full-text={item.fields.cardDescription}
                            >
                              {item.fields.cardDescription}
                            </p>

                            <Link
                              to={`/gallery/room/${item.fields.slug}`}
                              className="gallery-click-overlay-see-more"
                            >
                              View Project
                              <span className="sr-only">
                                : {item.fields.cardTitle}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            </LazyOwlCarousel>
          )}
        </section>
        {/* IMAGE CAROUSEL END */}

        <div className="section-content m-t20 m-b40">
          <Link
            to="/gallery"
            className="btn-half site-button button-lg  font-30 m-tb15 text-right"
          >
            <span className="">Gallery</span>
            <em />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LatestProjects;
