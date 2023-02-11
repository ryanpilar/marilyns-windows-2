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
      description: `Window blinds provide a practical solution for controlling light and privacy in your home. They also add a stylish and modern touch to any room, and can improve energy efficiency by keeping out unwanted heat or cold. Plus, with the wide range of colors and materials, you can find the perfect match to complement your decor.`,
    },
    {
      counter: 3,
      title: "Sunset Shades,\nShadow Magic &\nSilouette Like Shades",
      description: `This particular blind goes by many different names!`,
    },
    {
      counter: 4,
      title: "Shutters",
      description: `Shutters are a classic custom window solution and can be made from a variety of
      materials such as wood, vinyl, or composite materials.`,
    },
    {
      counter: 5,
      title: "Window Seats,\nThrow Pillows &\nCustom Cushions",
      description: `Throw pillows and cushions add visual interest, comfort, and functionality 
        to a room, and can be used to introduce texture, color, 
        and patterns to the space. `,
    },
  ];

  return (
    <div className="">
      {/* <div className="section-full  p-t20 p-b90 square_shape1 square_shape3 tm-blog-single-wrap "> */}
      <div className="section-full  p-t20 p-b90 tm-blog-single-wrap ">
        <div className="container ">
        
          <div className="max-mid-container ">
            {/* TITLE START */}
            <div className="section-head text-left text-black">
              <h2 className="text-uppercase font-34">
                Overview
              </h2>
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
                        to="#locations"
                        aria-label="scroll down to locations served"
                      >
                        Location
                      </HashLink>
                    </li>
                    <li className="">
                      <HashLink
                        smooth
                        className="link-style font-14 text-uppercase p-lr10"
                        to="#selectServices"
                        aria-label="scroll down to select services"
                      >
                        Select Services
                      </HashLink>
                    </li>

                    <li className="">
                      <HashLink
                        smooth
                        className="link-style font-14 text-uppercase p-lr10"
                        to="#designProcess"
                        aria-label="scroll down to design process"
                      >
                        The Design Process
                      </HashLink>
                    </li>


                    <li className="">
                      <HashLink
                        smooth
                        className="link-style font-14 text-uppercase p-lr10"
                        to="#clientsLogo"
                        aria-label="scroll down to premium suppliers served"
                      >
                        Our Premium Suppliers
                      </HashLink>
                    </li>
                    <li className="">
                      <HashLink
                        smooth
                        className="link-style font-14 text-uppercase p-lr10"
                        to="#contact"
                        aria-label="scroll down to contact us"
                      >
                        Contact Us
                      </HashLink>
                      
                    </li>

                  </ul>
                </div>
                <div className="wt-post-text col-md-8 col-sm-12 col-xs-12">
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
                    Whether you need shades, shutters, drapes, or blinds our
                    work boldly exhibits uncompromised quality, attention to
                    detail and everything we do is backed by warranties and the
                    exceptional service that we are known for.
                  </p>


                  <p>
                    We are experts at pairing your needs with the best custom
                    window treatment solutions on the market.
                  </p>
                  <p>
                    All work is handmade in our Canadian workroom, using only
                    the best fabrics, products and top-of-the-line hardware. We treat every
                    window, accent pillow, and piece of decor in your home like
                    it is a work of art. Each fold, crease, and thread is
                    quality, and crafted to last.
                  </p>
                </div>
              </div>
            </div>
            {/* LOCATIONS */}
            {/* TITLE START */}
            <div id="locations" className="section-head text-left text-black">
              <h2 className="text-uppercase font-34">Location</h2>
              <div className="wt-separator-outer">
                <div className="wt-separator bg-black" />
              </div>
            </div>
            {/* TITLE END */}
            <div className="blog-post date-style-1 blog-detail text-black">
              <div className="wt-post-text p-b30 col-md-8 col-sm-12 p-l0">
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

          <div className="max-mid-container " id="selectServices">
            {/* TITLE START */}
            <div className="section-head text-left text-black">
              <h2 className="text-uppercase font-34">Services We Offer</h2>
              <div className="wt-separator-outer">
                <div className="wt-separator bg-black" />
              </div>
            </div>
            {/* TITLE END */}
            <div className="blog-post date-style-1 blog-detail text-black p-b10">
              <div className="wt-post-text col-md-9 col-sm-12 p-l0">
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
                  Whether you are considering energy efficiency, light
                  filtering, privacy, sound absorption, automation, blackout, or
                  perfecting the design of an interior space, we have window
                  solutions to match your needs. 
                </p>
              </div>
            </div>
          </div>
          <div className="container" id="customDrapery">
            <div className="">
              <div className="section-content m-b50">
                <div className="row ">
                  <div className="row">
                    <div id="customDraperey">
                      <ServiceCard
                        title={selectServices[0].title}
                        description={selectServices[0].description}
                      >
                      <span className="text-uppercase font-weight-500 ">
                          Learn with Marilyn:
                        </span>

                        <ul className="list-simple list-check m-t20">
                          {" "}
                          <li className="m-l10">
                          <Link
                            to={"/blog/post/119dUC52nGbqcnakNBQScT"}
                            className="link-style font-14"
                          >
                            <div className="m-l10">
                              8 INDISPUTABLE REASONS TO LOVE CUSTOM WINDOW
                              TREATMENTS
                            </div>
                          </Link>
                          </li>
                        </ul>
                        
                      </ServiceCard>
                    </div>

                    <div id="draperyHardware">
                      <ServiceCard
                        title={selectServices[1].title}
                        description={selectServices[1].description}
                      >
                        <p>
                          Truly stunning drapery requires high-quality hardware.
                          We help you choose the best drapery hardware for your
                          window coverings and provide{" "}
                          <HashLink
                            smooth
                            to="#clientsLogo"
                            className="text-uppercase link-style"
                          >
                            the best manufactures
                          </HashLink>{" "}
                          to pick from. Also, our hardware...
                        </p>
                        <ul className="list-simple list-check m-b0">
                          <li className="m-l10">
                            <span className="m-l10">
                              can fit unique shapes & angles
                            </span>
                          </li>
                          <li className="m-l10">
                            <span className="m-l10">
                              has many paint & finish options
                            </span>
                          </li>
                          <li className="m-l10">
                            <span className="m-l10">
                              can be motorized & automated
                            </span>
                          </li>
                        </ul>
                      </ServiceCard>
                    </div>
                  </div>

                  <div className="row">
                    <div id="blinds">
                      <ServiceCard
                        title={selectServices[2].title}
                        description={selectServices[2].description}
                      >
                        <p>
                          Roller blinds, cellular shades, dual or zebra shades,
                          panel track or wood. Light filtering and blackout,
                          mechanical, automated and smart! And the list goes
                          on...
                        </p>
                        <span className="text-uppercase font-weight-500 ">
                          Learn with Marilyn:
                        </span>
                        <ul className="list-simple list-check m-t10">
                          {" "}
                          <li className="m-l10">
                            <Link
                              to={"/blog/post/75S5fnhHMxAVZXZpA8rG4o"}
                              className="text-uppercase link-style font-14"
                            >
                              <div className="m-l10">Roller Shades</div>
                            </Link>
                          </li>
                          <li className="m-l10">
                            <Link
                              to={"/blog/post/2ViE170NBybYQaLPyIhRcC"}
                              className="text-uppercase link-style font-14"
                            >
                              <div className="m-l10">Dual Banded Shades</div>
                            </Link>
                          </li>
                          <li className="m-l10">
                            <Link
                              to={"/blog/post/Zx8h0ifTUID1BPPklbsiJ"}
                              className="text-uppercase link-style font-14"
                            >
                              <div className="m-l10">Cinema Blackout Tips</div>
                            </Link>
                          </li>
                        </ul>
                      </ServiceCard>
                    </div>
                    <div id="silouette">
                      <ServiceCard
                        title={selectServices[3].title}
                        description={selectServices[3].description}
                      >
                        <p>
                          It is known as a 'Silhouette', 'Shadow Magic Sun
                          Shade' or a 'Sunset Sun Shade'. These shades not only
                          provide an extra layer of privacy, but they also offer
                          a visually stunning way to bring the beauty of the
                          sunset into your home.
                        </p>

                        <p>
                          With a wide range of colors and styles to choose from,
                          you can create a personalized and cohesive look that
                          perfectly complements your home's aesthetic.
                        </p>
                        <span className="text-uppercase font-weight-500 ">
                          Learn with Marilyn:
                        </span>

                        <ul className="list-simple list-check m-t20">
                          {" "}
                          <li className="m-l10">
                            <Link
                              to={""}
                              className="text-uppercase link-style font-14"
                            >
                              <div className="m-l10">
                                Everything you need to know about Sunset &
                                Silhouette Like Shades - no click yet
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </ServiceCard>
                    </div>
                  </div>
                  <div className="row">
                    <div id="shutters">
                      <ServiceCard
                        title={selectServices[4].title}
                        description={selectServices[4].description}
                      >
                        <p>
                          They are available in a wide range of styles, colors,
                          and finishes, allowing you to choose the perfect
                          option to complement the design of your home or
                          commercial space.
                        </p>

                        <p>
                          Shutters are the ultimate tool for managing natural
                          light. Not only do they add a touch of architectural
                          flair to your home, but they also increase its value.
                          And with cord-free design, they're a safe choice for
                          households with kids and pets.
                        </p>
                        <span className="text-uppercase font-weight-500 ">
                          Learn with Marilyn:
                        </span>
                        <ul className="list-simple list-check m-t10">
                          {" "}
                          <li className="m-l10">
                            <Link
                              to={"/blog/post/314gqvz8CGTSTqpyWdwEek"}
                              className="text-uppercase link-style font-14"
                            >
                              <div className="m-l10">
                              A Comprehensive Guide to Choosing Custom-Fit Shutters
                              </div>
                            </Link>
                          </li>
                          
                        </ul>
                      </ServiceCard>
                    </div>
                    <div id="throwPillows">
                      <ServiceCard
                        title={selectServices[5].title}
                        description={selectServices[5].description}
                      >
                        <span className="text-uppercase font-weight-500 ">
                          Learn with Marilyn:
                        </span>
                        <ul className="list-simple list-check m-t10">
                          {" "}
                          <li className="m-l10">
                            <Link
                              to={""}
                              className="text-uppercase link-style font-14"
                            >
                              <div className="m-l10">
                                Making Custom Throw Pillows For A Michelan Star
                                Chef - no click yet
                              </div>
                            </Link>
                          </li>
                          <li className="m-l10">
                            <Link
                              to={""}
                              className="text-uppercase link-style font-14"
                            >
                              <div className="m-l10">
                                Lakefront Abodes, Pillows and Food, Such a Cozy
                                Mood - no click yet
                              </div>
                            </Link>
                          </li>
                          <li className="m-l10">
                            <Link
                              to={""}
                              className="text-uppercase link-style font-14"
                            >
                              <div className="m-l10">
                                how an industry expert designs the perfect
                                window seat space - - no click yet
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </ServiceCard>
                    </div>
                  </div>
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
