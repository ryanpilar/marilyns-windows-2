import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import RelatedProjects from './../Segments/RelatedProjects';
import BlogComments from './../Segments/BlogComments';

var bnrimg = require('./../../images/banner/5.jpg');

class PostVideo extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content ">
                    <Banner title="Delivering architecture, planning, and design globally." pagename="Post Video" bgimage={bnrimg.default} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                        <div className="container">
                            <div className="max-mid-container">
                                <div className="blog-post blog-lg date-style-1 text-black">
                                    <div className="wt-post-media">
                                        <iframe width={1000} height={563} src="https://www.youtube.com/embed/fafEHMnFe3g" />
                                    </div>
                                    <div className="wt-post-info p-t30 bg-white">
                                        <div className="wt-post-title ">
                                            <h2 className="post-title"><span className="text-black font-20 letter-spacing-1 font-weight-600">Lorem Ipsum available, but the majority have suffered alteration in some form beatae hic perferendis velit deserunt.</span></h2>
                                        </div>
                                        <div className="wt-post-meta">
                                            <ul>
                                                <li className="post-date"> <strong>04 Jan</strong> <span> 2022</span> </li>
                                                <li className="post-comment">5 Comments</li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-text">
                                            <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis Consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae, consequuntur minima tempora cupiditate ratione est, ad molestias deserunt in ipsam ea quasi cum culpa adipisci dolores voluptatum fuga at! assumenda provident lorem ipsum dolor sit amet, consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-lg date-style-1 text-black">
                                    <div className="wt-post-media">
                                        <iframe src="https://player.vimeo.com/video/34741214?color=ffffff&title=0&byline=0&portrait=0" width={1000} height={563} />
                                    </div>
                                    <div className="wt-post-info p-t30 bg-white">
                                        <div className="wt-post-title ">
                                            <h2 className="post-title"><span className="text-black font-20 letter-spacing-1 font-weight-600">Blogpost With Image Slider there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</span></h2>
                                        </div>
                                        <div className="wt-post-meta">
                                            <ul>
                                                <li className="post-date"> <strong>04 Jan</strong> <span> 2022</span> </li>
                                                <li className="post-comment">5 Comments</li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-text">
                                            <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis Consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae, consequuntur minima tempora cupiditate ratione est, ad molestias deserunt in ipsam ea quasi cum culpa adipisci dolores voluptatum fuga at! assumenda provident lorem ipsum dolor sit amet, consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 col-sm-6">
                                        <div className="widget bg-white  widget_tag_cloud">
                                            <h4 className="tagcloud text-uppercase">Tags</h4>
                                            <div className="tagcloud">
                                                <NavLink to={"/aboutus"}>Business</NavLink>
                                                <NavLink to={"/aboutus"}>Construction</NavLink>
                                                <NavLink to={"/aboutus"}>Design</NavLink>
                                                <NavLink to={"/aboutus"}>Technology</NavLink>
                                                <NavLink to={"/aboutus"}>Architecture</NavLink>
                                                <NavLink to={"/aboutus"}>Marketing</NavLink>
                                                <NavLink to={"/aboutus"}>Design</NavLink>
                                                <NavLink to={"/aboutus"}>Technology</NavLink>
                                                <NavLink to={"/aboutus"}>Structure</NavLink>
                                            </div>
                                        </div>
                                    </div>
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

                                <div className="wt-divider divider-3px bg-gray-dark"><i className="icon-dot c-square" /></div>
                                <RelatedProjects />
                                <BlogComments />


                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default PostVideo;