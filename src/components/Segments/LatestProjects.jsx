import React from 'react';
import { useLayoutEffect } from 'react';

// import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const filters = [
    { label: "Living Space", filter: ".living-col" },
    { label: "Bedroom", filter: ".bedroom-col" },
    { label: "Kitchen", filter: ".kitchen-col" },
    { label: "Outdoor", filter: ".interior-col" },


    // { label: "Building", filter: ".building-col" },
    // { label: "Interior", filter: ".interior-col" },
    // { label: "Restaurant", filter: ".restaurant-col" }
];

const LatestProjects = ( {content} ) => {


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

    const options = {
        loop:true,
        autoplay:true,
        margin:20,
        nav:true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            580:{
                items:2
            },						
            767:{
                items:2
            },
            991:{
                items:3
            },			
            1152:{
                items:4
            },
            1360:{
                items:4
            },
            1366:{
                items:5
            }	
        }    
    }

        return (
            <>
                <div id='work' className="section-full p-t90 p-lr80 latest_project-outer square_shape3">
                        {/* TITLE START */}
                        <div className="section-head text-left">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 ">
                                
                                    <h2 className="text-uppercase font-36">Latest Projects</h2>
                                    
                                    <div className="wt-separator-outer">
                                        <div className="wt-separator bg-black" />
                                    </div>

                                </div>

                                <div className="col-lg-8 col-md-12">
                                    <p> 
                                        Drapery window treatments are a major component of a room’s aesthetic. 
                                        The right curtains or sheers help bring a space together into a cohesive design, and can inject color, 
                                        pattern, texture or simple elegance into the room.
                                    </p>
                                </div>

                            </div>

                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            {/* <OwlCarousel className="owl-carousel  owl-btn-bottom-left" {...options}> */}
                            
                            <OwlCarousel className="owl-carousel owl-carousel-filter  owl-btn-bottom-left" {...options}>

                                {content.map((item, index) => (
                                    <div key={index} className={`${item.fields.filter} item fadingcol`}>
                                        <div className="wt-img-effect ">
                                            <img 
                                                src={item.fields.smallImage[0].secure_url} 
                                                alt={item.fields.smallImage[0].context.custom.alt}
                                                caption={item.fields.smallImage[0].context.custom.caption}
                                                data-pin-description={item.fields.smallImage[0].context.custom.dataPin}
                                                width='360'
                                                height='560'  
                                            />
                                            <div className="overlay-bx-2 ">
                                                <div className="line-amiation">
                                                    <div className="text-white  font-weight-300 p-a40">
                                                        <h2 className="text-white font-20 letter-spacing-1 text-uppercase">{item.fields.cardTitle}</h2>
                                                        <p>{item.fields.cardDescription}</p>
                                                        {/* <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-l20">Read More</NavLink> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                            </OwlCarousel>

                        </div>

                        {/* <div className="section-content "> */}

                            <div className="section-content m-t20 ">
                                <a href='/gallery' className="site-button black button-app m-r15 m-b15 "><span className="text-center">Visit My Gallery</span></a>
                            </div>
                             
                        {/* </div> */}

                        <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
                            <strong>Awesome</strong>
                            <span className="text-black">Designs</span>
                        </div>
                    </div>
            </>
        );
    }

export default LatestProjects;