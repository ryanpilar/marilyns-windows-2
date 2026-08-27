import { Link, useLocation } from "react-router-dom";

import Header3 from "../Common/Header3";
import Footer from "../Common/Footer";
import EmblaCarousel from "../Common/EmblaCarousel";
import SEO from "../Segments/SEO";

import heroImage from "../../images/maxx-zip/product/maxx-zip-veranda.webp";
import cornerPatioImage from "../../images/maxx-zip/product/maxx-zip-patio-corner.webp";
import poolPatioImage from "../../images/maxx-zip/product/maxx-zip-pool-patio.webp";
import eveningPatioImage from "../../images/maxx-zip/product/maxx-zip-covered-patio.webp";
import systemAngleImage from "../../images/maxx-zip/product/maxx-zip-system-angle.webp";
import systemFrontImage from "../../images/maxx-zip/product/maxx-zip-system-front.webp";

import extern1Black from "../../images/maxx-zip/swatches/externo-1-black-31-2801-31.webp";
import extern1Bronze from "../../images/maxx-zip/swatches/externo-1-bronze-31-2801-89.webp";
import extern1Grey from "../../images/maxx-zip/swatches/externo-1-grey-31-2801-94.webp";
import extern3Black from "../../images/maxx-zip/swatches/externo-3-black-31-2803-31.webp";
import extern3Bronze from "../../images/maxx-zip/swatches/externo-3-bronze-31-2803-89.webp";
import extern5Grey from "../../images/maxx-zip/swatches/externo-5-grey-31-2805-94.webp";
import extern10Grey from "../../images/maxx-zip/swatches/externo-10-grey-31-2810-94.webp";
import extern10Black from "../../images/maxx-zip/swatches/externo-10-black-31-2810-31.webp";

import "./MaxxZip.css";

const MAXXMAR_SPECS_URL =
  "https://maxxmar.com/wp-content/uploads/2026/01/Outdoor-Shade-Specs.pdf";

const popularFabrics = [
  {
    image: extern1Black,
    openness: "1% openness",
    colour: "Black",
    code: "31-2801-31",
  },
  {
    image: extern1Bronze,
    openness: "1% openness",
    colour: "Bronze",
    code: "31-2801-89",
  },
  {
    image: extern1Grey,
    openness: "1% openness",
    colour: "Grey",
    code: "31-2801-94",
  },
  {
    image: extern3Black,
    openness: "3% openness",
    colour: "Black",
    code: "31-2803-31",
  },
  {
    image: extern3Bronze,
    openness: "3% openness",
    colour: "Bronze",
    code: "31-2803-89",
  },
  {
    image: extern5Grey,
    openness: "5% openness",
    colour: "Grey",
    code: "31-2805-94",
  },
  {
    image: extern10Grey,
    openness: "10% openness",
    colour: "Grey",
    code: "31-2810-94",
  },
  {
    image: extern10Black,
    openness: "10% openness",
    colour: "Black",
    code: "31-2810-31",
  },
];

const benefits = [
  {
    number: "01",
    title: "Manage glare and UV exposure",
    copy:
      "Choose among several openness levels to reduce glare and UV exposure while balancing privacy and your view outdoors.",
  },
  {
    number: "02",
    title: "Add an insect barrier",
    copy:
      "When the shade is fully lowered and properly fitted, it helps reduce insects entering through open patio enclosures, doors and windows.",
  },
  {
    number: "03",
    title: "Fit the opening",
    copy:
      "Each system is sized for its opening and is available for inside mounting or outside surface mounting.",
  },
  {
    number: "04",
    title: "Choose the way it moves",
    copy:
      "Hand crank, hand-push cordless and motorized operating systems are available. The right option depends on shade size and how you use the space.",
  },
];

