import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';

const filters = [
    { label: "House", filter: ".cat-1" },
    { label: "Building", filter: ".cat-2" },
    { label: "Office", filter: ".cat-3" },
    { label: "Garden", filter: ".cat-4" },
    { label: "Interior", filter: ".cat-5" }
];

const projects = [
    {
        image: require('./../../images/gallery/pic1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-1',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic2.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-2',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic3.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-3',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic4.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-4',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic5.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-5',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic6.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-4',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic7.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-3',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-2',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic2.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-1',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic3.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-1',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic4.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-1',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic5.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        filter: 'cat-1',
        date: '05 Jan 2022 ',
        author: 'Admin',
    }
]

var bnrimg = require('./../../images/banner/5.jpg');

class NewsGrid extends React.Component {
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
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Exploring our clients goals, priorities, lifestyle, and tastes" pagename="News grid" bgimage={bnrimg.default} />

                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb90 tm-work-wrap">
                        <div className="container">
                            {/* PAGINATION START */}
                            <div className="filter-wrap p-b50">
                                <ul className="masonry-filter link-style  text-uppercase">
                                    <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                    {filters.map((item, index) => (
                                        <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                    ))}
                                </ul>
                            </div>
                            {/* PAGINATION END */}
                        </div>
                        {/* GALLERY CONTENT START */}
                        <div className="portfolio-wrap mfp-gallery news-grid clearfix">
                            <div className="container-fluid">
                                <div className="row">
                                    {projects.map((item, index) => (
                                        <div key={index} className={`${item.filter} masonry-item col-lg-4 col-md-6 col-sm-6 m-b30`}>
                                            <div className="wt-img-effect ">
                                                <img src={item.image.default} alt="" />
                                                <div className="overlay-bx-2 ">
                                                    <div className="line-amiation  p-a40">
                                                        <div className="wt-post-info text-white">
                                                            <div className="wt-post-title ">
                                                                <h2 className="post-title"><NavLink to={"/project-detail"} className="text-white font-18 letter-spacing-4 font-weight-600">{item.title}</NavLink></h2>
                                                            </div>
                                                            <div className="wt-post-meta ">
                                                                <ul>
                                                                    <li className="post-date"><span> {item.date}</span> </li>
                                                                    <li className="post-author"><NavLink to={"/project-detail"}>By <span>{item.author}</span></NavLink> </li>
                                                                </ul>
                                                            </div>
                                                            <div className="wt-post-text">
                                                                <p>{item.description}</p>
                                                            </div>
                                                            <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-l20">Read More</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
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

export default NewsGrid;