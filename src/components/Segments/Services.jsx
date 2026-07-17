import { Link } from "react-router-dom";

import { homeServices } from "../../content/homeContent";

const Services = ({ showButton }) => (
  <div
    id="services"
    className="section-full p-t90 p-b50 overlay-wraper bg-top-center bg-parallax tm-facts-wrap"
    data-stellar-background-ratio="0.5"
    style={{ backgroundImage: `url(${homeServices.backgroundImage})` }}
  >
    <div className="overlay-main opacity-08 bg-black" />
    <div className="container">
      <div className="section-content">
        <div className="section-head text-left">
          <div className="row m-t30">
            <div className="section-head text-white col-lg-4 col-md-12 home-copy-offset">
              <h2 className="text-uppercase font-34">
                {homeServices.heading}
              </h2>
              <div className="wt-separator-outer">
                <div className="wt-separator bg-white" />
              </div>
            </div>

            <div className="col-lg-8 col-md-9 col-sm-12 m-b40 home-copy-offset">
              {homeServices.introduction.map((paragraph) => (
                <p
                  className="text-left text-white font-weight-300"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
              <p className="text-left text-white font-weight-300">
                {homeServices.servicesPageLead}{" "}
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
      </div>

      <div className="section-content circle-block-outer" data-toggle="tab-hover">
        <div className="row">
          <div className="col-md-6 col-sm-12 m-b30">
            {homeServices.leftItems.map((item) => (
              <div
                className="wt-icon-box-wraper right p-a20 m-b50 text-white"
                data-target={`#tab${item.counter}`}
                data-toggle="tab"
                key={item.counter}
              >
                <div className="icon-content">
                  <h3 className="wt-tilte text-uppercase">{item.title}</h3>
                  <p className="font-15">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-6 col-sm-12 m-b30">
            {homeServices.rightItems.map((item) => (
              <div
                className="wt-icon-box-wraper left p-a20 m-b50 text-white"
                data-target={`#tab${item.counter}`}
                data-toggle="tab"
                key={item.counter}
              >
                <div className="icon-content">
                  <h3 className="wt-tilte text-uppercase">{item.title}</h3>
                  <p className="font-14">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-sm-12 home-copy-offset">
            <h2 className="text-brownish">Locations We Serve</h2>
            <ul className="locations-inline-list text-white font-18 font-weight-300">
              {homeServices.locations.map((location) => (
                <li key={location}>{location}</li>
              ))}
            </ul>
          </div>

          {showButton && (
            <div className="col-sm-12 m-tb30 text-center">
              <Link
                to="/services"
                className="btn-half2 site-button button-lg font-weight-600 font-30 m-tb15 text-right"
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
);

export default Services;
