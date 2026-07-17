import { NavLink } from "react-router-dom";

import { homeAbout } from "../../content/homeContent";

const About = () => {
  const { image } = homeAbout;

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
              <div
                className="m-carousel-1 m-l50 mod add-box-shadow2"
                style={{ background: "white", padding: "5px" }}
              >
                <div className="ow-img wt-img-effect zoom-slow home-about-static-image">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