const opennessRows = [
  {
    value: "1%",
    light: "Densest listed screen",
    view: "Most restricted",
    use: "Strong sun control and greater daytime privacy",
  },
  {
    value: "3%",
    light: "Dense screen",
    view: "Limited",
    use: "A strong balance when glare control leads the decision",
  },
  {
    value: "5%",
    light: "Moderate screen",
    view: "More open",
    use: "Everyday shade with more connection to the view",
  },
  {
    value: "10%",
    light: "Open screen",
    view: "Clearer",
    use: "Covered spaces where view-through matters more",
  },
  {
    value: "15% to 45%",
    light: "Most open listed screens",
    view: "Highest",
    use: "Specialized applications with less sun blockage",
  },
];

const operatingDimensions = [
  {
    control: "Hand crank",
    minimum: '36" x 36"',
    maximum: '144" x 120"',
  },
  {
    control: "Hand push, cordless",
    minimum: '36" x 36"',
    maximum: '156" x 120"',
  },
  {
    control: "Motorized",
    minimum: '36" x 36"',
    maximum: '240" x 120"',
  },
];

const faqs = [
  {
    question: "What is the Maxx-Zip system?",
    answer:
      "It is Maxxmar's custom outdoor roller shade system. A headrail, side channels and bottom rail frame the screen for a clean exterior installation.",
  },
  {
    question: "Where can a Maxx-Zip shade be installed?",
    answer:
      "Maxxmar lists patios, decks, balconies, exterior windows, pergolas, gazebos and large patio openings as suitable applications. The opening and mounting surface still need to be assessed before an order is placed.",
  },
  {
    question: "Can it be installed inside or outside an opening?",
    answer:
      "Yes. Maxxmar's specification sheet allows inside mounting and outside or surface mounting. The available depth, structure and desired coverage determine which approach makes sense.",
  },
  {
    question: "Which operating systems are available?",
    answer:
      "The specification sheet lists hand crank, hand-push cordless and motorized operation. Maximum sizes vary by the selected control and fabric.",
  },
  {
    question: "How large can a Maxx-Zip shade be?",
    answer:
      "The published maximum is 240 inches wide by 120 inches high for a motorized shade. Hand crank and cordless configurations have smaller published maximums. Fabric choice and control selection can reduce the available size.",
  },
  {
    question: "What frame colours are available?",
    answer:
      "The current Maxxmar specification sheet lists black as the only profile and frame colour.",
  },
  {
    question: "What does fabric openness mean?",
    answer:
      "Openness is the approximate proportion of open space in a screen weave. A lower percentage generally gives stronger sun control and less view-through. A higher percentage preserves more of the outward view while blocking less sun.",
  },
  {
    question: "Will the shade keep every insect out?",
    answer:
      "No exterior shade should be described as an insect-proof enclosure. Maxxmar says a fully lowered, properly fitted shade helps reduce insect entry through outdoor openings.",
  },
  {
    question: "Is there one published wind rating for every Maxx-Zip shade?",
    answer:
      "Maxxmar describes the system and fabrics as suitable for wind, moisture and sun exposure, but the current product sheet does not publish one universal wind-speed rating. Final size, fabric and control choices must be confirmed for the opening.",
  },
  {
    question: "What happens when a shade is wider than 144 inches?",
    answer:
      "Maxxmar notes that products wider than 144 inches are joined at the centre of the aluminum. We will account for that centre condition when reviewing a large opening.",
  },
  {
    question: "Can screen fabric show waviness or a moire effect?",
    answer:
      "Yes. Maxxmar identifies angled-view distortion, some tube deflection on wide shades and a possible moire effect in front of another screen as normal screen-material characteristics rather than manufacturing defects.",
  },
  {
    question: "Should I choose a fabric colour from my screen?",
    answer:
      "Use online swatches to narrow the choice, then confirm it with a physical sample. Maxxmar notes that screens cannot reproduce exact dye lots and that displayed colours vary.",
  },
];

