import LazyOwlCarousel from "../Common/LazyOwlCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { homeTestimonials } from "../../content/homeContent";

const Testimonials = () => {
  const options = {
    smartSpeed: 600,
    loop: true,
    autoplay: true,
    margin: 80,
    nav: false,
    dots: false,
    navElement: 'button type="button"',
    navText: [
      '<span class="sr-only">Previous slide</span><i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<span class="sr-only">Next slide</span><i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    autoplayTimeout: 10000,
    responsive: {
      0: { items: 1 },
      991: { items: 2 },
    },
  };

  return (
    <div
      className="section-full p-t70 bg-repeat tm-testimonial-wrap"
      style={{ backgroundImage: `url(${homeTestimonials.backgroundImage})` }}
    >
      <div className="container">
        <div className="section-content">
          <div className="section-head text-left">
            <h2 className="text-uppercase font-34">Testimonials</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black" />
            </div>
          </div>

          <div className="section-content">
            <LazyOwlCarousel
              className="owl-carousel testimonial-home"
              {...options}
            >
              {homeTestimonials.items.map((testimonial) => (
                <div
                  className="item"
                  key={`${testimonial.fullName}-${testimonial.description}`}
                >
                  <div className="testimonial-6">
                    <div className="testimonial-text clearfix bg-white">
                      <div className="testimonial-detail clearfix">
                        <strong className="testimonial-name">
                          {testimonial.fullName}
                        </strong>
                        <span className="testimonial-position p-t0">
                          {testimonial.position}
                        </span>
                      </div>

                      <div
                        className="p-b10"
                        role="img"
                        aria-label="5 out of 5 stars"
                      >
                        {Array.from({ length: 5 }, (_, index) => (
                          <span
                            className="fa fa-star p-r5"
                            style={{ color: "#e7a403" }}
                            aria-hidden="true"
                            key={index}
                          />
                        ))}
                      </div>

                      <div className="testimonial-paragraph text-black p-t15">
                        <span className="fa fa-quote-left" aria-hidden="true" />
                        <p>{testimonial.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </LazyOwlCarousel>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
          <strong>clients</strong>
          <span className="text-black">Say</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
