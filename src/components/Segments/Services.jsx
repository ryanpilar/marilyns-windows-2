import React from 'react';

const images = [
    require('./../../images/gallery/portrait/sewing-machine-hands.png'),
    // require('./../../images/gallery/portrait/spools-of-thread.png'),
    // require('./../../images/gallery/portrait/pic3.jpg'),
    // require('./../../images/gallery/portrait/pic4.jpg'),
    // require('./../../images/gallery/portrait/pic5.jpg'),
    // require('./../../images/gallery/portrait/pic6.jpg')
]

// const bgimg = require('./../../images/background/sewing-machine-working.png')
const bgimg = require('./../../images/background/fabric-bolts.png')
// const bgimg = require('./../../images/background/spools-of-thread.png')


const servicesleft = [
    {
        counter: 0,
        title: 'Living Spaces',
        description: 'Main spaces, kitchen, bedroom and outdoor. Working with us is simple, no matter how complex the design.',
    },
    {
        counter: 1,
        title: 'Bedroom',
        description: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend.',
    },
    {
        counter: 2,
        title: 'Installation',
        description: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend.',
    }
]

const servicesright = [
    {
        counter: 3,
        title: 'Custom Drapes and Window Treatments',
        description: 'Roman shades, headboards, cornices, pillows, bedding.',
    },
    {
        counter: 4,
        title: 'Blinds / Motorized',
        description: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend.',
    },
    {
        counter: 5,
        title: 'Outdoor',
        description: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend.',
    }
]

class Services extends React.Component {
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
                {/* <div className="section-full bg-black p-t90 p-b30 square_shape1 tm-service2-wrap"> */}
                <div id='services' className="section-full p-t90 p-b50 overlay-wraper bg-top-center bg-parallax tm-facts-wrap" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(" + bgimg.default + ")" }}>
                        <div className="overlay-main opacity-08 bg-black" />
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head text-left text-white">
                            <h2 className="text-uppercase font-36">Our Services</h2>
                            <div className="wt-separator-outer">
                                <div className="wt-separator bg-white" />
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content circle-block-outer" data-toggle="tab-hover">
                            <div className="row">
                                <div className="col-md-4 col-sm-12 m-b30">
                                    {servicesleft.map((item, index) => (
                                        <div className="wt-icon-box-wraper right p-a20 m-b50 text-white" data-target={`#tab${item.counter}`} data-toggle="tab" key={index}>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte text-uppercase">{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                                <div className="col-md-4 col-sm-12 m-b30">
                                    <div className="circle-content-pic tab-content ">
                                        {images.map((item, index) => (
                                            <div className={index == 0 ? `tab-pane active` : `tab-pane`} id={`tab${index}`} key={index}>
                                                <div className="wt-box">
                                                    <div className="wt-media text-primary m-b20 ">
                                                        <img src={item.default} alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                        ))}

                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 m-b30">
                                    {servicesright.map((item, index) => (
                                        <div className="wt-icon-box-wraper left p-a20 m-b50 text-white" data-target={`#tab${item.counter}`} data-toggle="tab" key={index}>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte text-uppercase">{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services;