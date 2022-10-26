import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

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
        image: require('./../../images/gallery/portrait/hi-fi/20210604_125547.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/20210618_111954.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/20210619_115609.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/hi-fi/20210824_114233.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/20220401_105145.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/20220429_103818.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/20220429_103818.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/20220706_131619.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/AdobeStock_202662356_Preview.jpeg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/AdobeStock_323986170_Preview.jpeg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/AdobeStock_343505536_Preview.jpeg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/gallery/portrait/AdobeStock_336706750_Preview.jpeg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/gallery/portrait/AdobeStock_135981384_Preview.jpeg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/gallery/portrait/AdobeStock_322662088_Preview.jpeg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/gallery/portrait/pexels-jahns-chavez-969593.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/gallery/portrait/kitchen-cute-small.png'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/living-room-fancy.png'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pexels-max-vakhtbovych-6947277.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/istockphoto-667524206-1024x1024.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/gallery/portrait/breakfast-nook.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pleats-close-up.png'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/solarium.jpeg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/spools-of-thread.png'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/stock-photo-dining-room-with-kitchen-bar-of-the-center-of-room-and-chandelier-over-room-in-beige-white-and-579096220.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/istockphoto-182418329-1024x1024.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/stock-photo-mediterranean-style-living-room-112874254.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },    
    {
        image: require('./../../images/gallery/portrait/istockphoto-183358030-1024x1024.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    
    {
        image: require('./../../images/gallery/portrait/istockphoto-621687628-1024x1024.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/gallery/portrait/istockphoto-1225530217-1024x1024.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/gallery/portrait/istockphoto-175187656-1024x1024.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/gallery/portrait/istockphoto-1151872349-1024x1024.jpg'),
        imageHifi: require('./../../images/gallery/portrait/hi-fi/slide1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-5'
    },
]

// var bnrimg = require('./../../images/banner/istockphoto-856988866-1024x1024.jpg');
// var bnrimg = require('./../../images/banner/istockphoto-173239779-1024x1024.jpg');
// var bnrimg = require('./../../images/banner/istockphoto-491666019-1024x1024.jpg');
// var bnrimg = require('./../../images/banner/istockphoto-856988866-1024x1024.jpg');
// var bnrimg = require('./../../images/banner/istockphoto-856988866-1024x1024.jpg');
var bnrimg = require('./../../images/banner/sewing-machine-lamp-freepic.png');
// var bnrimg = require('./../../images/banner/istockphoto-1151872349-1024x1024.jpg');


class WorkGrid extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
    }

 
    render() {
        const { photoIndex, isOpen } = this.state;

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
                                                            <h2>{item.title}</h2>
                                                            <p>{item.description}</p>
                                                            <a 
                                                            className="v-button letter-spacing-4 font-12 text-uppercase p-l20 make-cursor"
                                                            // type="button" 
                                                            onClick={() => this.setState({ isOpen: true, photoIndex: Number(index) }) }
                                                            >
                                                                <p>
                                                                    <i class="fa fa-search" aria-hidden="true"></i> Enlarge
                                                                </p>

                                                                
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {isOpen && (
                                                <Lightbox
                                                    mainSrc={projects[photoIndex].imageHifi.default}
                                                    nextSrc={projects[(photoIndex + 1) % projects.length].imageHifi.default}
                                                    prevSrc={projects[(photoIndex + projects.length - 1) % projects.length].imageHifi.default}
                                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                                    onMovePrevRequest={() => this.setState({
                                                        photoIndex: (photoIndex + projects.length - 1) % projects.length,
                                                    })}
                                                    onMoveNextRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + 1) % projects.length,
                                                    })}
                                                    discourageDownloads={true}
                                                />
                                            )}

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