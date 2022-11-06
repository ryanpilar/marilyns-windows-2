

import React from 'react';
import { Link } from "react-router-dom";
import Header2 from '../Common/Header2';
import Banner from '../Segments/Banner';
import About2 from '../Segments/About2';
import Footer from '../Common/Footer';

var bnrimg = require('./../../images/background/bg-11.jpg');

class AboutMe extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <div className="section-full p-tb90 bg-gray square_shape2 tm-about2-wrap">
                        <div className='container'>

                            <div className="col-lg-6 col-md-6 ">
                                <div className="m-about-containt text-uppercase text-black p-t30">
                                    
                                    
                                    
                                    <ul className='primary'>
                                        
                                    </ul>
                                </div>
                                <div className="m-b0">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        {/* <span className="font-24 font-weight-300"></span> */}
                                        <h2 className="font-40">404 Error. Oops! You seem to be lost.</h2>
                                        
                                        <div className="wt-separator-outer">
                                            <div className="wt-separator bg-black" />
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    {/* LISTING WITH SYMBOLES */}
                                    <div className="section-content">
                                        <div className="row">
                                            
                                            <div className="col-md-6 col-sm-6">
                                            
                                                <p><b>Here are some helpful links:</b></p>
                                                <ul className="list-arrow">
                                                    <li><a href='/'>Home</a></li>
                                                    <li><a href='/aboutme'>My Story</a></li>
                                                    <li><a href='/blogs'>Blogs</a></li>
                                                    <li><a href='/services'>Services</a></li>
                                                    <li><a href='/#contact'>Contact</a></li>
                                                </ul>
                                            </div>
 
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* <Footer /> */}
            </>
        );
    };
};

export default AboutMe;

