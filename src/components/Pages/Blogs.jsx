import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';

import {createClient} from 'contentful'

import Header2 from '../Common/Header2';
import Banner from './../Segments/Banner';
import BlogCard from '../Segments/BlogCard';
// import Footer from '../Common/Footer';

var bnrimg = require('./../../images/banner/6.jpg');

const Blogs = () => {

    const [ blogPost, setBlogPost ] = useState([])

    

    useEffect( () => {
        const getAllEntries = async() => {                          // contentful get data
            try {
                const client = createClient({                                   // contentful connect
                    space: process.env.REACT_APP_CONTENTFUL_SPACE,
                    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
                })
                
                await client.getEntries({content_type: 'marilynsWindows'}).then( blogEntries => {
                    console.log('blog entries', blogEntries)
                    setBlogPost(blogEntries)
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
        <div className="page-content">
            <Banner title="Sustainability, Innovation, and Craftmanship" pagename="Work grid" bgimage={bnrimg.default} />
            
            <div className='container'>

                <div className="container">
                    {/* TITLE START */}
                        <div className="text-left">
                            <h2 className="text-uppercase font-36">My Recent Blogs</h2>
                            <div className="wt-separator-outer">
                                <div className="wt-separator bg-black" />
                            </div>
                        </div>
                    {/* TITLE END */}
                </div>

                {/* SECTION CONTENT START */}
                <div className="section-full p-tb90 tm-work-wrap">

                    <div className="portfolio-wrap mfp-gallery work-grid clearfix">
                        <div className="container-fluid">
                            <div className="row">

                                {blogPost?.items && (
                                    <div>
                                        {blogPost?.items?.map( (postData, index) => (
                                            <>
                                                <BlogCard key={index} passItem={postData} passIndex={index} />
                                            </>
                                        ))}
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* SECTION CONTENT END  */}

            </div>
        </div>

        {/* <Footer /> */}
    </>
  )
}

export default Blogs