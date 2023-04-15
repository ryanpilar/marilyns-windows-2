import React from "react";
import { HashLink } from "react-router-hash-link";

import SEO from "../Segments/SEO";
import Header3 from "../Common/Header3";
import Footer from "../Common/Footer";

import { NavLink } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <SEO
          title={`Marilyn's Windows | 404 Error. Oops! You seem to be lost`}
          description={`Custom handcrafted window coverings, curtains, shades, blinds and soft furnishings. Serving Milton, Burlington, Oakville, Mississauga and surrounding areas.`}
          robots={'noindex, follow'}

        />

        <Header3 />
        <div className="page-content">
          <div className="section-full p-tb90 bg-gray square_shape2 tm-about2-wrap">
            <div className="container">
              <div className="col-lg-6 col-md-6 ">
                <div className="m-about-containt text-uppercase text-black p-t30">
                  <ul className="primary"></ul>
                </div>
                <div className="m-b0">
                  {/* TITLE START */}
                  <div className="section-head">
                    <h2 className="font-40">
                      404 Error. Oops! You seem to be lost.
                    </h2>

                    <div className="wt-separator-outer">
                      <div className="wt-separator bg-black" />
                    </div>
                  </div>
                  {/* TITLE END */}

                  {/* LISTING WITH SYMBOLES */}
                  <div className="section-content">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <p>
                          <b>Here are some helpful links:</b>
                        </p>
                        <ul className="list-arrow">
                          <li>
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li>
                            <NavLink to="/aboutme">My Story</NavLink>
                          </li>
                          <li>
                            <NavLink to="/services">Services</NavLink>
                          </li>
                          <li>
                            <NavLink to="/gallery">Gallery</NavLink>
                          </li>
                          <li>
                            <NavLink to="/blog">Blog</NavLink>
                          </li>
                          <li>
                            <HashLink
                              smooth
                              className=""
                              to="/services/#contact"
                            >
                              Contact
                            </HashLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default NotFound;
