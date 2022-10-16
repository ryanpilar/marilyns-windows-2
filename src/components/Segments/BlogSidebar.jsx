import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const recentPost = [
    {
        image: require('./../../images/blog/recent-blog/pic1.jpg'),
        title: 'Lorem ipsum dolor sit amet',
        date: '25 Dec',
        comment: '20 Comment'
    },
    {
        image: require('./../../images/blog/recent-blog/pic2.jpg'),
        title: 'Debitis nihil placeat, illum est',
        date: '10 Jan',
        comment: '15 Comment'
    },
    {
        image: require('./../../images/blog/recent-blog/pic3.jpg'),
        title: 'Elit Assumenda vel amet',
        date: '25 Mar',
        comment: '07 Comment'
    }
]

const logos = [
    { image: require('./../../images/client-logo/w1.png') },
    { image: require('./../../images/client-logo/w2.png') },
    { image: require('./../../images/client-logo/w3.png') },
]

const galleryImages = [
    {
        image: require('./../../images/gallery/pic1.jpg'),
        thumb: require('./../../images/gallery/thumb/pic1.jpg')
    },
    {
        image: require('./../../images/gallery/pic2.jpg'),
        thumb: require('./../../images/gallery/thumb/pic2.jpg')
    },
    {
        image: require('./../../images/gallery/pic3.jpg'),
        thumb: require('./../../images/gallery/thumb/pic3.jpg')
    },
    {
        image: require('./../../images/gallery/pic4.jpg'),
        thumb: require('./../../images/gallery/thumb/pic4.jpg')
    },
    {
        image: require('./../../images/gallery/pic5.jpg'),
        thumb: require('./../../images/gallery/thumb/pic5.jpg')
    },
    {
        image: require('./../../images/gallery/pic6.jpg'),
        thumb: require('./../../images/gallery/thumb/pic6.jpg')
    },
    {
        image: require('./../../images/gallery/pic7.jpg'),
        thumb: require('./../../images/gallery/thumb/pic7.jpg')
    },
    {
        image: require('./../../images/gallery/pic8.jpg'),
        thumb: require('./../../images/gallery/thumb/pic8.jpg')
    },
    {
        image: require('./../../images/gallery/pic7.jpg'),
        thumb: require('./../../images/gallery/thumb/pic7.jpg')
    },
    {
        image: require('./../../images/gallery/pic6.jpg'),
        thumb: require('./../../images/gallery/thumb/pic6.jpg')
    },
    {
        image: require('./../../images/gallery/pic5.jpg'),
        thumb: require('./../../images/gallery/thumb/pic5.jpg')
    },
    {
        image: require('./../../images/gallery/pic4.jpg'),
        thumb: require('./../../images/gallery/thumb/pic4.jpg')
    }
]

