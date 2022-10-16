import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';

var bnrimg = require('./../../images/banner/6.jpg');

var img1 = require('./../../images/gallery/pic2.jpg');
var img2 = require('./../../images/gallery/pic6.jpg');
var img3 = require('./../../images/gallery/pic1.jpg');
var img4 = require('./../../images/gallery/pic3.jpg');
var img5 = require('./../../images/gallery/pic5.jpg');
var img6 = require('./../../images/gallery/pic4.jpg');
var img7 = require('./../../images/gallery/pic8.jpg');

class NewsListing extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Architects with a different approach." pagename="News listing" bgimage={bnrimg.default}/>

                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb90 square_shape1 tm-news-wrap">
                        {/* GALLERY CONTENT START */}
                        <div className="container">
                            <div className="news-listing ">
                                {/* COLUMNS 1 */}
                                <div className="blog-post blog-md date-style-1 clearfix bdr-2 bdr-gray-light m-b60 bg-gray">
                                    <div className="wt-post-media wt-img-effect zoom-slow">
                                        <NavLink to={"/project-detail"}><img src={img1.default} alt="" /></NavLink>
                                    </div>
                                    <div className="wt-post-info p-tb30 text-black">
                                        <div className="wt-post-title ">
                                            <h2 className="post-title"><NavLink to={"/project-detail"} className="text-black font-20 letter-spacing-1 font-weight-600">Triangle Concrete House on lake sit amet pariatur quibusdam</NavLink></h2>
                                        </div>
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date"><strong>04 Jan</strong> <span> 2022</span> </li>
                                                <li className="post-author"><NavLink to={"/project-detail"}>By <span>Admin</span></NavLink> </li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-text">
                                            <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse are beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                        </div>
                                        <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase">Read More</NavLink>
                                    </div>
                                </div>
                                {/* COLUMNS 2 */}
                                <div className="blog-post blog-md date-style-1 clearfix bdr-2 bdr-gray-light m-b60 bg-gray">
                                    <div className="wt-post-media wt-img-effect zoom-slow">
                                        <NavLink to={"/project-detail"}><img src={img2.default} alt=""/></NavLink>
                                    </div>
                                    <div className="wt-post-info p-tb30 text-black">
                                        <div className="wt-post-title ">
                                            <h2 className="post-title"><NavLink to={"/project-detail"} className="text-black font-20 letter-spacing-1 font-weight-600">Triangle Concrete House on lake sit amet pariatur quibusdam</NavLink></h2>
                                        </div>
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date"><strong>04 Jan</strong> <span> 2022</span> </li>
                                                <li className="post-author"><NavLink to={"/project-detail"}>By <span>Admin</span></NavLink> </li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-text">
                                            <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse are beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                        </div>
                                        <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase">Read More</NavLink>
                                    </div>
                                </div>
                                {/* COLUMNS 3 */}
                                <div className="blog-post blog-md date-style-1 clearfix bdr-2 bdr-gray-light m-b60 bg-gray">
                                    <div className="wt-post-media wt-img-effect zoom-slow">
                                        <NavLink to={"/project-detail"}><img src={img3.default} alt=""/></NavLink>
                                    </div>
                                    <div className="wt-post-info p-tb30 text-black">
                                        <div className="wt-post-title ">
                                            <h2 className="post-title"><NavLink to={"/project-detail"} className="text-black font-20 letter-spacing-1 font-weight-600">Triangle Concrete House on lake sit amet pariatur quibusdam</NavLink></h2>
                                        </div>
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date"><strong>04 Jan</strong> <span> 2022</span> </li>
                                                <li className="post-author"><NavLink to={"/project-detail"}>By <span>Admin</span></NavLink> </li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-text">
                                            <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse are beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                        </div>
                                        <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase">Read More</NavLink>
                                    </div>
                                </div>
                                {/* COLUMNS 4 */}
                                <div className="blog-post blog-md date-style-1 clearfix bdr-2 bdr-gray-light m-b60 bg-gray">
                                    <div className="wt-post-media wt-img-effect zoom-slow">
                                        <NavLink to={"/project-detail"}><img src={img4.default} alt=""/></NavLink>
                                    </div>
                                    <div className="wt-post-info p-tb30 text-black">
                                        <div className="wt-post-title ">
                                            <h2 className="post-title"><NavLink to={"/project-detail"} className="text-black font-20 letter-spacing-1 font-weight-600">Triangle Concrete House on lake sit amet pariatur quibusdam</NavLink></h2>
                                        </div>
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date"><strong>04 Jan</strong> <span> 2022</span> </li>
                                                <li className="post-author"><NavLink to={"/project-detail"}>By <span>Admin</span></NavLink> </li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-text">
                                            <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse are beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                        </div>
                                        <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase">Read More</NavLink>
                                    </div>
                                </div>
                                {/* COLUMNS 5 */}
                                <div className="blog-post blog-md date-style-1 clearfix bdr-2 bdr-gray-light m-b60 bg-gray">
                                    <div className="wt-post-media wt-img-effect zoom-slow">
                                        <NavLink to={"/project-detail"}><img src={img5.default} alt=""/></NavLink>
                                    </div>
                                    <div className="wt-post-info p-tb30 text-black">
                                        <div className="wt-post-title ">
                                            <h2 className="post-title"><NavLink to={"/project-detail"} className="text-black font-20 letter-spacing-1 font-weight-600">Triangle Concrete House on lake sit amet pariatur quibusdam</NavLink></h2>
                                        </div>
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date"><strong>04 Jan</strong> <span> 2022</span> </li>
                                                <li className="post-author"><NavLink to={"/project-detail"}>By <span>Admin</span></NavLink> </li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-text">
                                            <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse are beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                        </div>
                                        <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase">Read More</NavLink>
                                    </div>
                                </div>
                                {/* COLUMNS 6 */}
                                <div className="blog-post blog-md date-style-1 clearfix bdr-2 bdr-gray-light m-b60 bg-gray">
                                    <div className="wt-post-media wt-img-effect zoom-slow">
                                        <NavLink to={"/project-detail"}><img src={img6.default} alt=""/></NavLink>
                                    </div>
                                    <div className="wt-post-info p-tb30 text-black">
                                        <div className="wt-post-title ">
                                            <h2 className="post-title"><NavLink to={"/project-detail"} className="text-black font-20 letter-spacing-1 font-weight-600">Triangle Concrete House on lake sit amet pariatur quibusdam</NavLink></h2>
                                        </div>
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date"><strong>04 Jan</strong> <span> 2022</span> </li>
                                                <li className="post-author"><NavLink to={"/project-detail"}>By <span>Admin</span></NavLink> </li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-text">
                                            <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse are beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                        </div>
                                        <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase">Read More</NavLink>
                                    </div>
                                </div>
                                {/* COLUMNS 7 */}
                                <div className="blog-post blog-md date-style-1 clearfix bdr-2 bdr-gray-light m-b60 bg-gray">
                                    <div className="wt-post-media wt-img-effect zoom-slow">
                                        <NavLink to={"/project-detail"}><img src={img7.default} alt=""/></NavLink>
                                    </div>
                                    <div className="wt-post-info p-tb30 text-black">
                                        <div className="wt-post-title ">
                                            <h2 className="post-title"><NavLink to={"/project-detail"} className="text-black font-20 letter-spacing-1 font-weight-600">Triangle Concrete House on lake sit amet pariatur quibusdam</NavLink></h2>
                                        </div>
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date"><strong>04 Jan</strong> <span> 2022</span> </li>
                                                <li className="post-author"><NavLink to={"/project-detail"}>By <span>Admin</span></NavLink> </li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-text">
                                            <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse are beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                        </div>
                                        <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            <ul className="pagination m-tb0">
                                <li><NavLink to={"#"}>«</NavLink></li>
                                <li><NavLink to={"#"}>1</NavLink></li>
                                <li><NavLink to={"#"}>2</NavLink></li>
                                <li><NavLink to={"#"}>3</NavLink></li>
                                <li><NavLink to={"#"}>4</NavLink></li>
                                <li><NavLink to={"#"}>5</NavLink></li>
                                <li><NavLink to={"#"}>»</NavLink></li>
                            </ul>
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default NewsListing;