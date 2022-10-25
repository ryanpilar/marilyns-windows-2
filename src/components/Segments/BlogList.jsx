import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import RelatedProjects from './../Segments/RelatedProjects';
import BlogListCard from './../Segments/BlogListCard';
// import BlogComments from './../Segments/BlogComments';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import {createClient} from 'contentful'
import { useEffect, useState } from 'react';

var bnrimg = require('./../../images/banner/2.jpg');

const images = [
    { image: require('./../../images/blog/default/thum1.jpg') },
    { image: require('./../../images/blog/default/thum2.jpg') },
    { image: require('./../../images/blog/default/thum3.jpg') }
]
// import React from 'react'

const BlogList = () => {

    const client = createClient({ 
        space: '6puvtv0bf6bf',
        accessToken: 'BpFpx0SozPL0X73BTfhX470Vea4tMvgXy4GAR_h7hXE'
    })

     // set a getter and setter:
     const [ blogPost, setBlogPost ] = useState([])

    useEffect( () => {
        const getAllEntries = async() => {
            try {
                await client.getEntries().then( blogEntries => {
                    console.log("BBLOG", blogEntries)
                    setBlogPost(blogEntries)
                })
            }
            catch (error) {
                console.log('error')
            }
        }

        getAllEntries()
    }, [])

    const options = {
        loop:true,
        margin:30,
        nav:true,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
          0:{
            items:1
          },
          480:{
            items:1
          },			
          767:{
            items:1
          },
          1000:{
            items:1
          }
        }
    }

  return (
    <>
        <Header2 />
        <div className="page-content ">
            <Banner title="high quality, effective, and inspiring built space." pagename="Post Gallery" bgimage={bnrimg.default}/>
            
            {/* SECTION CONTENT START */}
            <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
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
                            {/* we use a question mark to give optionality b/c data is from a rest api!*/}
                            
                            {/* BLOG CONTENT START */}
                            <div className="section-content">
                                <div className="portfolio-wrap mfp-gallery work-grid clearfix m-t50">
                                    <div className="container-fluid">
                                        <div className="row">

                                            {blogPost?.items?.map( (postData, index) => 

                                                <BlogListCard post={postData} key={postData.sys.id} />

                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* BLOG CONTENT END */}

                        </div>                           

                        

                        {/* <RelatedProjects/> */}
                        {/* <BlogComments/> */}
                        
                    </div>
                </div>
            </div>
            {/* SECTION CONTENT END */}
        </div>

        <Footer />
    </>
  )
}

export default BlogList



