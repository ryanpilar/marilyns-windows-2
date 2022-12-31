import React from "react";

const Service2 = ({ testimonial }) => {
  return (
    <div className="section-full p-t20 p-b90 square_shape1 square_shape3 tm-blog-single-wrap">
      <div className="container">
        <div className="max-mid-container">

          {/* TITLE START */}
          <div className="section-head text-left text-black">
            <h2 className="text-uppercase font-40">
              We Make Custom Window Coverings for Halton and surrounding areas
            </h2>
          </div>
          {/* TITLE END */}
          
          <div className="blog-post date-style-1 blog-detail text-black">

            <div className="wt-post-text">
              <p>
                For over 30 years, Marilyn’s Windows has been providing
                exquisitely handcrafted custom curtains to luxury homeowners,
                interior designers, home builders and commercial clients.
              </p>
              <p>
                Her gifted team of professionals design and sew custom curtains,
                drapes, roman blinds, shades, blackout curtains, home bedding
                and accents using only the finest materials. She treats every
                window, bedding, and accent in your home like a work of art.
                Each fold, crease, and thread is quality, and crafted to last.
              </p>

              <blockquote>
                <div className="row">
                  <div className="col-md-4 col-sm-6 tm-qt-img">
                    {/* <img src={testimonial.image} alt=""/> */}
                    <img
                      src={testimonial.image.secure_url}
                      // alt={item.context.custom.alt}
                      // data-pin-description={item.context.custom.dataPin}
                      // caption={item.context.custom.caption}

                      alt={testimonial.image.context.custom.alt}
                      caption={testimonial.image.context.custom.caption}
                      data-pin-description={
                        testimonial.image.context.custom.dataPin
                      }
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="col-md-8 col-sm-6">
                    "It is one thing to buy shades but it is another to purchase
                    beautiful quality custom shades through a supplier like
                    Marilyn. The difference in the quality is extreme. Finally,
                    when you can have warranties and worry-free assistance years
                    after you have ordered the product, it is remarkable and
                    reaffirming as to why the investment is so worthwhile."
                    <div className="p-t15">
                      <p> – GUNDING & HANS LLP</p>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
            <div className="row"></div>
          </div>
        </div>

        <div className="max-mid-container">
          {/* TITLE START */}
          <div className="section-head text-left text-black">
            <h2 className="text-uppercase font-36">Our Services</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black" />
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content m-b50">
            <div className="row">
              <div className="col-md-6 col-sm-6 m-b30">
                <div className="wt-icon-box-wraper bx-style-1 p-a20 left bg-white">
                  <div className="wt-icon-box-xs bg-primary">
                    <span className="icon-cell text-white">
                      <i className="fa fa-github" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">
                      Drapes
                    </h5>
                    <p>
                      Handmade custom window coverings of all designs and
                      styles. Our couture window coverings are modern In Vogue
                      and on-trend.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 m-b30">
                <div className="wt-icon-box-wraper bx-style-1 p-a20 right bg-white">
                  <div className="wt-icon-box-xs bg-primary">
                    <span className="icon-cell text-white">
                      <i className="fa fa-github-alt" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">
                      Valances
                    </h5>
                    <p>
                      Enhance the design of your home or office with box pleat
                      valances, Windsor swags, bishop sleeve panels, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 m-b30">
                <div className="wt-icon-box-wraper bx-style-1 p-a20 left bg-white">
                  <div className="wt-icon-box-xs radius bg-primary">
                    <span className="icon-cell text-white">
                      <i className="fa fa-github" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">
                      Blinds & Shutters
                    </h5>
                    <p>
                      We sell High-end options for every application you desire.
                      Our exclusive suppliers:{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 m-b30">
                <div className="wt-icon-box-wraper bx-style-1 p-a20 right bg-white">
                  <div className="wt-icon-box-xs radius bg-primary">
                    <span className="icon-cell text-white">
                      <i className="fa fa-github-alt" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">
                      Throw Pillows & Bedding
                    </h5>
                    <p>
                      Duvets, Custom Comforters, Quilted Comforters, Bed
                      Spreads, Bed Skirts (Box Pleats or Ruffled), Decorator
                      Pillows, Pillow Shams, Bedcoverings matched to Trims and
                      Curtains
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 m-b30">
                <div className="wt-icon-box-wraper bx-style-1 p-a20 left bg-white">
                  <div className="wt-icon-box-xs radius bg-primary">
                    <span className="icon-cell text-white">
                      <i className="fa fa-github" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">
                      Blackout Curtains
                    </h5>
                    <p>
                      See what blackout drapes can do to the quality of your
                      sleep. Bring peace and quiet to your room with
                      sound-absorbing fabrics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 m-b30">
                <div className="wt-icon-box-wraper bx-style-1 p-a20 right bg-white">
                  <div className="wt-icon-box-xs radius bg-primary">
                    <span className="icon-cell text-white">
                      <i className="fa fa-github-alt" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase  letter-spacing-2 font-weight-800">
                      Smart Curtain and Blinds
                    </h5>
                    <p>
                      Control your blinds, shades, draperies and more with a
                      simple touch of your phone, voice command, or on a pre-set
                      schedule
                    </p>
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
