import React from "react";
import { useEffect, useState } from "react";

import Header3 from "../Common/Header3";
import Banner from "../Segments/Banner";

import Footer from "../Common/Footer";
import SEO from "../Segments/SEO";
import { createClient } from "contentful";
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

const TermsOfService = () => {
  const [banner, setBanner] = useState(null);

  const client = createClient({
    // contentful connect
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });


  useEffect(() => {
    window.addEventListener("load", () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener("load", () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);

  useEffect(() => {
    const getContentfulContents = async () => {
      try {
        await client
          .getEntries({ content_type: "servicesFull" })

          // await client.getEntries()
          .then((allEntries) => {
            const servicesContent = allEntries.items;

            setBanner({
              image: servicesContent[0].fields.topBanner[0].secure_url,
            });
          });
      } catch (error) {
        console.log(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };
    getContentfulContents();
  }, []);
  return (
    <>
      <SEO
        title={`Marilyn's Windows | Custom Drapery | Terms Of Service`}
        description={`Marilyn's Windows specializes in creating custom made drapes and window coverings. Learn more about our terms of service and commitment to customer satisfaction.`}
      />

      <Header3 />

      <div className="page-content">
        {banner && (
          <Banner
            heading="Services"
            title="Serving Milton, Georgetown, Burlington, Oakville Mississauga and surrounding areas."
            pagename="Services"
            bgimage={banner.image}
          />
        )}
      </div>

      <div className="page-content">
        <div className="container">
          <div className="max-mid-container">
            {/* BREADCRUMB ROW */}
            <div className="p-t20">
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>
            {/* BREADCRUMB ROW END */}
          </div>
        </div>

        {banner && (
          <>
            <div className="square_shape1 ">
              {/* <div className="section-full  p-t20 p-b90 square_shape1 square_shape3 tm-blog-single-wrap "> */}
              <div className="section-full  p-t20 p-b90 tm-blog-single-wrap ">
                <div className="container ">
                  <div className="max-mid-container ">
                    {/* TITLE START */}
                    <div className="section-head text-left text-black">
                      <h1 className="text-uppercase font-45 font-weight-500">
                        Our Terms & Conditions
                      </h1>
                      <div className="wt-separator-outer">
                        <div className="wt-separator bg-black" />
                      </div>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black m-tauto ">
                      <div className="row">
                        <div className="wt-post-text col-md-4 col-sm-12 col-xs-12 float-right ">
                          <h2 className="font-weight-550 text-uppercase font-22 m-t0 m-b5 p-t0">
                            Quick Links
                          </h2>
                          <ul className="p-l40 ">
                            <li className="m-a0">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#general"
                                aria-label="scroll down to terms of service - general"
                              >
                                General
                              </HashLink>
                            </li>
                            <li className="">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#services"
                                aria-label="scroll down to terms of service - services"
                              >
                                Services
                              </HashLink>
                            </li>

                            <li className="">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#blog"
                                aria-label="scroll down to terms of service - blog"
                              >
                                Blog
                              </HashLink>
                            </li>

                            <li className="">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#intellectual"
                                aria-label="scroll down to terms of service - Intellectual Property"
                              >
                                Intellectual Property
                              </HashLink>
                            </li>
                            <li className="">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#limitation"
                                aria-label="scroll down to terms of service - Limitation Of Liability"
                              >
                                Limitation Of Liability
                              </HashLink>
                            </li>
                            <li className="">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#indemnification"
                                aria-label="scroll down to terms of service - Indemnification"
                              >
                                Indemnification
                              </HashLink>
                            </li>
                            <li className="">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#changesToTerms"
                                aria-label="scroll down to terms of service - Changes To Terms"
                              >
                                Changes To Terms
                              </HashLink>
                            </li>
                            <li className="">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#governingLaw"
                                aria-label="scroll down to terms of service - Governing Law"
                              >
                                Governing Law
                              </HashLink>
                            </li>
                            <li className="">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#contact"
                                aria-label="scroll down to terms of service - Contact Us"
                              >
                                Contact Us
                              </HashLink>
                            </li>
                          </ul>
                        </div>
                        <div className="wt-post-text col-md-7 col-sm-12">
                          <p>
                            Welcome to our website, which is owned and operated
                            by Marilyn’s Windows (the "Company"). By using our
                            website, you agree to be bound by the following
                            terms and conditions (the "Terms"). If you do not
                            agree to these Terms, please do not use our website.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* TITLE START */}
                    <div id="general" className="text-left text-black">
                      <h2 className="text-uppercase font-20">General</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          Our website is intended for use by residents of
                          Canada. The information provided on our website is for
                          general informational purposes only and is not
                          intended as professional advice. The Company makes no
                          representations or warranties of any kind, express or
                          implied, about the completeness, accuracy,
                          reliability, suitability or availability with respect
                          to the website or the information, products, services,
                          or related graphics contained on the website for any
                          purpose. Any reliance you place on such information is
                          therefore strictly at your own risk.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>
                    {/* TITLE START */}
                    <div id="services" className="text-left text-black">
                      <h2 className="text-uppercase font-20">Services</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          Our website is used to market our custom window
                          treatment solutions and to provide industry
                          information and news to consumers. We do not sell any
                          products or services through our website. If you are
                          interested in our services, please contact us directly
                          for a consultation.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>

                    {/* TITLE START */}
                    <div id="blog" className="text-left text-black">
                      <h2 className="text-uppercase font-20">Blog</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          Our website includes a blog where we provide
                          information about the window treatment industry. The
                          views and opinions expressed in our blog are those of
                          the authors and do not necessarily reflect the views
                          of the Company. We do not endorse or guarantee the
                          accuracy of any information provided on our blog.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>

                    {/* TITLE START */}
                    <div id="intellectual" className="text-left text-black">
                      <h2 className="text-uppercase font-20">
                        Intellectual Property
                      </h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          All content on our website, including but not limited
                          to text, images, and logos, is the property of the
                          Company and is protected by Canadian and international
                          copyright laws. You may not use any content on our
                          website without the express written consent of the
                          Company.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>

                    {/* TITLE START */}
                    <div id="limitation" className="text-left text-black">
                      <h2 className="text-uppercase font-20">
                        Limitation of Liability
                      </h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          In no event shall the Company be liable for any
                          damages whatsoever, including but not limited to
                          direct, indirect, special, incidental, or
                          consequential damages, arising out of or in connection
                          with the use or inability to use our website.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>

                    {/* TITLE START */}
                    <div id="indemnification" className="text-left text-black">
                      <h2 className="text-uppercase font-20">
                        Indemnification
                      </h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          You agree to indemnify and hold the Company, its
                          affiliates, and their respective directors, officers,
                          employees, and agents harmless from any claim or
                          demand, including reasonable attorneys' fees, made by
                          any third party due to or arising out of your use of
                          our website
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>

                    {/* TITLE START */}
                    <div id="changesToTerms" className="text-left text-black">
                      <h2 className="text-uppercase font-20">
                        Changes to Terms
                      </h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          The Company reserves the right to make changes to
                          these Terms at any time. Your continued use of our
                          website following any changes to these Terms will be
                          deemed acceptance of those changes.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>

                    {/* TITLE START */}
                    <div id="governingLaw" className="text-left text-black">
                      <h2 className="text-uppercase font-20">Governing Law</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          These Terms and your use of our website shall be
                          governed by and construed in accordance with the laws
                          of Canada without giving effect to any principles of
                          conflicts of law.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>

                    {/* TITLE START */}
                    <div id="contact" className="text-left text-black">
                      <h2 className="text-uppercase font-20">Contact Us</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          If you have any questions about these Terms, or if you
                          would like to schedule a consultation for our custom
                          window treatment solutions, please contact us at
                          Marilyn’s Windows, 468 Valleyview Cr., Milton,
                          Ontario, Canada, L9T 3L2, marilyn@marilynswindows.com.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default TermsOfService;
