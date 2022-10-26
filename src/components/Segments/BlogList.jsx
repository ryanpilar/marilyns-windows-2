import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {createClient} from 'contentful'

import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import BlogListCard from './../Segments/BlogListCard';


var bnrimg = require('./../../images/banner/2.jpg');

const BlogList = () => {

    const [ blogPost, setBlogPost ] = useState([])

    const client = createClient({                                   // contentful connect
        space: '6puvtv0bf6bf',
        accessToken: 'BpFpx0SozPL0X73BTfhX470Vea4tMvgXy4GAR_h7hXE',
    })

    useEffect(() => {
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

    useEffect( () => {
        const getAllEntries = async() => {                          // contentful get data
            try {
                await client.getEntries().then( blogEntries => {
                    setBlogPost(blogEntries)
                })
            }
            catch (error) {
                console.log('this error arose from the client.getEntries() call to contentful')
            }
        }

        getAllEntries()

    }, [])

  return (
    <>
        <Header2 />

        {/* <div className="page-content"> */}
            
            <Banner title="high quality, effective, and inspiring built space." pagename="Post Gallery" bgimage={bnrimg.default}/>
            
            {/* SECTION CONTENT START */}
            <div className="section-full p-tb90 tm-work-wrap square_shape1 square_shape3 ">
                <div className="container">
                    <div className="max-mid-container">
                        <div className="section-content">

                            {/* TITLE START */}
                                <div className="text-left">
                                    <h2 className="text-uppercase font-36">My Recent Blogs</h2>
                                    <div className="wt-separator-outer">
                                        <div className="wt-separator bg-black" />
                                    </div>
                                </div>
                            {/* TITLE END */} 
                            
                            {/* BLOG CONTENT START */}
                                <div className="section-content">
                                    <div className="portfolio-wrap mfp-gallery work-grid m-t50 ">
                                        <div className="container-fluid">
                                            <div className="row">
                                                {blogPost?.items && (

                                                    <div>
                                                        {blogPost?.items?.map( (postData, index) => (

                                                            <BlogListCard post={postData} key={postData.sys.id} />

                                                        ))}
                                                    </div>

                                                )}
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* BLOG CONTENT END */}

                        </div>                           
                    </div>
                </div>
            </div>
            {/* SECTION CONTENT END */}
        {/* </div> */}

        <Footer />
    </>
  )
}

export default BlogList



