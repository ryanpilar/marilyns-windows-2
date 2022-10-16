import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var bnrimg = require('./../../images/banner/4.jpg');

class Video extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            isOpen2: false
        }
        this.openModal = this.openModal.bind(this)
        this.openModal2 = this.openModal2.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    openModal2() {
        this.setState({ isOpen2: true })
    }
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="A truly integrated way of working." pagename="Video" bgimage={bnrimg.default}/>
                    
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            <div className="row">
                            <SidebarNav />
                                <div className="col-md-9 col-sm-9">
                                    <div className="section-content">
                                        <div className="wt-box">
                                            {/* YOUTUBE VIDEO */}
                                            <div className="m-b30">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <h3>Youtube</h3>
                                                    <div className="wt-separator-outer">
                                                        <div className="wt-separator bg-black" />
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <iframe src="https://www.youtube.com/embed/fafEHMnFe3g" width={560} height={315} />
                                            </div>
                                            {/* VIMEO VIDEO */}
                                            <div className="m-b30">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <h3>Vimeo</h3>
                                                    <div className="wt-separator-outer">
                                                        <div className="wt-separator bg-black" />
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <iframe src="https://player.vimeo.com/video/34741214?color=ffffff&title=0&byline=0&portrait=0" width={560} height={315} />
                                            </div>
                                            {/* YOUTUBE VIDEO WITH POPUP */}
                                            <div className="m-b30">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <h3>Youtube with popup</h3>
                                                    <div className="wt-separator-outer">
                                                        <div className="wt-separator bg-black" />
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="wt-box">
                                                    <div className="wt-thum-bx wt-img-overlay1 wt-img-effect zoom yt-thum-box">
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='fafEHMnFe3g' onClose={() => this.setState({ isOpen: false })} />
                                                        <img src="http://img.youtube.com/vi/fafEHMnFe3g/0.jpg" alt="" />
                                                        <div className="overlay-bx">
                                                            <div className="overlay-icon">
                                                            <NavLink to={"#"} onClick={this.openModal} className="mfp-video">
                                                                    <i className="fa fa-play wt-icon-box-xs" />
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* VIMEO VIDEO WITH POPUP */}
                                            <div className="m-b0">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <h3>Vimeo with popup</h3>
                                                    <div className="wt-separator-outer">
                                                        <div className="wt-separator bg-black" />
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="wt-box">
                                                    <div className="wt-thum-bx overlay-wraper">
                                                    <ModalVideo channel='vimeo' isOpen={this.state.isOpen2} videoId='34741214' onClose={() => this.setState({ isOpen2: false })} />
                                                        <img src="https://i.vimeocdn.com/video/239492174.jpg" alt="" />
                                                        <NavLink to={"#"} className="mfp-video video-play-btn">
                                                            <i className="fa fa-play" />
                                                        </NavLink>
                                                        <div className="overlay-main bg-black opacity-07" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default Video;