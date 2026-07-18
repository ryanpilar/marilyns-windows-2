import { Link, useLocation } from "react-router-dom";

import Footer from "../Common/Footer";
import Header3 from "../Common/Header3";
import Banner from "../Segments/Banner";
import Contact from "../Segments/Contact";
import SEO from "../Segments/SEO";

const contactBannerImage =
  "/assets/media/images/banners/contact-sewing-banner-v2.jpg";

const ContactPage = () => {
  const canonicalLocation = useLocation();

  return (
    <>
      <SEO
        title="Contact Marilyn's Windows | Custom Window Treatments in Milton"
        description="Call or message Marilyn's Windows to discuss custom drapery, blinds, shades, shutters, soft furnishings, or an upcoming window treatment project."
        location={canonicalLocation.pathname}
        robots="index, follow"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        image={contactBannerImage}
      />

      <Header3 />

      <main className="page-content contact-page-layout">
        <Banner
          title="Contact Us"
          bgimage={contactBannerImage}
          posRight={true}
        />

        <section className="section-full p-t60 p-b10">
          <div className="container">
            <div className="max-mid-container">
              <nav aria-label="Breadcrumb" className="p-b30">
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Contact</li>
                </ul>
              </nav>

              <div className="contact-page-intro text-black">
                <p>
                  Have questions about custom drapery, blinds, shades,
                  shutters, soft furnishings, or an upcoming project? Tell us
                  a little about your space and what you are looking for, and
                  we will be happy to discuss your options and next steps.
                </p>
                <p>
                  Call us at <a href="tel:905-878-0626">(905) 878-0626</a> or
                  send us a message using the form below.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Contact
          heading="Send Us a Message"
          contentClassName="max-mid-container"
        />
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
