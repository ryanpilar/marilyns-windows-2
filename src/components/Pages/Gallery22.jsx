import React from 'react'
import { useEffect, useState, useLayoutEffect } from 'react';
import {createClient} from 'contentful'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
// import Footer from '../Common/Footer';
import Banner from '../Segments/Banner';
import SEO from '../Segments/SEO';



// const bnrimg = require('./../../images/banner/sewing-machine-lamp-freepic.png');

const Gallery22 = () => {

    const [ imageList, setImageList ] = useState([])
    const [ bannerContent, setBannerContent ] = useState(null)
    const [ isOpen, setIsOpen ] = useState(false)
    const [ photoIndex, setPhotoIndex ] = useState(0)

    // const [ filters, setFilters ] = useState([
    //     { label: "House", filter: ".cat-1" },
    //     { label: "Building", filter: ".cat-2" },
    //     { label: "Office", filter: ".cat-3" },
    //     { label: "Bedroom", filter: ".cat-4" },
    //     { label: "Interior", filter: ".cat-5" }
    // ]);
    

    const client = createClient({                                   // contentful connect
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    })

    useEffect( () => {
        const getAllEntries = async() => {                          // contentful get data
            try {
                await client.getEntries({content_type: 'gallery'}).then( allEntries => {
                    // console.log('ALL ENTRIES', allEntries)
                    setImageList(allEntries.items)
                    // console.log('NEW STATE', imageList)
                })
            }
            catch (error) {
                console.log('this error arose from the client.getEntries() call to contentful')
            }
        }

        const getBannerContent = async() => {                          // contentful get data
            try {
                await client.getEntries({content_type: 'banner'}).then( allEntries => {
                    // console.log('BANNER CONTENT', allEntries.items[0].fields)
                    setBannerContent(allEntries.items[0].fields)
                    // console.log('NEW STATE', imageList)
                })
            }
            catch (error) {
                console.log('this error arose from the client.getEntries() call to contentful')
            }
        }
        getBannerContent()
        getAllEntries()
        

    }, [])

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
            <SEO 
                title={`Marilyn's Windows | Gallery | Beautiful Drapery Ideas`} 
                description={`Bedroom curtain ideas. Window coverings for patio doors. Living room drapery ideas. Light filtering curtains and blackout blinds. Outdoor curtain ideas.`} 
            />

            <Header2 />

            <div className="page-content ">

                { bannerContent && 
                    <Banner title={bannerContent.heading} pagename={bannerContent.pageName} bgimage={bannerContent.backgroundImage[0].secure_url} />
                }

                {/* SECTION CONTENT START */}
                {imageList && (
                    <div className="section-full p-tb90 tm-work-wrap">
                        <div className="container">

                            {/* PAGINATION START */}
                            {/* <div className="filter-wrap p-b50">
                                <ul className="masonry-filter link-style  text-uppercase">
                                    <li className="active" aria-hidden="true"><a data-filter="*" href="#" >All</a></li>
                                    
                                    {filters.map((item, index) => (
                                        <li key={index}><a data-filter={item.filter} href="#" aria-hidden="true">{item.label}</a></li>
                                    ))}

                                </ul>
                            </div> */}
                            {/* PAGINATION END */}

                        </div>
                        {/* GALLERY CONTENT START */}
                        
                        <div className="portfolio-wrap mfp-gallery work-grid clearfix">
                            <div className="container-fluid">
                                <div className="row">
                                        

                                            {imageList.map((item, index) => (
                                                <div key={index} className={`${item.fields.filter} masonry-item col-lg-3 col-md-6 col-sm-6 m-b30 `}>
                                                    <div className="wt-img-effect wt-img-black-bg" >
                                                    <div className='img-opacity'>
                                                        <img 
                                                        
                                                            src={item.fields.smallImage[0].secure_url} 
                                                            alt={item.fields.smallImage[0]?.context?.custom?.alt} 
                                                            caption={item.fields.smallImage[0]?.context?.custom?.caption} 
                                                            data-pin-description={item.fields.smallImage[0]?.context?.custom?.dataPin}
                                                            width='360'
                                                            height='560'
                                                            /></div>
                                                        <div className="overlay-bx-2 ">
                                                            <div className="line-amiation">
                                                                <div className="text-white font-weight-300 p-a40">
                                                                    <h2>{item.fields.cardTitle}</h2>
                                                                    <p>{item.fields.cardDescription}</p>
                                                                    <div
                                                                        className="v-button letter-spacing-4 font-18 text-uppercase p-l20 make-pointer"
                                                                        // type="button"
                                                                        // onClick={() => this.setState({ isOpen: true, photoIndex: Number(index) }) }
                                                                        aria-hidden="true"
                                                                        onClick={ () => {
                                                                            setIsOpen(true)
                                                                            setPhotoIndex(Number(index))
                                                                    }}
                                                                    >
                                                                        <p>
                                                                            <i className="fa fa-search" aria-hidden="true"></i> Enlarge
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                       
                                    {isOpen && (
                                        <Lightbox
                                            
                                            mainSrc={imageList[photoIndex].fields.smallImage[0].secure_url}           // there will always be only one image, hence [0]
                                            // nextSrc={projects[(photoIndex + 1) % projects.length].image.default}
                                            // prevSrc={projects[(photoIndex + projects.length - 1) % projects.length].image.default}

                                            // onCloseRequest={() => this.setState({ isOpen: false })}
                                            onCloseRequest={ () => setIsOpen(false) }

                                            // onMovePrevRequest={() => this.setState({
                                                // photoIndex: (photoIndex + projects.length - 1) % projects.length,
                                            // })}
                                            // onMoveNextRequest={() =>
                                                // this.setState({
                                                    // photoIndex: (photoIndex + 1) % projects.length,
                                            // })}
                                            discourageDownloads={true}
                                            clickOutsideToClose={true}
                                            
                                                                                    
                                        />
                                    )}

                                    
                                    
                                </div>
                            </div>
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                )}
                {/* SECTION CONTENT END  */}

                
            </div>

            {/* <>
            {bannerContent && <Footer />}
            </> */}
            
        </>
    )
}

export default Gallery22