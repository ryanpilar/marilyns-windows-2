import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import createContentfulClient from "../../utils/createContentfulClient";

import SEO from "../Segments/SEO";
import Header3 from "../Common/Header3";
import Banner from "../Segments/Banner";
import Footer from "../Common/Footer";


const PrivacyPolicy = () => {

  const [banner, setBanner] = useState(null);

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

  // Contentful Connect and Data Fetch
  useEffect(() => {
    const client = createContentfulClient()

    const getContentfulContents = async () => {
      try {
        await client
          .getEntries({ content_type: "servicesFull" })
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
        title={`Privacy Policy`}
        description={`Our privacy policy outlines how we collect, use and protect your personal information. Learn more about how we keep your data safe and secure on our website.`}
        robots={'noindex, follow'}

      />

      <Header3 />

      <div className="page-content">
        {banner && (
          <Banner
            heading="Services"
            title="Privacy Policy"
            pagename=""
            bgimage={banner.image}
            posLeft={true}
            // posRight={true}
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
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            {/* BREADCRUMB ROW END */}
          </div>
        </div>

        {banner && (
          <>
            <div className="square_shape1 ">
              <div className="section-full  p-t0 p-b90 tm-blog-single-wrap ">
                <div className="container ">
                  <div className="max-mid-container ">
                    {/* TITLE START */}
                    <div className="section-head text-left text-black">
                      <div className="wt-separator-outer">
                        <div className="wt-separator bg-black" />
                      </div>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black m-tauto ">
                      <div className="row">
                        <div className="wt-post-text col-md-4 col-sm-12 col-xs-12 float-right ">
                          <h2 className="font-weight-500 text-uppercase font-18 m-t0 m-b5 p-t0">
                            Quick Links
                          </h2>
                          <ul className="p-l40 ">
                            <li className="m-a0">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#collect"
                                aria-label="scroll down to terms of service - Information We Collect"
                              >
                                Information We Collect
                              </HashLink>
                            </li>
                            <li className="">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#use"
                                aria-label="scroll down to terms of service - Use of Information"
                              >
                                Use of Information
                              </HashLink>
                            </li>

                            <li className="">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#sharing"
                                aria-label="scroll down to terms of service - Sharing of Information"
                              >
                                Sharing of Information
                              </HashLink>
                            </li>

                            <li className="">
                              <HashLink
                                smooth
                                className="link-style font-14 text-uppercase p-lr10"
                                to="#changes"
                                aria-label="scroll down to terms of service - Changes to this Privacy Policy"
                              >
                                Changes to this Policy
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
                        <div className="wt-post-text col-md-7 col-sm-12 col-xs-12">
                          <p>
                            At Marilyn’s Windows, we are committed to protecting
                            your privacy and ensuring that your personal
                            information is handled in a responsible and secure
                            manner. We understand that your personal information
                            is important to you and we take the protection of
                            your personal information very seriously.
                          </p>
                          <p>
                            This Privacy Policy applies to all personal
                            information collected by Marilyn’s Windows,
                            including information collected through our website,
                            marilynswindows.com, as well as information
                            collected offline, such as through phone or email
                            communications.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* TITLE START */}
                    <div id="collect" className="text-left text-black">
                      <h2 className="text-uppercase font-20">
                        Information We Collect
                      </h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          We collect personal information from you when you
                          visit our website, sign up for our newsletter, or
                          contact us for more information about our services.
                          This information may include your name, email address,
                          phone number, and location.
                        </p>
                        <p>
                          We may also collect information about your browsing
                          activities on our website, including the pages you
                          visit and the links you click. This information is
                          collected using cookies and other tracking
                          technologies.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>
                    {/* TITLE START */}
                    <div id="use" className="text-left text-black">
                      <h2 className="text-uppercase font-20">
                        Use of Information
                      </h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          We use the personal information we collect from you to
                          provide you with information about our services and to
                          keep you informed about industry news and updates. We
                          may also use your personal information to contact you
                          about special promotions or events.
                        </p>
                        <p>
                          We may also use the information we collect to improve
                          the design and content of our website and to
                          personalize your experience on our website.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>

                    {/* TITLE START */}
                    <div id="sharing" className="text-left text-black">
                      <h2 className="text-uppercase font-20">
                        Sharing of Information
                      </h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          We do not share your personal information with third
                          parties for their own marketing purposes. We may share
                          your personal information with third parties who
                          provide services on our behalf, such as website
                          hosting or email distribution. These third parties are
                          prohibited from using your personal information for
                          any other purpose. We may also be required to disclose
                          your personal information in response to a valid legal
                          request, such as a subpoena or court order.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>

                    {/* TITLE START */}
                    <div id="security" className="text-left text-black">
                      <h2 className="text-uppercase font-20">Security</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          We take reasonable precautions to protect your
                          personal information from loss, misuse, and
                          unauthorized access, disclosure, alteration, and
                          destruction.
                        </p>
                      </div>
                      <div className="row"></div>
                    </div>

                    {/* TITLE START */}
                    <div id="changes" className="text-left text-black">
                      <h2 className="text-uppercase font-20">
                        Changes to this Privacy Policy
                      </h2>
                    </div>
                    {/* TITLE END */}
                    <div className="blog-post date-style-1 blog-detail text-black">
                      <div className="wt-post-text col-md-7 col-sm-12">
                        <p>
                          We may update this Privacy Policy from time to time to
                          reflect changes to our information practices. We will
                          post a notice on our website to notify you of any
                          significant changes to our Privacy Policy.
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
                          window treatment solutions, please contact us at:
                          
                          <p className='p-t10 '>
                          Marilyn’s Windows
                            <a
                              className="link-style font-14 text-uppercase"
                              href="tel:905-878-0626"
                              aria-label="Call us at (905) 878 0626"
                            >
                              <p>(905) 878 0626</p>
                            </a>
                            
                            <a
                              className="link-style font-14 text-uppercase"
                              href="mailto:marilyn@marilynswindows.com"
                              aria-label="Email us at marilyn@marilynswindows.com"
                            >
                              <p>marilyn@marilynswindows.com</p>
                            </a>
                            <p>
                              468 Valleyview Cr., Milton, Ontario, Canada, L9T
                              3L2,
                            </p>
                          </p>
                        </p>
                      </div>
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

export default PrivacyPolicy;
