import EmblaCarousel from "../Common/EmblaCarousel";
import { homeTestimonials } from "../../content/homeContent";

const TestimonialsEmbla = () => (
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
          <EmblaCarousel
            ariaLabel="Customer testimonials"
            autoplay={{ delay: 10000 }}
            className="embla-testimonials"
            options={{ duration: 40, loop: true }}
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
          </EmblaCarousel>
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

export default TestimonialsEmbla;
