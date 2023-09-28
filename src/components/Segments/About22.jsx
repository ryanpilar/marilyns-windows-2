import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import createContentfulClient from "../../utils/createContentfulClient";




const About22 = () => {
  const [content, setContent] = useState(null);
  console.log('content', content);

  // Process Rich Text Coming From Contentful
  const richTextConversion = (richText) => {
    if (richText) {
      const contentfulOptions = {
        renderMark: {
          [MARKS.CODE]: (embedded) => (
            <span dangerouslySetInnerHTML={{ __html: embedded }} />
          ),
        },
      };
      return documentToReactComponents(richText, contentfulOptions);
    } else {
      console.log("NO CONTENT PRESENT");
    }
  };

  // Connect And Data Fetch From Contentful
  useEffect(() => {
    const client = createContentfulClient()

    const getAllEntries = async () => {
      try {
        await client
          .getEntries({ content_type: "about22" })
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

  // Owl Carousel UX Options
  const options = {
    smartSpeed: 700,
    loop: false,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 5000,
    //center: true,
    nav: false,
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
        items: 1,
      },
      767: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <>
      <div id="about22" className="section-full p-t90 p-b90 bg-gray tm-welcome-warp">
        <div className="container">
          <div className="section-content">
            <div className="row flex-reverse-stack">

              <div className="col-md-7 col-sm-12 ">
                {content && (
                  <>
                    <div className="m-carousel-1 mod m-r100 add-box-shadow ">

                      <OwlCarousel
                        className="owl-carousel home-carousel-1 owl-btn-vertical-center "
                        style={{background: 'white', padding: '5px'}}
                        {...options}
                      >
                        {/* {content.cloudinaryImage.map((item, index) => ( */}
                          {content.cloudinaryImage.map((item, index) => (
                          <div className="item " key={index}>
                            <div className="ow-img wt-img-effect zoom-slow">
                              <img
                                
                                className="item"
                                src={item.secure_url}
                                alt={item.context.custom.alt}
                                data-pin-description={
                                  item.context.custom.dataPin
                                }
                                caption={item.context.custom.caption}
                                width={800}
                                height={500}
                              />
                              {/* <img
                                
                                className="item"
                                src={item}
                                alt='test'
                                data-pin-description='test'
                                caption='test'
                                width={800}
                                height={500}
                              /> */}
                            </div>
                          </div>
                        ))}
                      </OwlCarousel>
                    </div>
                  </>
                )}
              </div>

              {content && (
                <div className="col-md-5 col-sm-12 text-black  ">
                <span className="font-22 font-weight-400 text-uppercase ">
                Milton & Surrounding Areas
                  </span>
                  {/* <h2 className="font-22 font-weight-400 text-uppercase ">
                    Milton & Surrounding Areas
                  </h2> */}
                  <h1 className="text-uppercase font-30">
                    Handcrafted Window Treatments for Homes & Businesses
                  </h1>

                  {/* Attn: richTextConverstion renders in a <p> */}
                  <div className="m-b30">
                    For many years, we have been expertly creating custom window
                    treatments for homes and businesses across Oakville,
                    Burlington, Mississauga, Georgetown, Milton and surrounding
                    areas, bringing a touch of elegance to every space we serve.
                    {/* {richTextConversion(content.topParagraph)} */}
                  </div>

                  {/* <div className="">
                    {richTextConversion(content.bottomParagraph)}
                  </div> */}

                  <div className="text-right">
                    <NavLink
                      to={"/aboutme"}
                      className="btn-half text-white site-button adjust-color button-md m-b15 m-r20"
                    >
                      <span className="p-lr5">My Story</span>
                      <em />
                    </NavLink>
                    <NavLink
                      to={"/blog"}
                      className="btn-half text-white site-button adjust-color button-md m-b15 m-r15"
                    >
                      <span className="p-lr5"> Blog</span>
                      <em />
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
              <strong>30+ Years</strong>
              <span className="text-black">Working Experience</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About22;
