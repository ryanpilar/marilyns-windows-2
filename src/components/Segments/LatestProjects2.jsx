import { useEffect, useRef, useState } from "react";
import createContentfulClient from "../../utils/createContentfulClient";
import { Link } from "react-router-dom";

import LazyOwlCarousel from "../Common/LazyOwlCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const LatestProjects2 = ({
  content,
  excludedSlug,
  sectionClassName = "",
  outerContainerClassName = "",
  carouselContainerClassName = "",
  sectionStyle,
  outerContainerStyle,
  carouselContainerStyle,
}) => {
  const [imageList, setImageList] = useState(null);
  const carouselContainerRef = useRef(null);
  const SMALL_CARD_WIDTH_THRESHOLD = 225;
  const SMALL_CARD_MAX_DESCRIPTION_CHARS = 150;

  const truncateDescription = (text, maxChars) => {
    if (!text || text.length <= maxChars) {
      return text;
    }

    const trimmed = text.slice(0, maxChars);
    const lastSpaceIndex = trimmed.lastIndexOf(" ");
    const safeText = lastSpaceIndex > 0 ? trimmed.slice(0, lastSpaceIndex) : trimmed;
    return `${safeText}...`;
  };

  // Connect to Contentful, Fetch Data & Shuffle
  useEffect(() => {
    const client = createContentfulClient();

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
            const filteredProjects = excludedSlug
              ? allEntries.items.filter(
                  (item) => item?.fields?.slug !== excludedSlug
                )
              : allEntries.items;

            setImageList(selectRandom(filteredProjects));
          });
      } catch (error) {
        console.log("error");
      }
    };

    getEntry();
  }, [excludedSlug]);

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
        overlay?.classList.remove("is-open");
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
      overlay?.classList.toggle("is-open");
    };

    container.addEventListener("click", handleCardClick);

    return () => {
      container.removeEventListener("click", handleCardClick);
    };
  }, [imageList]);

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
        className={`section-full p-t90 square_shape3 ${sectionClassName}`.trim()}
        style={sectionStyle}
      >
        <div
          className={`container ${outerContainerClassName}`.trim()}
          style={outerContainerStyle}
        >
          <div className="">
            <div className="section-content">
              {/* TITLE START */}
              <div className="section-head text-left gallery-related-title">
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
          <div
            className={`gallery-related-cards ${carouselContainerClassName}`.trim()}
            style={carouselContainerStyle}
            ref={carouselContainerRef}
          >
            <div className="section-content">
              {imageList && (
                <LazyOwlCarousel
                  className="owl-carousel owl-carousel-filter  owl-btn-bottom-left"
                  {...options}
                >
                  <>
                    {imageList.map((item, index) => (
                      <div
                        key={index}
                        className={`${item.fields.filter} item fadingcol`}
                      >
                        <div className="wt-img-effect gallery-click-overlay-card">
                          <div className="wt-img-black-bg">
                            <div className="img-opacity">
                              <img
                                src={item.fields.smallImage[0].secure_url}
                                alt={
                                  item.fields.smallImage[0].context.custom.alt
                                }
                                data-caption={
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
                          <div className="overlay-bx-2 gallery-click-overlay">
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
                                  See More
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
