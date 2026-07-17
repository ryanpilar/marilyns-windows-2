import { NavLink } from "react-router-dom";

import LazyOwlCarousel from "../Common/LazyOwlCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { homeAboutSecondary } from "../../content/homeContent";

const About22 = () => {
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

  const { image } = homeAboutSecondary;

  return (
    <div
      id="about22"
      className="section-full p-t90 p-b90 bg-gray tm-welcome-warp"
    >
      <div className="container">
        <div className="section-content">
          <div className="row flex-reverse-stack">
            <div className="col-md-7 col-sm-12">
              <div className="m-carousel-1 m-r100 add-box-shadow">
                <LazyOwlCarousel
                  className="owl-carousel home-carousel-1 owl-btn-vertical-center"
                  style={{ background: "white", padding: "5px" }}
                  {...options}
                >
                  <div className="item">
                    <div className="ow-img wt-img-effect zoom-slow">
                      <img
                        className="item"
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
                </LazyOwlCarousel>
              </div>
            </div>

            <div className="col-md-5 col-sm-12 text-black home-copy-offset">
              <span className="font-22 font-weight-400 text-uppercase">
                {homeAboutSecondary.eyebrow}
              </span>
              <h2 className="text-uppercase font-30">
                {homeAboutSecondary.heading}
              </h2>

              <p className="m-b30">{homeAboutSecondary.paragraph}</p>

              <div className="text-right">
                <NavLink
                  to="/aboutme"
                  className="btn-half text-white site-button adjust-color button-md m-b15 m-r20"
                >
                  <span className="p-lr5">My Story</span>
                  <em />
                </NavLink>
                <NavLink
                  to="/blog"
                  className="btn-half text-white site-button adjust-color button-md m-b15 m-r5"
                >
                  <span className="p-lr5">Blog</span>
                  <em />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
            <strong>35+ Years</strong>
            <span className="text-black">Serving Milton & Halton</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About22;
