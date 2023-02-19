import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { createClient } from "contentful";
import { useEffect, useState } from "react";

const ClientsLogo = ({ supplierList }) => {
  const [content, setContent] = useState(null);

  // Connect And Data Fetch From Contentful & Shuffle
  useEffect(() => {
    // Connectto Connectful
    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });

    // Shuffle entries
    const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remains elements to shuffle,
    while (currentIndex !== 0) {
      // Pick a remaining element
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
    return shuffle(projects);
  };
    const getAllEntries = async () => {
      try {
        await client
          .getEntries({ content_type: "affiliates" })
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

  // Owl Carousel Options
  const options = {
    autoplay: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
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
      767: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div
        id="clientsLogo"
        className="section-full p-tb40 bg-black square_shape4 tm-client-wrap"
      >
        <div className="p-t48 p-b50 ">
          <div className="container">
            <div className="section-content">
              <div className="">
                <div className="row">
                  <div className="p-b50">
                    <div className="col-md-9 col-sm-12 p-b10">
                      <div className="text-left">
                        <h2 className="text-uppercase font-34 text-white">
                          Our Premium Suppliers
                        </h2>
                        <div className="wt-separator-outer">
                          <div className="wt-separator bg-white" />
                        </div>

                        {supplierList && (
                          <div className="text-brownish m-t30 m-b40">
                            <h3 className="text-brownish">
                              Blinds, Smart Blinds, Shutters & Sheers:
                            </h3>
                            <p className="for-affiliates m-b40 p-l30">
                              <a
                                className="p-r10"
                                href="https://www.altawindowfashions.ca/"
                                target="_blank"
                              >
                                Alta Window Fashions & Shadeomatic
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://www.shadex.com/"
                                target="_blank"
                              >
                                Shadex
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://maxxmar.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Maxxmar Window Fashion's home page"
                              >
                                Maxxmar Window Fashions
                              </a>
                            </p>
                            <h3 className="text-brownish">Designer Fabrics:</h3>
                            <p className="for-affiliates p-l30">
                              <a
                                className="p-r10"
                                href="https://robertallendesign.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Robert Allen's Home page"
                              >
                                Robert Allen Design
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://uniquefinefabrics.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Uniques's home page"
                              >
                                Unique Fine Fabrics
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://equusfabrics.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Equus home page"
                              >
                                Equus Fabrics
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://www.soletexfabrics.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Soletex Home page"
                              >
                                Soletex Fabrics
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://www.jffabrics.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="JF Fabric's Home page"
                              >
                                Joanne Fabrics
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://maxwellfabrics.com/Homepage"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Maxwell Fabric's home page"
                              >
                                Maxwell Fabrics
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://www.alendelfabrics.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Alendel Fabric's home page"
                              >
                                Alendel Fabrics
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://fscontract.ca/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Four Seasons Decorative Fabric's home page"
                              >
                                Four Seasons Decorative Fabrics
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://europeantextiles.ca/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="European Textile's home page"
                              >
                                European Textiles
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="http://signaturetextiles.ca/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Signature Textile's home page"
                              >
                                Signature Textiles
                              </a>
                            </p>
                            <h3 className="text-brownish">Premium Hardware:</h3>
                            <p className="for-affiliates p-l30">
                              <a
                                className="p-r10"
                                href="https://www.jffabrics.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="JF Fabric's Home page"
                              >
                                JF Hardware
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://www.cdhltd.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Canadian Drapery Hardware's home page"
                              >
                                Canadian Drapery Hardware
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://uniquefinefabrics.com/collections/hardware"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Equus home page"
                              >
                                Trax via Unique Fabrics
                              </a>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <div className="section-content bg-white p-tb80">
                      {content && (
                        <OwlCarousel
                          className="owl-carousel home-client-carousel owl-btn-center-v"
                          {...options}
                        >
                          {content.map((item, index) => (
                            <div className="item" key={index}>
                              <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                  <a
                                    href={item.fields.companyWebsite}
                                    target="_blank"
                                    aria-label={`Visit ${item.fields.title}`}
                                  >
                                    <img
                                      src={item.fields.logo[0].secure_url}
                                      alt={
                                        item.fields.logo[0].context.custom.alt
                                      }
                                      width={200}
                                      height={120}
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </OwlCarousel>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsLogo;
