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
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/gallery/portrait/pic5.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/gallery/portrait/pic6.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/gallery/portrait/pic7.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic5.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    }
]

var bnrimg = require('./../../images/banner/6.jpg');

class WorkGrid extends React.Component {
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
                    <Banner title="Sustainability, Innovation, and Craftmanship" pagename="Work grid" bgimage={bnrimg.default} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb90 tm-work-wrap">
                        <div className="container">
                            {/* PAGINATION START */}
                            <div className="filter-wrap p-b50">
                                <ul className="masonry-filter link-style  text-uppercase">
                                    <li className="active"><a data-filter="*" href="#">All</a></li>
                                    {filters.map((item, index) => (
                                        <li key={index}><a data-filter={item.filter} href="#">{item.label}</a></li>
                                    ))}
                                </ul>
                            </div>
                            {/* PAGINATION END */}
                        </div>
                        {/* GALLERY CONTENT START */}
                        <div className="portfolio-wrap mfp-gallery work-grid clearfix">
                            <div className="container-fluid">
                                <div className="row">
                                    {projects.map((item, index) => (
                                        <div key={index} className={`${item.filter} masonry-item col-lg-3 col-md-6 col-sm-6 m-b30`}>
                                            <div className="wt-img-effect ">
                                                <img src={item.image.default} alt="" />
                                                <div className="overlay-bx-2 ">
                                                    <div className="line-amiation">
                                                        <div className="text-white font-weight-300 p-a40">
                                                            <h2><NavLink to={"/project-detail"} className="text-white font-20 letter-spacing-1 text-uppercase">{item.title}</NavLink></h2>
                                                            <p>{item.description}</p>
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

export default WorkGrid;