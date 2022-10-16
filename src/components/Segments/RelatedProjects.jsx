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
    const options = {
      loop:true,
      margin:30,
      nav:true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive:{
        0:{
          items:1
        },
        480:{
          items:2
        },			
        767:{
          items:3
        },
        1000:{
          items:3
        }
      }
    };
    return (
      <>
        <div className="section-content">
          {/* TITLE START */}
          <div className="text-left">
            <h2 className="text-uppercase font-36">Related projects</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black" />
            </div>
          </div>
          {/* TITLE END */}
          {/* CAROUSEL */}
          <div className="section-content">
            <OwlCarousel className="owl-carousel blog-related-slider  owl-btn-top-right" {...options}>
              {projects.map((item, index) => (
                <div className="item" key={index}>
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
                      <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Read More </span></NavLink>
                    </div>
                  </div>
                </div>

              ))}

            </OwlCarousel>
          </div>
        </div>
      </>
    );
  }
};

export default RelatedProjects;