import React from 'react';

import Footer from '../Common/Footer';

class ListGroup extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-sm-9">
                                    {/* SECTION CONTENT */}
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Ordered</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* LISTING WITH NUMBERING & ALPHA */}
                                        <div className="section-content">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <ol type={1} className="m-l15 list-simple">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ol>
                                                    <ol type="A" className="m-l15 list-simple">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Aorem ipsum dolor sit amet</li>
                                                    </ol>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <ol type="i" className="m-l15 list-simple">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Aorem ipsum dolor sit amet</li>
                                                    </ol>
                                                    <ol type="I" className="m-l15 list-simple">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Aorem ipsum dolor sit amet</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Numbering &amp; Alfha </h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* LISTING WITH NUMBERING & ALPHA */}
                                        <div className="section-content">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <ol className="list-num-count upper-alpha list-outline-none">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ol>
                                                    <ol className="list-num-count upper-alpha list-outline">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ol>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <ol className="list-num-count">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ol>
                                                    <ol className="list-num-count lower-alpha">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <h3>Unordered</h3>
                                                    <div className="wt-separator-outer">
                                                        <div className="wt-separator bg-black" />
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                {/* LISTING WITH NUMBERING & ALPHA */}
                                                <div className="section-content">
                                                    <ul className="list-simple p-l15">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance
                                                            <ul>
                                                                <li>Phasellus iaculis neque</li>
                                                                <li>Purus sodales ultricies</li>
                                                            </ul>
                                                        </li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <h3>Unstyled</h3>
                                                    <div className="wt-separator-outer">
                                                        <div className="wt-separator bg-black" />
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                {/* LISTING WITH NUMBERING & ALPHA */}
                                                <div className="section-content">
                                                    <ul className="list-unstyled list-simple">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance
                                                            <ul>
                                                                <li>Phasellus iaculis neque</li>
                                                                <li>Purus sodales ultricies</li>
                                                            </ul>
                                                        </li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b0">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Symbols</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* LISTING WITH SYMBOLES */}
                                        <div className="section-content">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <ul className="list-circle">
                                                        <li>Dummy text is also used to demonstrate the appearance </li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ul>
                                                    <ul className="list-angle-right">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <ul className="list-arrow">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ul>
                                                    <ul className="list-checked black">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12"><hr /></div>
                                                <div className="col-md-6 col-sm-6">
                                                    <ul className="list-check secondry">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ul>
                                                    <ul className="list-check-circle primary">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <ul className="list-chevron-circle orange ">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ul>
                                                    <ul className="list-arrow-circle green">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12"><hr /></div>
                                                <div className="col-md-6 col-sm-6">
                                                    <ul className="list-times-circle red">
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                        <li>Dummy text is also used to demonstrate the appearance</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* SECTION CONTENT END */}
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    };
};

export default ListGroup;