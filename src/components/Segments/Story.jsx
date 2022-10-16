import React from 'react';

var img1 = require('./../../images/gallery/pic1.jpg');
var img2 = require('./../../images/gallery/pic3.jpg');
var img3 = require('./../../images/gallery/pic4.jpg');
var img4 = require('./../../images/gallery/pic5.jpg');

class Story extends React.Component {
    
    render() {
        
        return (
            <>
                <div className="section-full bg-gray p-tb90 square_shape1 tw-our-story-wrap">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text-uppercase font-36">Our Story</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="section-content our-story">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-media our-story-pic">
                                            <img src={img1.default} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-box our-story-detail">
                                            <h3 className="text-uppercase">2011-12</h3>
                                            <h2 className="text-uppercase">Park Boathouse</h2>
                                            <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum stie id viverra. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-box our-story-detail">
                                            <h3 className="text-uppercase">2013-14</h3>
                                            <h2 className="text-uppercase">Museum Expansion</h2>
                                            <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum stie id viverra. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-media our-story-pic">
                                            <img src={img2.default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-media our-story-pic">
                                            <img src={img3.default} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-box our-story-detail">
                                            <h3 className="text-uppercase">2015-16</h3>
                                            <h2 className="text-uppercase">Eisenhower Memoria</h2>
                                            <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum stie id viverra. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-box our-story-detail">
                                            <h3 className="text-uppercase">2017-18</h3>
                                            <h2 className="text-uppercase">Columbia Sport Center</h2>
                                            <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum stie id viverra. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="wt-media our-story-pic">
                                            <img src={img4.default} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default Story;