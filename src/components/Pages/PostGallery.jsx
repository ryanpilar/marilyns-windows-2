import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import RelatedProjects from './../Segments/RelatedProjects';
import BlogComments from './../Segments/BlogComments';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

var bnrimg = require('./../../images/banner/2.jpg');

const images = [
    { image: require('./../../images/blog/default/thum1.jpg') },
    { image: require('./../../images/blog/default/thum2.jpg') },
    { image: require('./../../images/blog/default/thum3.jpg') }
]

class PostGallery extends React.Component {
    render() {
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
                    <Banner title="high quality, effective, and inspiring built space." pagename="Post Gallery" bgimage={bnrimg.default}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                        <div className="container">
                            <div className="max-mid-container">
                                <div className="blog-post blog-lg date-style-1 text-black">
                                    <div className="wt-post-media">
                                        {/*Fade slider*/}
                                        <OwlCarousel className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                <div className="aon-thum-bx">
                                                    <img src={item.image.default} alt=""/>
                                                </div>
                                                </div>

                                            ))}

                                            </OwlCarousel>
                                        
                                        {/*fade slider END*/}
                                    </div>
                                    <div className="wt-post-info p-t30 bg-white">
                                        <div className="wt-post-title ">
                                            <h2 className="post-title"><span className="text-black font-20 letter-spacing-1 font-weight-600">Blogpost With Image Slider there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</span></h2>
                                        </div>
                                        <div className="wt-post-meta">
                                            <ul>
                                                <li className="post-date"> <strong>04 Dec</strong> <span> 2022</span> </li>
                                                <li className="post-comment">5 Comments </li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-text">
                                            <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis Consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae, consequuntur minima tempora cupiditate ratione est, ad molestias deserunt in ipsam ea quasi cum culpa adipisci dolores voluptatum fuga at! assumenda provident lorem ipsum dolor sit amet, consectetur.</p>
                                            <p>Donec posuere bibendum metus. Quisque gravida luctus volutpat. Mauris interdum, lectus in dapibus molestie, quam felis sollicitudin mauris, sit amet tempus velit lectus nec lorem. Nullam vel mollis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tincidunt accumsan massa id viverra. Sed sagittis, nisl sit amet imperdiet convallis, nunc tortor consequat tellus, vel molestie neque nulla non ligula. Proin tincidunt tellus ac porta volutpat. Cras mattis congue lacus id bibendum. Mauris ut sodales libero. Maecenas feugiat sit amet enim in accumsan.</p>
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
                                    </div>
                                </div>
                                
                                <div className="wt-divider divider-3px bg-gray-dark"><i className="icon-dot c-square" /></div>
                                <RelatedProjects/>
                                <BlogComments/>
                                
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

export default PostGallery;