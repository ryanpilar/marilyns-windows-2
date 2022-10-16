import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';

const projects = [
    {
        image: require('./../../images/gallery/pic2.jpg'),
        title: 'Triangle Concrete House on lake dolar sit amet veritatis quisquam',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        date: '05 Jan 2022  ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Triangle Concrete House on lake dolar sit amet veritatis quisquam',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic1.jpg'),
        title: 'Triangle Concrete House on lake dolar sit amet veritatis quisquam',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Triangle Concrete House on lake dolar sit amet veritatis quisquam',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/portrait/pic5.jpg'),
        title: 'Triangle Concrete House on lake dolar sit amet veritatis quisquam',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic3.jpg'),
        title: 'Triangle Concrete House on lake dolar sit amet veritatis quisquam',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic6.jpg'),
        title: 'Triangle Concrete House on lake dolar sit amet veritatis quisquam',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Triangle Concrete House on lake dolar sit amet veritatis quisquam',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic7.jpg'),
        title: 'Triangle Concrete House on lake dolar sit amet veritatis quisquam',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic2.jpg'),
        title: 'Triangle Concrete House on lake dolar sit amet veritatis quisquam',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        date: '05 Jan 2022 ',
        author: 'Admin',
    },
    {
        image: require('./../../images/gallery/pic4.jpg'),
        title: 'Triangle Concrete House on lake dolar sit amet veritatis quisquam',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse',
        date: '05 Jan 2022 ',
        author: 'Admin',
    }
]

var bnrimg = require('./../../images/banner/1.jpg');

class NewsMasonary extends React.Component {
    componentDidMount(){
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
      
    };
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="A whole different kind of architectural firm." pagename="News Masonry" bgimage={bnrimg.default}/>
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb90 tm-news-wrap">
                        {/* GALLERY CONTENT START */}
                        <div className="container-fluid">
                            <div className="portfolio-wrap mfp-gallery news-masonry clearfix">
                                <div className="row">
                                    {projects.map((item, index) => (
                                        <div key={index} className="masonry-item col-lg-3 col-md-6 col-sm-6">
                                            <div className="blog-post blog-grid date-style-1">
                                                <div className="wt-post-media wt-img-effect zoom-slow">
                                                    <NavLink to={"/project-detail"}><img src={item.image.default} alt=""/></NavLink>
                                                </div>
                                                <div className="wt-post-info p-t30 text-black">
                                                    <div className="wt-post-title ">
                                                        <h2 className="post-title"><NavLink to={"/project-detail"} className="text-black font-20 letter-spacing-1 font-weight-600">{item.title}</NavLink></h2>
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
                                                    <NavLink to={"/project-detail"} className="m-b15 site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Read More </span></NavLink>
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

export default NewsMasonary;