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

const ClientsLogoEmbla = ({ content = [] }) => {
  const suppliers = content.map(normalizeSupplier);

  return (
    <div
      id="clientsLogo"
      className="section-full p-tb40 bg-black square_shape4 tm-client-wrap"
    >
      <div className="p-t48 p-b50">
        <div className="container">
          <div className="section-content">
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
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-sm-12">
                <div className="section-content bg-white p-tb80">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsLogoEmbla;
