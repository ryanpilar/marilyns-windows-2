import { useEffect, useState } from "react";
import createContentfulClient from "../../utils/createContentfulClient";
import { Link } from "react-router-dom";

const servicesleft = [
  {
    counter: 0,
    title: "Custom Drapery",
    description: `Stitched with the finest quality
          materials & textiles, and installed by a team of
          experts.`,
  },
  {
    counter: 1,
    title: "BLINDS & SMART BLINDS",
    description: `Control light and privacy. 
    Comes in a variety of materials, like wood, metal, vinyl, and can be 
    made to block/filter light.`,
  },

  {
    counter: 5,
    title: "WINDOW SEATS & THROW PILLOWS",
    description:
      "Amazing window seat design ideas to tie the room together. ",
  },
];

const servicesright = [
  {
    counter: 3,
    title: "CUSTOM DRAPERY HARDWARE",
    description:
      "Impressive curtain rods and drapery hardware are necessary for stunning drapes.",
  },

  {
    counter: 4,
    title: "SUNSET, SHADOW MAGIC & SILOUETTE LIKE SHADES",
    description: "Don't be fooled, this blind goes by many different names!",
  },

  {
    counter: 2,
    title: "SHUTTERS",
    description:
      "We help you pick all the right options, sizes and colours and are experts at oddly shaped windows.",
  },
];

const Services = ({ showButton }) => {
  const [content, setContent] = useState(null);

  // contentful connect
  const client = createContentfulClient()

  useEffect(() => {

    // contentful get data
    const getAllEntries = async () => {
      try {
        await client
          .getEntries({ content_type: "services" })
          .then((allEntries) => {
            setContent(allEntries.items[0].fields);
          });
      } catch (error) {
        console.log(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };

    getAllEntries();
  }, []);

  return (
    <>
      {content && (
        <div
          id="services"
          className="section-full p-t90 p-b50 overlay-wraper bg-top-center bg-parallax tm-facts-wrap"
          data-stellar-background-ratio="0.5"
          style={{
            backgroundImage: `url(${content.backgroundImage[0].secure_url})`,
          }}
        >
          <div className="overlay-main opacity-08 bg-black" />
          <div className="container ">
            <div className="section-content ">
              {/* TITLE START */}
              <div className="section-head text-left">
                <div className="row m-t30">
                  <div className="section-head text-white col-lg-4 col-md-12 ">
                    <h2 className="text-uppercase font-34 ">
                      Services - a quick view
                    </h2>
                    <div className="wt-separator-outer">
                      <div className="wt-separator bg-white" />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-9 col-sm-12 m-b40 ">
                    <p className="p-r30 text-left text-white font-weight-300">
                      We are a Canadian workroom! Specializing in high-end blinds, shades, and shutters, and we
                      also love to finish off rooms and spaces with custom throw pillows,
                      cushions, and other soft furnishings.
                      
                      {/* As industry leaders in bespoke window coverings design and
                      fabrication, we pride ourselves on creating truly
                      one-of-a-kind pieces. */}
                    </p>

                    <p className="p-r30 text-left text-white font-weight-300">
                      Each piece we work on is 
                      meticulously handcrafted and sewn with the finest
                      materials, premium fabrics, and top-of-the-line hardware.
                    </p>
                    <p className="p-r30 text-left text-white font-weight-300">
                      We have the best window solutions to match your needs,
                      whether you are perfecting an interior design or
                      considering energy efficiency, privacy, automation, light
                      filtering & blackout, etc. Learn more on our{" "}
                      <Link
                        className="link-style font-14 text-uppercase"
                        to="/services"
                      >
                        Services
                      </Link>{" "}
                      page.
                    </p>

                  </div>
                </div>
              </div>
              {/* TITLE END */}
            </div>

            <div
              className="section-content circle-block-outer "
              data-toggle="tab-hover"
            >
              <div className="row">
                <div className="col-md-6 col-sm-12 m-b30 ">
                  {servicesleft.map((item, index) => (
                    <div
                      className="wt-icon-box-wraper right p-a20 m-b50 text-white "
                      data-target={`#tab${item.counter}`}
                      data-toggle="tab"
                      key={index}
                    >
                      <div className="icon-content">
                        <h3 className="wt-tilte text-uppercase">
                          {item.title}
                        </h3>
                        <p className='font-15'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <div className="col-md-4 col-sm-12 m-b30 ">
                  <div className="circle-content-pic tab-content ">
                    {content.cloudinaryImage.map((item, index) => (
                      <div
                        className={index === 0 ? `tab-pane active ` : `tab-pane`}
                        id={`tab${index}`}
                        key={index}
                      >
                        <div className="wt-box ">
                          <div className="wt-media text-primary m-b20  ">
                            <img
                              // src={item.secure_url}
                              src={servicesImage}
                              alt={item.context.custom.alt}
                              data-pin-description={item.context.custom.dataPin}
                              data-caption={item.context.custom.caption}
                              width="360"
                              height="560"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}

                <div className="col-md-6 col-sm-12 m-b30">
                  {servicesright.map((item, index) => (
                    <div
                      className="wt-icon-box-wraper left p-a20 m-b50 text-white"
                      data-target={`#tab${item.counter}`}
                      data-toggle="tab"
                      key={index}
                    >
                      <div className="icon-content">
                        <h3 className="wt-tilte text-uppercase">
                          {item.title}
                        </h3>
                        <p className='font-14'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-sm-12">
                  <h2 className="text-brownish">Locations We Serve</h2>
                  <p className="p-r30 text-left text-white font-18 font-weight-300">
                    <span className="">Milton</span> |{" "}
                    <span className="p-lr5">Georgetown</span> |{" "}
                    <span className="p-lr5">Burlington</span> |{" "}
                    <span className="p-lr5">Oakville</span> |{" "}
                    <span className="p-lr5">Mississauga</span> |{" "}
                    <span className="p-lr5">and surrounding areas...</span>
                  </p>
                </div>

                {showButton && (
                  <div className="col-sm-12 m-tb30 text-center">
                    <Link
                      to={"/services"}
                      className="btn-half2 site-button button-xl font-weight-600 font-30 m-tb15 text-right"
                    >
                      <span>Services</span>
                      <em />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
