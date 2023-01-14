import React from 'react';
import { useLayoutEffect } from 'react';

const servicesleft = [
    {
        counter: 0,
        title: 'Custom Drapery',
        description: 'Trendy fabrics in an array of styles can elegantly complete a room or complement other window treatments',
    },
    {
        counter: 1,
        title: 'Custom Blinds',
        description: 'Renewable material solutions, environmentally friendly',
    },
    {
        counter: 2,
        title: 'Window Seats & Throw Pillows',
        description: 'Eye-catching accessories that can stand alone or complement your window treatments',
    }
]

const servicesright = [
    {
        counter: 3,
        title: 'Window Seats& Throw Pillows',
        description: 'We can make any design unique and complementary to your style.',
    },
    {
        counter: 4,
        title: 'Blinds / Motorized',
        description: 'Custom window blinds are the perfect option for achieving privacy and lighting control.',
    },
    {
        counter: 5,
        title: 'Top Treatments',
        description: 'The right fabrics can instantly update and refresh your space, and allow you to transform everyday items into stunning statement pieces. ',
    }
]


const Services = ( {content, showButton} ) => {

    useLayoutEffect(() => {
        function loadScript(src) {
           
            return new Promise(function(resolve, reject){
              var script = document.createElement('script');
              script.src = src;
              script.addEventListener('load', function () {
                resolve();
              });
              script.addEventListener('error', function (e) {
                reject(e);
              });
              document.body.appendChild(script);
              document.body.removeChild(script);
            })
        };
   
        loadScript('./assets/js/custom.js');
        
      }, []);

        return (
            <>
                {/* <div className="section-full bg-black p-t90 p-b30 square_shape1 tm-service2-wrap"> */}
                <div 
                    id='services' 
                    className="section-full p-t90 p-b50 overlay-wraper bg-top-center bg-parallax tm-facts-wrap" 
                    data-stellar-background-ratio="0.5" 
                    style={{ backgroundImage: `url(${content.backgroundImage[0].secure_url})` }}

                >
                    <div className="overlay-main opacity-08 bg-black" />
                    <div className="container">

          <div class="section-content">
            {/* TITLE START */}
            <div className="section-head text-left">
              <div className="row">
                <div className="section-head text-white col-lg-4 col-md-12 m-t30">
                  <h2 className="text-uppercase font-34 ">Our Services</h2>
                  <div className="wt-separator-outer">
                    <div className="wt-separator bg-white" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <p className="p-r30 text-left text-white">
                    Everything we do is custom. All work is handmade, using premium exclusive fabrics, products and hardware.
                  </p>
                  <p className="p-r30 text-left text-white">
                    Our work boldly displays uncompromised quality, attention to detail and everything we do is backed by 
                    exceptional service.
                  </p>
                </div>
              </div>
            </div>
            {/* TITLE END */}
          </div>
                    

                        
                        <div className="section-content circle-block-outer" data-toggle="tab-hover">
                            <div className="row">

                                <div className="col-md-4 col-sm-12 m-b30">
                                    {servicesleft.map((item, index) => (
                                        <div className="wt-icon-box-wraper right p-a20 m-b50 text-white" data-target={`#tab${item.counter}`} data-toggle="tab" key={index}>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte text-uppercase">{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="col-md-4 col-sm-12 m-b30">
                                    <div className="circle-content-pic tab-content ">
                                        
                                        {content.cloudinaryImage.map((item, index) => (
                                            <div className={index === 0 ? `tab-pane active` : `tab-pane`} id={`tab${index}`} key={index}>
                                                <div className="wt-box">
                                                    <div className="wt-media text-primary m-b20 ">
                                                        <img 
                                                            src={item.secure_url} 
                                                            alt={item.context.custom.alt} 
                                                            data-pin-description={item.context.custom.dataPin}
                                                            caption={item.context.custom.caption} 
                                                            width='360'
                                                            height='560' 
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                
                                <div className="col-md-4 col-sm-12 m-b30">
                                    
                                    {servicesright.map((item, index) => (
                                        <div className="wt-icon-box-wraper left p-a20 m-b50 text-white" data-target={`#tab${item.counter}`} data-toggle="tab" key={index}>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte text-uppercase">{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                { showButton && (
                                    <div className="col-sm-12 m-b30">
                                    <a href="/services" className="site-button outline white button-app m-r15 m-b15"><span>See More of Our Services</span><em /></a>
                                </div>
                                )}
                                

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default Services;