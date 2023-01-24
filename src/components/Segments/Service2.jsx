import ListGroup from "../Pages/ListGroup";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Service2 = ({ testimonial }) => {
  const selectServices = [
    {
      counter: 0,
      title: "Custom Drapery,\nWindow Coverings &\nWindow Treatments",
      description: `Set your property apart from the crowd with custom
        window coverings. Stitched with the finest quality
        materials and textiles, and installed by a team of
        experts.`,
    },
    {
      counter: 1,
      title: "Custom Drapery Hardware",
      description: ``,
    },
    {
      counter: 2,
      title: "Blinds &\nSmart Blinds",
      description: `We offer many different blind choices. Roller blinds,
        cellular shades, dual or zebra shades, panel track or
        wood and faux wood blinds. Light filtering and
        blackout blinds are our speciality. Ask us about smart
        blinds and home automation!`,
    },
    {
      counter: 3,
      title: "Sunset Shades,\nShadow Magic &\nSilouette Like Shades",
      description: `This particular blind goes by many different names! It
        is known as a 'silhouette', 'shadow magic sun shade'
        or a 'sunset sun shade'. We can help guide you through
        the different choices. Check out my blog for an in
        depth review.`,
    },
    {
      counter: 4,
      title: "Shutters",
      description: `Shutters are a classic window solution. We help you pick
        the right options ,sizes and colors and can also offer
        solutions for oddly shaped windows.`,
    },
    {
      counter: 5,
      title: "Window Seats,\nThrow Pillows &\nCustom Cushions",
      description: `Custom cushions, pillows and bedding to finish off your
        room. "see an example" or "see gallery"`,
    },
  ];

  return (
    <div className="section-full p-t20 p-b90 square_shape1 square_shape3 tm-blog-single-wrap">
      <div className="container">
        <div className="max-mid-container">
          {/* TITLE START */}
          <div className="section-head text-left text-black">
            <h1 className="text-uppercase font-45 font-weight-500">
              Overview of Services
            </h1>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black" />
            </div>
          </div>
          {/* TITLE END */}

          <div className="blog-post date-style-1 blog-detail text-black">
            <div className="wt-post-text col-md-8 col-sm-12">
              {/* <h5 className="text-gray-dark">Quick Links</h5>
            
            <ul className="p-l30">
              <a className="p-r10" href="#locations" aria-label="scroll down to locations served">Locations</a> | 
              <a className="p-lr10" href="#selectService" aria-label="scroll down to select services">Select Services</a> |
              <a className="p-lr10" href="#designProcess" aria-label="scroll down to design process">The Design Process</a> |
              <a className="p-lr10" href="#premiumSuppliers" aria-label="scroll down to premium suppliers served">Our Premium Suppliers</a> |
              <a className="p-lr10" href="#contact" aria-label="scroll down to contact us">Contact Us</a>
            </ul> */}

              {/* <p>
                For over 30 years, Marilyn’s Windows has been providing
                exquisitely handcrafted custom drapery to luxury homeowners,
                interior designers, home builders and commercial clients.
              </p> */}
              <p>
                Marilyn’s Windows is a high-end workroom that designs and
                manufactures all forms of custom window coverings.
              </p>
              <p>
                Whether you need shades, shutters, drapes, or blinds our work
                boldly exhibits uncompromised quality, attention to detail and
                everything we do is backed by warranties and the exceptional
                service that we are known for.
              </p>
              <p>
                We are experts at pairing your needs with the best custom window
                treatment solutions on the market.
              </p>
              <p>
                All work is handmade in our Canadian workroom, using only the
                best fabrics, products and hardware. We treat every window,
                accent pillow, and piece of decor in your home like it is a work
                of art. Each fold, crease, and thread is quality, and crafted to
                last.
              </p>
            </div>
            <div className="row"></div>
          </div>

          {/* LOCATIONS */}
          {/* TITLE START */}
          <div id="locations" className="section-head text-left text-black">
            <h2 className="text-uppercase font-34">Locations</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black" />
            </div>
          </div>
          {/* TITLE END */}

          <div className="blog-post date-style-1 blog-detail text-black">
            <div className="wt-post-text p-b30 col-md-8 col-sm-12">
              <p>
                Providing custom window treatment design solutions for
                residential and commercial spaces across the Halton Region:
              </p>

              <div className="col-md-6 col-sm-6">
                <ul className="list-simple p-l30 font-16 ">
                  <li>
                    <span className="">Milton</span>
                  </li>
                  <li>
                    <span className="">Burlington</span>
                  </li>
                  <li>
                    <span className="">Oakville</span>
                  </li>
                  <li>
                    <span className="">Mississauga</span>
                  </li>
                  <li>
                    <span className="">Georgetown</span>
                  </li>
                  <li>
                    <span className="">and surrounding areas</span>
                  </li>
                </ul>
                <HashLink
                  smooth
                  to="#contact"
                  className="btn-half site-button button-lg m-tb15 text-right"
                >
                  <span>Contact Us</span>
                  <em />
                </HashLink>
              </div>
              {/* LOCATIONS END */}
            </div>

            <div className="row"></div>
          </div>
        </div>

        <div className="max-mid-container">
          {/* TITLE START */}
          <div className="section-head text-left text-black">
            <h2 className="text-uppercase font-34">Services We Offer</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black" />
            </div>
          </div>
          {/* TITLE END */}

          <div className="blog-post date-style-1 blog-detail text-black p-b10">
            <div className="wt-post-text col-md-9 col-sm-12 ">
              {/* <p className="p-r30 text-left text-black">
                We are a market leader in the production of bespoke window
                coverings
              </p>
              <p className="p-r30 text-left text-black">
                All drapery is sewn in our workrooms, and everything we create
                is custom. All work is handmade, using premium exclusive
                fabrics, products and hardware.
              </p> */}
              <p className="p-r30 p-b20 text-left text-black ">
                Whether you are considering energy efficiency, light filtering,
                privacy, sound absorption, automation, blackout, or perfecting
                the design of an interior space, we have window solutions to
                match your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="">
            <div className="section-content m-b50">
              <div className="row ">
                <div className="row ">
                  <ServiceCard
                    title={selectServices[0].title}
                    description={selectServices[0].description}
                  >
                    <p>
                      Read our blog post,{" "}
                      <Link
                        to={"/blog/post/119dUC52nGbqcnakNBQScT"}
                        className="link-style font-14"
                      >
                        7 INDISPUTABLE REASONS TO LOVE CUSTOM WINDOW TREATMENTS
                      </Link>{" "}
                      and maybe you will learn something new about drapes!{" "}
                    </p>
                  </ServiceCard>
                  <ServiceCard
                    title={selectServices[1].title}
                    description={selectServices[1].description}
                  >
                    <p>
                      Truly stunning drapery requires high-quality hardware. We
                      help you choose the best drapery hardware for your window
                      coverings and provide{" "}
                      <HashLink
                        smooth
                        to="#clientsLogo"
                        className="text-uppercase link-style"
                      >
                        the best manufactures
                      </HashLink>{" "}
                      to pick from.
                      {/* <Link to={{path:'/services', hash:'#clientsLogo'}} className="text-uppercase link-style">the best manufactures</Link> to pick from. */}
                    </p>
                    <ul className="list-simple list-check">
                      <li className="m-l10">
                        <span className="m-l10">
                          can fit odd shapes & angles
                        </span>
                      </li>

                      <li className="m-l10">
                        <span className="m-l10">
                          many optons on paint & finish
                        </span>
                      </li>
                      <li className="m-l10">
                        <span className="m-l10">
                          motorization & smart app control
                        </span>
                      </li>
                    </ul>

                    {/* <a
                      href="#contact"
                      className="btn-half site-button button-md m-tb15 text-right"
                    >
                      <span>Contact Us</span>
                      <em />
                    </a> */}
                  </ServiceCard>
                </div>

                <div className="row">
                  <ServiceCard
                    title={selectServices[2].title}
                    description={selectServices[2].description}
                  >
                  <span className="text-uppercase font-weight-500 ">Learn with Marilyn:</span>
                    <ul className="list-simple list-check m-t10">                     <li className="m-l10">
                      <Link
                        to={"/blog/post/119dUC52nGbqcnakNBQScT"}
                        className="text-uppercase link-style font-14"
                      >
                        <span className="m-l10">
                          Roller Shades
                        </span>
                      </Link>
                        
                      </li>

                      <li className="m-l10">
                      <Link
                        to={"/blog/post/2ViE170NBybYQaLPyIhRcC"}
                        className="text-uppercase link-style font-14"
                      >
                        <span className="m-l10">
                          Dual Banded Shades
                        </span>
                      </Link>
                        
                      </li>
                      <li className="m-l10">
                      <Link
                        to={"/blog/post/119dUC52nGbqcnakNBQScT"}
                        className="text-uppercase link-style font-14"
                      >
                        <span className="m-l10">
                          Cinema Blackout Tips
                        </span>
                      </Link>
                        
                      </li>
                    </ul>
                  </ServiceCard>
                  <ServiceCard
                    title={selectServices[3].title}
                    description={selectServices[3].description}
                  />
                </div>

                <div className="row">
                  <ServiceCard
                    title={selectServices[4].title}
                    description={selectServices[4].description}
                  />
                  <ServiceCard
                    title={selectServices[5].title}
                    description={selectServices[5].description}
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

export default Service2;
