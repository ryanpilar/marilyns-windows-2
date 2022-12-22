import React from 'react';
import { useLayoutEffect } from 'react';

const servicesleft = [
    {
        counter: 0,
        title: 'Artisan Drapery',
        description: 'Trendy fabrics in an array of styles can elegantly complete a room or complement other window treatments',
    },
    {
        counter: 1,
        title: 'Natural Organic Drapes',
        description: 'Renewable material solutions, environmentally friendly',
    },
    {
        counter: 2,
        title: 'Valances and Cornices',
        description: 'Eye-catching accessories that can stand alone or complement your window treatments',
    }
]

const servicesright = [
    {
        counter: 3,
        title: 'Drapery',
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


const Services = ( {content} ) => {

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
                        {/* TITLE START */}
                        <div className="section-head text-left text-white">
                            <h2 className="text-uppercase font-36">Our Services</h2>
                            <div className="wt-separator-outer">
                                <div className="wt-separator bg-white" />
                            </div>
                        </div>
                        {/* TITLE END */}
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
                                <div className="col-sm-12 m-b30">
                                    <a href="/services" className="site-button outline white button-app m-r15 m-b15"><span>See More of Our Services</span><em /></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default Services;