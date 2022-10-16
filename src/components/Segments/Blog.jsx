import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const blogs = [
    {
        image: require('./../../images/blog/landscap-half/pic1.jpg'),
        title: 'Title of first blog post',
        date: '02 Jan 2022',
    },
    {
        image: require('./../../images/blog/landscap-half/pic2.jpg'),
        title: 'Title of first blog post',
        date: '04 Jan 2022',
    }
]

var featuredblog = require('./../../images/blog/square/pic1.jpg');
var bgimg = require('./../../images/background/ptn-1.png');

class Blog extends React.Component {
    
    render() {
        return (
            <>
                <div className="section-full p-t140 bg-repeat tm-blog-wrap" style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head text-left">
                                <h2 className="text-uppercase font-36">Latest Blog</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    {blogs.map((item, index) => (
                                        <div className="overlay-wraper bg-no-repeat bg-cover latest-blog-dark-outer p-a20 m-b30" key={index} style={{ backgroundImage: 'url(' + item.image.default + ')' }}>
                                            <div className="overlay-main bg-black opacity-04" />
                                            <div className="latest-blog-dark text-uppercase p-a20">
                                                <h3 className="m-a0"><NavLink to={"/post-right-sidebar"}><span className="text-white">{item.title}</span></NavLink></h3>
                                                <div className={`${this.props.colorclass} v-date  font-weight-700`}>{item.date}</div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="overlay-wraper bg-no-repeat bg-cover latest-blog-dark-outer2 m-b30" style={{ backgroundImage: 'url(' + featuredblog.default + ')' }}>
                                        <div className="overlay-main bg-black opacity-04" />
                                        <div className="latest-blog-square text-white">
                                            <h2 className="m-t0 m-b10"><NavLink to={"/post-right-sidebar"}><span className="text-white font-30 text-uppercase">Small &amp; Minimal House On Paters on Hill</span></NavLink></h2>
                                            <p className="font-weight-300">typefaces and layouts, and in appeara
                                                nce of different general the content of
                                                dummy text is nonsensical.typefaces
                                                of dummy text is nonsensical.</p>
                                                <NavLink to={"/post-right-sidebar"} className="letter-spacing-4 font-12 text-white text-uppercase">Read More</NavLink>
                                            <div className={`${this.props.colorclass} v-date  font-weight-700 text-uppercase`}>05 Jan 2022</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
                            <strong>Blog</strong>
                            <span className="text-black">Post</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Blog;