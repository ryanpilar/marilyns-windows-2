import React from "react";
// import { NavLink } from 'react-router-dom';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS } from "@contentful/rich-text-types";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  richTextConversion = (richText) => {
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

  render() {
    const images = this.props.content.cloudinaryImage;

    const options = {
      smartSpeed: 700,
      loop: true,
      margin: 0,
      autoplay: true,
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
        <div id="about" className="section-full p-t90 bg-gray tm-welcome-warp">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-5 col-sm-12 text-uppercase text-black">
                  <span className="font-30 font-weight-300">
                    {this.props.content.span}
                  </span>
                  <h2 className="font-40">{this.props.content.heading}</h2>

                  {/* richTextConverstion renders in a <p> */}
                  <div className="text-lowercase">
                    {this.richTextConversion(this.props.content.topParagraph)}
                  </div>

                  <div className="text-lowercase">
                    {this.richTextConversion(
                      this.props.content.bottomParagraph
                    )}
                  </div>
                  <a
                    href="/aboutme"
                    className="btn-half site-button button-lg m-b15"
                  >
                    <span>Read My Full Story</span>
                    <em />
                  </a>
                </div>

                <div className="col-md-7 col-sm-12">
                  <div className="m-carousel-1 m-l100">
                    <OwlCarousel
                      className="owl-carousel home-carousel-1 owl-btn-vertical-center"
                      {...options}
                    >
                      {images.map((item, index) => (
                        <div className="item" key={index}>
                          <div className="ow-img wt-img-effect zoom-slow">
                            <img
                              src={item.secure_url}
                              alt={item.context.custom.alt}
                              data-pin-description={item.context.custom.dataPin}
                              caption={item.context.custom.caption}
                              width={800}
                              height={500}
                            />
                          </div>
                        </div>
                      ))}
                    </OwlCarousel>
                  </div>
                </div>
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
  }
}

export default About;
