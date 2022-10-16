import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const members = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        fullname: 'GUNDING & HANS LLP',
        position: 'Barristers & Solicitors',
        description: 'The difference in the quality is extreme. Finally, when you can have warranties and worry-free assistance years after you have ordered the product, it is remarkable and reaffirming as to why the investment is so worthwhile. Thank you Marilyn you are always there for us!',
    },
    {
        image: require('./../../images/testimonials/pic4.jpg'),
        fullname: 'Stephen Burke',
        position: 'Key Account Executive',
        description: 'It was a pleasure working with her. Though our install was 6 years ago, she continues to serve, long after the sale was made. I would not hesitate to work with her again, or recommend her to others, who are looking for the best quality window treatments.',
    },
    {
        image: require('./../../images/testimonials/marilyn-default.png'),
        fullname: 'Homeowner',
        position: 'Milton, Ontario',
        description: 'Fabulous Service! Marilyn has provided great service… with our original blinds and then with replacements 15 years later! I had an issue and she took care of it personally. I really appreciated her help.',
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        fullname: 'Clara Bella',
        position: 'Vaughn, Ontario',
        description: 'Marilyn’s service is extremely responsive, tailored and efficient. Everything was delivered and installed as anticipated with timing - if not a bit earlier even. Definitely recommend!',
    },
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        fullname: 'Ellen Hughes',
        position: 'Milton, Ontario',
        description: 'We were first introduced to Marilyn’s Windows & Interiors years ago and they have been our go-to even since. Marilyn & her team will not disappoint.',
    },
    {
        image: require('./../../images/testimonials/pic4.jpg'),
        fullname: 'Brenda',
        position: 'Acton, Ontario',
        description: 'Many Project Locations Over Many Years... Whether a small project of one room to the largest of a 7,000 Sq ft new build, always, above and beyond service, quality and professionalism, service like no other. Very Refreshing working with Marilyn.',
    },
    {
        image: require('./../../images/testimonials/marilyn-default.png'),
        fullname: 'Homeowner',
        position: 'Ogoko, Ontario',
        description: 'Drapes For The Main Room In The Cottage. Gorgeous drapes that were installed into a very difficult spot. I was extremely impressed with how well the drapes functioned and how beautiful they looked. Marilyn and her installer did an amazing job.',
    }
]

var bgimg = require('./../../images/background/ptn-1.png');

class Testimonials extends React.Component {

    render() {
        const options = {
            loop: true,
            autoplay: false,
            margin: 80,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        };
        return (
            <>
                <div className="section-full p-t140 bg-repeat tm-testimonial-wrap" style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head text-left">
                                <h2 className="text-uppercase font-36">Testimonials</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* TESTIMONIAL 4 START ON BACKGROUND */}
                            <div className="section-content">
                                <OwlCarousel className="owl-carousel testimonial-home" {...options}>
                                    {members.map((item, index) => (
                                        <div className="item" key={index}>
                                            <div className="testimonial-6">
                                                <div className="testimonial-pic-block">
                                                    <div className="testimonial-pic">
                                                        <img src={item.image.default} alt="" width={132} height={132} />
                                                    </div>
                                                </div>
                                                <div className="testimonial-text clearfix bg-white">
                                                    <div className="testimonial-detail clearfix">
                                                        <strong className="testimonial-name">{item.fullname}</strong>
                                                        <span className="testimonial-position p-t0">{item.position}</span>
                                                    </div>
                                                    <div className="testimonial-paragraph text-black p-t15">
                                                        <span className="fa fa-quote-left" />
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </OwlCarousel>

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
            </>
        );
    }
};

export default Testimonials;