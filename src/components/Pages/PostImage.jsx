import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import RelatedProjects from './../Segments/RelatedProjects';
import BlogComments from './../Segments/BlogComments';

var bnrimg = require('./../../images/banner/3.jpg');

const images = [
    { image: require('./../../images/blog/default/thum3.jpg') },
    { image: require('./../../images/blog/default/thum6.jpg') },
    { image: require('./../../images/blog/default/thum7.jpg') },
    { image: require('./../../images/blog/default/thum8.jpg') },
]

class PostImage extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content ">
                    <Banner title="A truly integrated way of working." pagename="Post Image" bgimage={bnrimg.default}/>
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                        <div className="container">
                            <div className="max-mid-container">
                                {/* BLOG START */}
                                <div className="blog-post date-style-1 blog-detail text-black">
                                    <div className="wt-post-media clearfix m-b30">
                                        <ul className="grid-post">
                                            {images.map((item, index) => (
                                                    <li key={index}>
                                                        <div className="portfolio-item wt-img-effect zoom-slow">
                                                        <img className="img-responsive" src={item.image.default} alt=""/>
                                                    </div>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                    <div className="wt-post-title ">
                                        <h2 className="post-title"><span className="text-black font-20 letter-spacing-1 font-weight-600">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true</span></h2>
                                    </div>
                                    <div className="wt-post-meta ">
                                        <ul>
                                            <li className="post-date"><strong>04 Jan</strong> <span> 2022</span> </li>
                                            <li className="post-comment">5 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="wt-post-text">
                                        <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis Consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae, consequuntur minima tempora cupiditate ratione est, ad molestias deserunt in ipsam ea quasi cum culpa adipisci dolores voluptatum fuga at! assumenda provident lorem ipsum dolor sit amet, consectetur.</p>
                                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. <a href="#">Curabitur blandit tempus porttitor</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
                                        <p>Donec posuere bibendum metus. Quisque gravida luctus volutpat. Mauris interdum, lectus in dapibus molestie, quam felis sollicitudin mauris, sit amet tempus velit lectus nec lorem. Nullam vel mollis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tincidunt accumsan massa id viverra. Sed sagittis, nisl sit amet imperdiet convallis, nunc tortor consequat tellus, vel molestie neque nulla non ligula. Proin tincidunt tellus ac porta volutpat. Cras mattis congue lacus id bibendum. Mauris ut sodales libero. Maecenas feugiat sit amet enim in accumsan.</p>
                                        <blockquote>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-6 tm-qt-img">
                                                    <img src={require("./../../images/gallery/pic1.jpg").default} alt=""/>
                                                </div>
                                                <div className="col-md-8 col-sm-6">
                                                    The trouble with programmers is that you can never tell what a programmer is doing until it's too late. The future belongs to a different kind of person with a different kind of mind: artists, inventors, storytellers-creative and holistic ‘right-brain’ thinkers whose abilities mark the fault line between who gets ahead and who doesn’t.
                                                    <div className="p-t15"><p> – Daniel Pink</p></div>
                                                </div>
                                            </div>
                                        </blockquote>
                                        <p>Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus. Vestibulum eleifend nisl sed massa sagittis vestibulum. Vestibulum pretium blandit tellus, sodales volutpat sapien varius vel. Phasellus tristique cursus erat, a placerat tellus laoreet eget. Fusce vitae dui sit amet lacus rutrum convallis. Vivamus sit amet lectus venenatis est rhoncus interdum a vitae velit.
                                        </p>
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
                                <RelatedProjects/>
                                <BlogComments/>
                                
                                
                                {/* BLOG END */}
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

export default PostImage;