import React from 'react';
import { useEffect, useState } from 'react';

import { NavLink, useParams } from 'react-router-dom';          // useParams allows the '/post/:id' to work
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import RelatedProjects from './../Segments/RelatedProjects';

import OwlCarousel from 'react-owl-carousel';

import {createClient} from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

var bnrimg = require('./../../images/banner/2.jpg');

const BlogPost = () => {

    const client = createClient({ 
        space: '6puvtv0bf6bf',
        accessToken: 'BpFpx0SozPL0X73BTfhX470Vea4tMvgXy4GAR_h7hXE'
    })

    const {id} = useParams()                                    // grabs the contentful :id form the address bar

    const [singleBlogPost, setSingleBlogPost] = useState([])

    useEffect( () => {

        const getEntryById = async () => {
            try {
                await client.getEntry(id).then( blogEntry => {
                    console.log('BLOG ENTRY', blogEntry)
                    setSingleBlogPost(blogEntry)

                })
            }
            catch (error) {
                console.log('error')
            }
        }

        getEntryById()

    }, [])

    const convertLineBreaks = () => {


        if (singleBlogPost?.fields?.postContent) {

            const document = {
                nodeType: 'document',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    data: {},
                    content: [
                      {
                        nodeType: 'text',
                        value: singleBlogPost?.fields?.postContent,
                        marks: [],
                        data: {}
                      },
                    ],
                  },
                ],
              }
        
            const contentfulOptions = {
                renderText: text => {
                    return text.split('\n').reduce((children, textSegment, index) => {
                      return [...children, index > 0 && <br key={index} />, textSegment];
                    }, []);
                  },
            }

            
            return documentToReactComponents(document, contentfulOptions)
        }
        else {
            console.log('NO CONTENT PRESENT')
        }

    }
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
      };

  return (
    
    <>
        <Header2 />
        <div className="page-content ">
            
            <Banner title="high quality, effective, and inspiring built space." pagename="Blog Post" bgimage={bnrimg.default}/>
            
            <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                <div className="container">
                    <div className="max-mid-container">

                        <div className="blog-post blog-lg date-style-1 text-black">
                            <div className="wt-post-media">

                                
                                {/*Fade slider*/}
                                <OwlCarousel className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right" {...options}>
                                    
                                    {singleBlogPost?.fields?.blogImages?.map((item, index) => (
                                        <div className="item" key={index}>
                                        <div className="aon-thum-bx">
                                            <img src={item?.fields?.file.url} alt={item?.fields?.description} />
                                        </div>
                                        </div>

                                    ))}

                                    </OwlCarousel>
                                
                                {/*fade slider END*/}
                            </div>
                            <div className="wt-post-info p-t30">
                                <div className="wt-post-title ">
                                    <h2 className="post-title">
                                        <span className="text-black font-20 letter-spacing-1 font-weight-600">
                                            {singleBlogPost?.fields?.descriptiveTitle}
                                        </span></h2>
                                </div>
                                <div className="wt-post-meta">
                                    <ul>
                                        <li className="post-date"> 
                                            <strong>{singleBlogPost?.fields?.dateCreated}</strong>
                                        </li>
                                        {/* <li className="post-comment">5 Comments </li> */}
                                    </ul>
                                </div>
                                <div className="wt-post-text">
                                        
                                        {convertLineBreaks()}
 
                                </div>
                                <div className="row">
                                    
                                    <div className="col-md-4 col-sm-6">
                                        <div className="wt-box">
                                            <div className="row  p-lr15">
                                                <h4 className="tagcloud text-uppercase">Share this Post:</h4>
                                                <div className="widget_social_inks">
                                                    <ul className="social-icons social-md social-square social-dark m-b0">
                                                        <li><a target="_blank" href="https://www.facebook.com" className="fa fa-facebook" /></li>
                                                        <li><a target="_blank" href="https://twitter.com" className="fa fa-twitter" /></li>
                                                        <li><a target="_blank" href="https://in.linkedin.com" className="fa fa-linkedin" /></li>
                                                        <li><a target="_blank" href="https://rss.com" className="fa fa-rss" /></li>
                                                        <li><a target="_blank" href="https://www.youtube.com/" className="fa fa-youtube" /></li>
                                                        <li><a target="_blank" href="https://www.instagram.com/" className="fa fa-instagram" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="wt-divider divider-3px bg-gray-dark"><i className="icon-dot c-square" /></div> */}

                    </div>
                </div>
            </div>
        </div>
        
        <Footer />
    </>
  )
}

export default BlogPost