const MaxxZip = () => {
  const canonicalLocation = useLocation();

  return (
    <>
      <SEO
        title="Maxxmar Maxx-Zip Outdoor Roller Shades in Milton"
        description="Explore Maxxmar Maxx-Zip exterior roller shades, fabric openness, operating systems, sizing and custom installation with Marilyn's Windows in Milton."
        location={canonicalLocation.pathname}
        robots="index, follow"
        image={heroImage}
        imageAlt="Maxxmar exterior roller shades surrounding a covered pool patio"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Maxx-Zip exterior shades",
            path: "/maxx-zip-exterior-roller-shades",
          },
        ]}
      />

      <Header3 />

      <main className="page-content maxx-zip-page">
        <section className="maxx-zip-hero" aria-labelledby="maxx-zip-title">
          <img
            className="maxx-zip-hero__image"
            src={heroImage}
            alt="Covered outdoor lounge with black-framed Maxxmar roller shades beside a pool"
            width="2160"
            height="1440"
            loading="eager"
            fetchpriority="high"
          />
          <div className="maxx-zip-hero__shade" />
          <div className="container maxx-zip-hero__content">
            <p className="maxx-zip-eyebrow">Maxxmar Maxx-Zip</p>
            <h1 id="maxx-zip-title" className="hatton maxx-zip-hero__title--banner">
              Maxx-Zip exterior shades,
              <br />
              built for outdoor living.
            </h1>
            <p className="maxx-zip-hero__intro">
              Custom exterior roller shades for patios, pergolas, balconies
              and the spaces where summer happens.
            </p>
            <div className="maxx-zip-hero__actions">
              <a
                className="maxx-zip-hero__explore"
                href="#how-it-works"
              >
                How It Works
              </a>
              <a className="maxx-zip-hero__contact" href="#fabric-options">
                Screen Options
              </a>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="maxx-zip-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span>Maxx-Zip exterior shades</span>
          </div>
        </div>

        <section className="maxx-zip-section maxx-zip-introduction">
          <div className="container">
            <div className="row maxx-zip-editorial-row">
              <div className="col-md-5 col-sm-12 maxx-zip-copy maxx-zip-copy--intro">
                <p className="maxx-zip-kicker">A better edge to outdoor living</p>
                <h2>Shade that belongs to the architecture.</h2>
                <p>
                  A patio can be beautifully furnished and still sit empty when
                  the afternoon sun lands in the wrong place. Maxx-Zip gives
                  that opening a tailored layer of shade without making the
                  space feel closed in.
                </p>
                <p>
                  The screen sits within a black headrail, side channels and a
                  bottom rail. Every system is made for its opening, with
                  fabric density and operation chosen around the way the space
                  is actually used.
                </p>
              </div>
              <div className="col-md-7 col-sm-12">
                <figure className="maxx-zip-framed-image maxx-zip-framed-image--portrait-shift">
                  <img
                    src={poolPatioImage}
                    alt="Three Maxxmar exterior shades fitted around a bright covered patio"
                    width="1981"
                    height="1321"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
            </div>

            <dl className="maxx-zip-fact-strip">
              <div>
                <dt>Mounting</dt>
                <dd>Inside or outside surface mount</dd>
              </div>
              <div>
                <dt>Operation</dt>
                <dd>Crank, cordless or motorized</dd>
              </div>
              <div>
                <dt>Motorized maximum</dt>
                <dd>240 inches wide by 120 inches high</dd>
              </div>
              <div>
                <dt>Frame</dt>
                <dd>Black profile and frame</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="how-it-works" className="maxx-zip-section maxx-zip-system">
          <div className="container">
            <div className="maxx-zip-section-heading maxx-zip-section-heading--narrow">
              <p className="maxx-zip-kicker">How it works</p>
              <h2 className="hatton">A complete shade, not a loose screen.</h2>
              <p>
                The visible simplicity comes from coordinated parts. The
                headrail houses the shade, side channels define the edges and
                the bottom rail finishes the moving screen. That structure is
                what gives Maxx-Zip its crisp, architectural appearance.
              </p>
            </div>

            <div className="maxx-zip-system-grid">
              <figure className="maxx-zip-system-render maxx-zip-system-render--angle">
                <img
                  src={systemAngleImage}
                  alt="Angled product view of the Maxxmar Maxx-Zip headrail, screen, side channels and bottom rail"
                  width="1620"
                  height="1620"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="maxx-zip-system-copy">
                <ol className="maxx-zip-numbered-list">
                  <li>
                    <span>01</span>
                    <div>
                      <h3>Headrail</h3>
                      <p>Protects the rolled screen and keeps the top line quiet.</p>
                    </div>
                  </li>
                  <li>
                    <span>02</span>
                    <div>
                      <h3>Side channels</h3>
                      <p>Frame the moving screen on both sides of the opening.</p>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <div>
                      <h3>Screen fabric</h3>
                      <p>Controls how much sun, privacy and view pass through.</p>
                    </div>
                  </li>
                  <li>
                    <span>04</span>
                    <div>
                      <h3>Bottom rail</h3>
                      <p>Finishes the lower edge in cordless and motorized forms.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="maxx-zip-benefits">
          <div className="container">
            <div className="row maxx-zip-benefits__intro">
              <div className="col-md-4 col-sm-12">
                <p className="maxx-zip-kicker maxx-zip-kicker--light">Made for outside</p>
                <h2>What changes when the shade comes down.</h2>
              </div>
              <div className="col-md-7 col-md-offset-1 col-sm-12">
                <p>
                  Maxx-Zip is built with UV- and weather-resistant materials for
                  exterior exposure. It adds sun control and a more defined edge
                  to the space while keeping the design deliberately simple.
                </p>
              </div>
            </div>
            <div className="maxx-zip-benefit-grid">
              {benefits.map((benefit) => (
                <article className="maxx-zip-benefit" key={benefit.number}>
                  <span>{benefit.number}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fabrics" className="maxx-zip-section maxx-zip-fabrics">
          <div className="container">
            <div className="row maxx-zip-fabric-intro">
              <div className="col-md-4 col-sm-12">
                <p className="maxx-zip-kicker">Choosing your screen</p>
                <h2 className="hatton">Openness changes everything.</h2>
              </div>
              <div className="col-md-7 col-md-offset-1 col-sm-12">
                <p>
                  Openness is the approximate amount of open area in the weave.
                  Lower numbers give a denser screen. Higher numbers keep more
                  of the outward view.
                </p>
                <p>
                  Direction, exposure, privacy and the view all matter. We use
                  physical samples in the space because a screen changes as the
                  light moves behind it.
                </p>
              </div>
            </div>

            <div className="maxx-zip-table-wrap" role="region" aria-label="Fabric openness guide" tabIndex="0">
              <table className="maxx-zip-table">
                <thead>
                  <tr>
                    <th scope="col">Openness</th>
                    <th scope="col">Screen density</th>
                    <th scope="col">View-through</th>
                    <th scope="col">A useful starting point</th>
                  </tr>
                </thead>
                <tbody>
                  {opennessRows.map((row) => (
                    <tr key={row.value}>
                      <th scope="row">{row.value}</th>
                      <td>{row.light}</td>
                      <td>{row.view}</td>
                      <td>{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="maxx-zip-swatch-heading" id="fabric-options">
              <div>
                <p className="maxx-zip-kicker">Popular Externo-Screen options</p>
                <h3>Eight useful places to begin.</h3>
              </div>
            </div>

            <EmblaCarousel
              ariaLabel="Popular Maxxmar Externo-Screen fabric swatches"
              className="maxx-zip-swatch-carousel"
              slideClassName="maxx-zip-swatch-carousel__slide"
              options={{ align: "start", containScroll: "trimSnaps" }}
              showNavigation
            >
              {popularFabrics.map((fabric) => (
                <article className="maxx-zip-swatch" key={fabric.code}>
                  <div className="maxx-zip-swatch__image">
                    <img
                      src={fabric.image}
                      alt={`${fabric.colour} Externo-Screen fabric with ${fabric.openness}`}
                      width="482"
                      height="595"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="maxx-zip-swatch__label">
                    <p>{fabric.openness}</p>
                    <h4>{fabric.colour}</h4>
                    <span>{fabric.code}</span>
                  </div>
                </article>
              ))}
            </EmblaCarousel>
          </div>
        </section>

        <section id="specifications" className="maxx-zip-section maxx-zip-specifications">
          <div className="container">
            <div className="row maxx-zip-specification-row">
              <div className="col-md-5 col-sm-12 maxx-zip-copy">
                <p className="maxx-zip-kicker">Controls and sizing</p>
                <h2 className="hatton">Built around the opening.</h2>
                <p>
                  A Maxx-Zip order starts with the actual span, the mounting
                  surface and the way you want to operate the shade.
                </p>
                <p>
                  The published dimensions below are product limits, not a
                  promise that every fabric can be made at every size.
                </p>
                <a
                  className="maxx-zip-text-link"
                  href={MAXXMAR_SPECS_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Read Maxxmar's specification sheet
                </a>
              </div>
              <div className="col-md-7 col-sm-12">
                <figure className="maxx-zip-system-front">
                  <img
                    src={systemFrontImage}
                    alt="Front product view of a black-framed Maxxmar Maxx-Zip exterior roller shade"
                    width="1321"
                    height="1321"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
            </div>

            <div className="maxx-zip-table-wrap maxx-zip-size-table-wrap" role="region" aria-label="Maxx-Zip operating system dimensions" tabIndex="0">
              <table className="maxx-zip-table maxx-zip-size-table">
                <thead>
                  <tr>
                    <th scope="col">Operating system</th>
                    <th scope="col">Published minimum</th>
                    <th scope="col">Published maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {operatingDimensions.map((row) => (
                    <tr key={row.control}>
                      <th scope="row">{row.control}</th>
                      <td>{row.minimum}</td>
                      <td>{row.maximum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="maxx-zip-spec-notes">
              <p>
                <strong>Frame colour:</strong> black only.
              </p>
              <p>
                <strong>Very wide shades:</strong> products wider than 144
                inches are joined at the centre of the aluminum.
              </p>
              <p>
                <strong>Mounting:</strong> inside mount or outside surface mount.
              </p>
            </div>

          </div>

          <div className="maxx-zip-image-pause" role="group" aria-label="Maxx-Zip exterior shade installations">
            <figure>
              <img
                src={cornerPatioImage}
                alt="Exterior roller shade over a dining patio facing the water and mountains"
                width="1722"
                height="1260"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Keep the view. Take the edge off the sun.</figcaption>
            </figure>
            <figure>
              <img
                src={eveningPatioImage}
                alt="Maxxmar exterior shade lowered over a poolside dining area at dusk"
                width="1728"
                height="1153"
                loading="lazy"
                decoding="async"
              />
              <figcaption>A cleaner boundary for evenings outdoors.</figcaption>
            </figure>
          </div>
        </section>

        <section id="faq" className="maxx-zip-section maxx-zip-faq">
          <div className="container">
            <div className="row maxx-zip-faq__layout">
              <div className="col-md-4 col-sm-12 maxx-zip-faq__heading">
                <p className="maxx-zip-kicker">Practical questions</p>
                <h2 className="hatton">Before we measure.</h2>
                <Link className="maxx-zip-faq__call" to="/contact">
                  Contact Marilyn
                </Link>
              </div>
              <div className="col-md-7 col-md-offset-1 col-sm-12 maxx-zip-faq__items">
                {faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>
                      <span>{faq.question}</span>
                      <span className="maxx-zip-faq__symbol" aria-hidden="true" />
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default MaxxZip;
