import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
  {
    image: require('./../../images/gallery/pic1.jpg'),
    title: 'Triangle Concrete House',
    description: 'Adipisicing elit. Accusantium vitae, consequ untur minima tempora cupiditate ratione est ad molestias deserunt in ipsam ea quasi.',
    filter: 'cat-1',
    date: '05 Jan 2022',
    author: 'Admin',
  },
  {
    image: require('./../../images/gallery/pic2.jpg'),
    title: 'Triangle Concrete House',
    description: 'Adipisicing elit. Accusantium vitae, consequ untur minima tempora cupiditate ratione est ad molestias deserunt in ipsam ea quasi.',
    filter: 'cat-2',
    date: '05 Jan 2022',
    author: 'Admin',
  },
  {
    image: require('./../../images/gallery/pic3.jpg'),
    title: 'Triangle Concrete House',
    description: 'Adipisicing elit. Accusantium vitae, consequ untur minima tempora cupiditate ratione est ad molestias deserunt in ipsam ea quasi.',
    filter: 'cat-3',
    date: '05 Jan 2022',
    author: 'Admin',
  },
  {
    image: require('./../../images/gallery/pic4.jpg'),
    title: 'Triangle Concrete House',
    description: 'Adipisicing elit. Accusantium vitae, consequ untur minima tempora cupiditate ratione est ad molestias deserunt in ipsam ea quasi.',
    filter: 'cat-4',
    date: '05 Jan 2022',
    author: 'Admin',
  },
  {
    image: require('./../../images/gallery/pic5.jpg'),
    title: 'Triangle Concrete House',
    description: 'Adipisicing elit. Accusantium vitae, consequ untur minima tempora cupiditate ratione est ad molestias deserunt in ipsam ea quasi.',
    filter: 'cat-5',
    date: '05 Jan 2022',
    author: 'Admin',
  }
]

class RelatedProjects extends React.Component {

  render() {

    return (
      <>
        <div className="section-content">
          {/* TITLE START */}
          <div className="text-left">
            <h2 className="text-uppercase font-36">My Recent Blogs</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black" />
            </div>
          </div>
          {/* TITLE END */}
       

          {/* BLOG CONTENT START */}
          <div className="section-content">
            <div className="portfolio-wrap mfp-gallery work-grid clearfix m-t50">
                <div className="container-fluid">
                    <div className="row">

                        {projects.map((item, index) => (
            
                            <div key={index} className={`masonry-item col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30`}>
                              <div className="blog-post blog-grid date-style-1">
                                  <div className="wt-post-media wt-img-effect zoom-slow">
                                    <NavLink to={"/project-detail"}><img src={item.image.default} alt="" /></NavLink>
                                  </div>
                                  <div className="wt-post-info p-a20 bg-gray text-black">
                                    <div className="wt-post-title ">
                                      <h2 className="post-title"><NavLink to={"/project-detail"} className="text-black font-16 letter-spacing-2 font-weight-600">{item.title}</NavLink></h2>
                                    </div>
                                    <div className="wt-post-meta ">
                                      <ul>
                                        <li className="post-date"><strong> {item.date}</strong> </li>
                                        <li className="post-author"><NavLink to={"/project-detail"}>By <span>{item.author}</span></NavLink> </li>
                                      </ul>
                                    </div>
                                    <div className="wt-post-text">
                                      <p>{item.description}</p>
                                    </div>

                                    <NavLink 
                                      to={"/post"} 
                                      className="site-button black radius-no text-uppercase"
                                      data={item}>
                                        <span className="font-12 letter-spacing-5"> Read More </span>
                                    </NavLink>

                                  </div>
                                </div>
                            </div>
                        ))}
            
                    </div>
                </div>
            </div>
          </div>
          {/* BLOG CONTENT END */}
        </div>
        {/* SECTION CONTENT END  */}
      </>
    );
  }
};

export default RelatedProjects;