class BlogSidebar extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
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

    };

    render() {
        const options = {
            loop: true,
            autoplay: true,
            items: 1,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };
        return (
            <>
                <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
                <div className="col-md-4">
                    <aside className="side-bar">
                        {/* SEARCH */}
                        <div className="widget bg-white ">
                            <h4 className="widget-title text-uppercase">Search</h4>
                            <div className="search-bx">
                                <form role="search" method="post" action="">
                                    <div className="input-group">
                                        <input name="news-letter" type="text" className="form-control" placeholder="Write your text" />
                                        <span className="input-group-btn">
                                            <button type="button" className="site-button"><i className="fa fa-search" /></button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="wt-divider bg-black"><i className="icon-dot c-square" /></div>
                        {/* ABOUT AUTHOR */}
                        <div className="widget bg-white">
                            <h4 className="widget-title text-uppercase">About Author</h4>
                            <div className="widget-post m-b15">
                                <img src={require("./../../images/gallery/portrait/pic6.jpg").default} alt="" className="img-responsive" />
                            </div>
                            <p>We are the dolor sit ametLorem Ipsum Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, Consequat ipsum, nec sagittis sem nibh id elit nibh vel velit auctor aliquet.
                                sem nibh  Aenean sollicitudin,
                            </p>
                        </div>
                        <div className="wt-divider bg-black"><i className="icon-dot c-square" /></div>
                        {/* RECENT POSTS */}
                        <div className="widget bg-white  recent-posts-entry">
                            <h4 className="widget-title  text-uppercase">Recent Posts</h4>
                            <div className="section-content">
                                <div className="widget-post-bx">
                                    {recentPost.map((item, index) => (
                                        <div key={index} className="widget-post clearfix">
                                            <div className="wt-post-media">
                                                <img src={item.image.default} alt="" />
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-header">
                                                    <h6 className="post-title"><NavLink to={"/post-image"}>{item.title}</NavLink></h6>
                                                </div>
                                                <div className="wt-post-meta">
                                                    <ul>
                                                        <li className="post-author">{item.date}</li>
                                                        <li className="post-comment"> {item.comment}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="wt-divider bg-black"><i className="icon-dot c-square" /></div>
                        {/* OUR CLIENT */}
                        <div className="widget">
                            <h4 className="widget-title  text-uppercase">Our Client</h4>
                            <OwlCarousel className="owl-carousel widget-client p-t10" {...options}>
                                {logos.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="ow-client-logo">
                                            <div className="client-logo wt-img-effect on-color">
                                            <NavLink to={"#"}><img src={item.image.default} alt="" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                            </OwlCarousel>
                            
                        </div>
                        <div className="wt-divider bg-black"><i className="icon-dot c-square" /></div>
                        {/* OUR GALLERY  */}
                        <div className="widget widget_gallery mfp-gallery">
                            <h4 className="widget-title  text-uppercase">Our Gallery</h4>
                            <ul>
                                {galleryImages.map((item, index) => (
                                    <li key={index}>
                                        <div className="mt-post-thum">
                                            <a href={item.image.default} className="mfp-link"><img src={item.thumb.default} alt=""/></a>
                                        </div>
                                    </li>
                                ))}
                                
                            </ul>
                        </div>
                        <div className="wt-divider bg-black"><i className="icon-dot c-square" /></div>
                        {/* NEWSLETTER */}
                        <div className="widget widget_newsletter-2 bg-white  ">
                            <h4 className="widget-title  text-uppercase">Newsletter</h4>
                            <div className="newsletter-bx p-a30">
                                <div className="newsletter-icon">
                                    <i className="fa fa-envelope-o" />
                                </div>
                                <div className="newsletter-content">
                                    <p>Enter your e-mail and subscribe to our newsletter. Sit amet of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis</p>
                                </div>
                                <div className="m-t20">
                                    <form role="search" method="post" action="">
                                        <div className="input-group">
                                            <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                            <span className="input-group-btn">
                                                <button type="button" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="wt-divider bg-black"><i className="icon-dot c-square" /></div>
                        {/* TAGS */}
                        <div className="widget bg-white  widget_tag_cloud">
                            <h4 className="widget-title  text-uppercase">Tags</h4>
                            <div className="tagcloud">
                                <NavLink to={"#"}>Trouble </NavLink>
                                <NavLink to={"#"}>Programmers</NavLink>
                                <NavLink to={"#"}>Never</NavLink>
                                <NavLink to={"#"}>Tell</NavLink>
                                <NavLink to={"#"}>Doing</NavLink>
                                <NavLink to={"#"}>Person</NavLink>
                                <NavLink to={"#"}>Inventors Tag</NavLink>
                                <NavLink to={"#"}>Between </NavLink>
                                <NavLink to={"#"}>Abilities</NavLink>
                                <NavLink to={"#"}>Fault </NavLink>
                                <NavLink to={"#"}>Gets </NavLink>
                                <NavLink to={"#"}>Macho</NavLink>
                            </div>
                        </div>
                    </aside>
                </div>
            </>
        );
    }
};

export default BlogSidebar;