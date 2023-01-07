import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = ({ content, bgimg }) => {

    const options = {
        smartSpeed: 600,
        loop: true,
        autoplay: true,
        margin: 80,
        nav: false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplayTimeout: 10000,
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
            <div className="section-full p-t140 bg-repeat tm-testimonial-wrap" style={{ backgroundImage: `url(${bgimg[0].fields.cloudinaryImage[0].secure_url})` }}>
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
                                {content.map( (item, index) => (
                                    <div className="item" key={index}>
                                        <div className="testimonial-6">
                                            {/* commented out the image in testamonial: */}
                                            {/* <div className="testimonial-pic-block">
                                                
                                                <div className="testimonial-pic">
                                                    <img src={item.image.default} alt="" width={132} height={132} />
                                                </div>
                                            </div> */}

                                            <div className="testimonial-text clearfix bg-white">
                                                <div className="testimonial-detail clearfix">
                                                    <strong className="testimonial-name">{item.fields.fullName}</strong>
                                                    <span className="testimonial-position p-t0">{item.fields.position}</span>
                                                    


                                                </div>
                                                <div className="p-b10">
                                                    <span className="fa fa-star p-r5" style={{color:'#e7a403'}} />
                                                    <span className="fa fa-star p-r5" style={{color:'#e7a403'}} />
                                                    <span className="fa fa-star p-r5" style={{color:'#e7a403'}} />
                                                    <span className="fa fa-star p-r5" style={{color:'#e7a403'}} />
                                                    <span className="fa fa-star p-r5" style={{color:'#e7a403'}} />
                                                </div>
                                                <div className="testimonial-paragraph text-black p-t15">
                                                    <span className="fa fa-quote-left" />
                                                    <p>{item.fields.description}</p>
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


export default Testimonials;