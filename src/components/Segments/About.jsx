import { NavLink } from "react-router-dom";

import LazyOwlCarousel from "../Common/LazyOwlCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { homeAbout } from "../../content/homeContent";

const About = () => {
  const options = {
    smartSpeed: 700,
    loop: false,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 5000,
    nav: false,
    dots: false,
    navElement: 'button type="button"',
    navText: [
      '<span class="sr-only">Previous slide</span><i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<span class="sr-only">Next slide</span><i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: { items: 1 },
      480: { items: 1 },
      767: { items: 1 },
      1000: { items: 1 },
    },
  };

  return (
    <div id="about" className="section-full p-t90 bg-gray tm-welcome-warp">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-md-5 col-sm-12 text-black about-copy home-copy-offset">
              <span className="font-22 font-weight-400 text-uppercase">
                {homeAbout.eyebrow}
              </span>
              <h1 className="text-uppercase font-30">{homeAbout.heading}</h1>

              {homeAbout.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <NavLink
                to="/services"
                className="btn-half text-white site-button adjust-color button-md m-b15 m-r20"
              >
                <span className="p-lr5">Services</span>
                <em />
              </NavLink>

              <NavLink
                to="/gallery"
                className="btn-half text-white site-button adjust-color button-md m-b15"
              >
                <span className="p-lr5">Gallery</span>
                <em />
              </NavLink>
            </div>

            <div className="col-md-7 col-sm-12 m-b60">
              <div className="m-carousel-1 m-l50 mod add-box-shadow2">
                <LazyOwlCarousel
                  className="owl-carousel home-carousel-1 owl-btn-vertical-center"
                  style={{ background: "white", padding: "5px" }}
                  {...options}
                >
                  {homeAbout.images.map((image) => (
                    <div className="item" key={image.src}>
                      <div className="ow-img wt-img-effect zoom-slow">
                        <img
                          src={image.src}
                          alt={image.alt}
                          data-pin-description={image.dataPin}
                          data-caption={image.caption}
                          loading="lazy"
                          decoding="async"
                          width={image.width}
                          height={image.height}
                        />
                      </div>
                    </div>
                  ))}
                </LazyOwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
