import { useEffect, useState} from "react";
import { createClient } from "contentful";
import { Link, useLocation } from "react-router-dom";

import SEO from "../Segments/SEO";
import Header3 from "../Common/Header3";
import Banner from "./../Segments/Banner";
import Service from "./../Segments/Service";
import Service2 from "../Segments/Service2";
import ClientsLogo from "../Segments/ClientsLogo";
import FAQ from "../Segments/FAQ";
import Contact from "../Segments/Contact";
import Footer from "../Common/Footer";

const Services = () => {

  const [banner, setBanner] = useState(null);
  const [designProcess, setDesignProcess] = useState(null);
  const [affiliates, setAffiliates] = useState(null);

  const cononicalLocation = useLocation();

  // Contentful Connect and Data Fetch
  useEffect(() => {
    

    const getContentfulContents = async () => {

      const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
      });
      
      try {
        await client
          .getEntries({ content_type: "servicesFull" })
          .then((allEntries) => {
            const servicesContent = allEntries.items;
            setBanner({
              image: servicesContent[0].fields.topBanner[0].secure_url,
            });
            setDesignProcess({
              consultation: {
                image: servicesContent[0].fields.consultationImage[0],
              },
              ideas: {
                image: servicesContent[0].fields.draperyIdeaImage[0],
              },
              install: {
                image: servicesContent[0].fields.installImage[0],
              },
              warranty: {
                image: servicesContent[0].fields.warrantyImage[0],
              },
            });
          });

        await client
          .getEntries({ content_type: "affiliates" })
          .then((allEntries) => {
            const affiliatesContent = allEntries.items;

            setAffiliates(affiliatesContent);
          });
      } catch (error) {
        console.log(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };
    getContentfulContents();
  }, []);

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

  return (
    <>
      <SEO
        title={`Marilyn's Windows | Services | Sewing & Installing The Best Custom Window Treatments for the Halton Region`}
        description={`Specializing in custom drapery, high-end blinds and custom soft furnishings. Marilyn's work defines the art of couture drapery and window treatment design.`}
        location={ cononicalLocation.pathname }

      />

      <Header3 />

      <div className="page-content">
        {affiliates && banner && designProcess && (
          <>
            <Banner
              heading="Services"
              title="Our Services Offered"
              pagename="Services"
              bgimage={banner.image}
              posLeft={true}
              // posRight={true}
            />

            <div className="container">
              <div className="max-mid-container">
                {/* BREADCRUMB ROW */}
                <div className="p-t20">
                  <div>
                    <ul className="wt-breadcrumb breadcrumb-style-2">
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>Services</li>
                    </ul>
                  </div>
                </div>
                {/* BREADCRUMB ROW END */}
              </div>
            </div>

            <Service2 />

            <Service process={designProcess} />

            <ClientsLogo content={affiliates} supplierList={true} />


            <FAQ />

            <Contact />
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Services;
