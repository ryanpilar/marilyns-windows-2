import React from 'react'
import { useEffect, useState, useLayoutEffect } from 'react';
import {createClient} from 'contentful'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from '../Segments/Banner';

const filters = [
    { label: "House", filter: ".cat-1" },
    { label: "Building", filter: ".cat-2" },
    { label: "Office", filter: ".cat-3" },
    { label: "Bedroom", filter: ".cat-4" },
    { label: "Interior", filter: ".cat-5" }
];

const bnrimg = require('./../../images/banner/sewing-machine-lamp-freepic.png');

const Gallery22 = () => {

    const [ imageList, setImageList ] = useState([])
    const [ isOpen, setIsOpen ] = useState(false)
    const [ photoIndex, setPhotoIndex ] = useState(0)


    const client = createClient({                                   // contentful connect
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    })

    useEffect( () => {
        const getAllEntries = async() => {                          // contentful get data
            try {
                await client.getEntries({content_type: 'myContentType'}).then( allEntries => {
                    // console.log('ALL ENTRIES', allEntries)
                    setImageList(allEntries.items)
                    // console.log('NEW STATE', imageList)
                })
            }
            catch (error) {
                console.log('this error arose from the client.getEntries() call to contentful')
            }
        }

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
            <Header2 />

            <div className="page-content ">

                <Banner title="Sustainability, Innovation, and Craftmanship" pagename="Work grid" bgimage={bnrimg.default} />

                {/* SECTION CONTENT START */}
                <div className="section-full p-tb90 tm-work-wrap">
                    <div className="container">

                        {/* PAGINATION START */}
                        <div className="filter-wrap p-b50">
                            <ul className="masonry-filter link-style  text-uppercase">
                                <li className="active"><a data-filter="*" href="#">All</a></li>
                                
                                {filters.map((item, index) => (
                                    <li key={index}><a data-filter={item.filter} href="#">{item.label}</a></li>
                                ))}

                            </ul>
                        </div>
                        {/* PAGINATION END */}

                    </div>
                    {/* GALLERY CONTENT START */}

                    <div className="portfolio-wrap mfp-gallery work-grid clearfix">
                        <div className="container-fluid">
                            <div className="row">


                                {imageList && (
                                <div>
                                    {imageList.map((item, index) => (
                                    
                                        <div key={index} className={`${item.fields.filter} masonry-item col-lg-3 col-md-6 col-sm-6 m-b30`}>
                                            <div className="wt-img-effect ">
                                                <img src={item.fields.cloudinaryImage[0].url} alt={item.fields?.alt} />
                                                <div className="overlay-bx-2 ">
                                                    <div className="line-amiation">
                                                        <div className="text-white font-weight-300 p-a40">
                                                            <h2>{item.fields.title}</h2>
                                                            <p>{item.fields.briefDescription}</p>
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
                                </div>
                                )}
                                {isOpen && (

                                    <Lightbox

                                        mainSrc={imageList[photoIndex].fields.cloudinaryImage[0].url}           // there will always be only one image, hence [0]
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
                {/* SECTION CONTENT END  */}
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Gallery22