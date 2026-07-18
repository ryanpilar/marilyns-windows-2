import EmblaCarousel from "../Common/EmblaCarousel";

const normalizeSupplier = (supplier) => {
  if (!supplier.fields) {
    return supplier;
  }

  const logo = supplier.fields.logo?.[0];

  return {
    title: supplier.fields.title,
    website: supplier.fields.companyWebsite,
    image: {
      src: logo?.secure_url,
      alt: logo?.context?.custom?.alt || supplier.fields.title,
    },
  };
};

const ClientsLogo = ({ content = [], supplierList }) => {
  const suppliers = content.map(normalizeSupplier);

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
                                rel="noreferrer noopener"
                              >
                                Alta Window Fashions & Shadeomatic
                              </a>{" "}
                              |
                              <a
                                className="p-lr10"
                                href="https://www.shadex.com/"
                                target="_blank"
                                rel="noreferrer noopener"
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
                      {suppliers.length > 0 && (
                        <EmblaCarousel
                          ariaLabel="Premium suppliers"
                          autoplay={{ delay: 5000 }}
                          className="embla-suppliers"
                          options={{ duration: 25, loop: true }}
                          navigationClassName="embla-suppliers__navigation"
                          showNavigation
                        >
                          {suppliers.map((supplier) => (
                            <div className="item" key={supplier.title}>
                              <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                  <a
                                    href={supplier.website}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label={`Visit ${supplier.title}`}
                                  >
                                    <img
                                      src={supplier.image.src}
                                      alt={supplier.image.alt}
                                      loading="lazy"
                                      decoding="async"
                                      fetchpriority="low"
                                      width={200}
                                      height={120}
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </EmblaCarousel>
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
