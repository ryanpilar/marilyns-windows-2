import { NavLink } from "react-router-dom";

import { homeAboutSecondary } from "../../content/homeContent";
import { buildResponsiveCloudinarySrcSet } from "../../utils/responsiveCloudinaryImage";

const ABOUT_IMAGE_WIDTHS = [400, 600, 640, 800];

const About22 = () => {
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
              <div
                className="m-carousel-1 m-r100 add-box-shadow"
                style={{ background: "white", padding: "5px" }}
              >
                <div className="ow-img wt-img-effect zoom-slow home-about-static-image">
                  <img
                    src={image.src}
                    srcSet={buildResponsiveCloudinarySrcSet(
                      image.src,
                      ABOUT_IMAGE_WIDTHS
                    )}
                    sizes="(min-width: 1200px) 565px, (min-width: 992px) 48vw, (min-width: 768px) 55vw, calc(100vw - 30px)"
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
