import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';

var bnrimg = require('./../../images/banner/2.jpg');

class Table extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                <Banner title="Bringing transcendent environments to real world situation." pagename="Table" bgimage={bnrimg.default}/>
                    
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            <div className="row">
                            <SidebarNav />
                                <div className="col-md-9 col-sm-9">
                                    <div className="m-b10">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                {/* TABLE CONDENSED */}
                                                <div className="section-content m-b50">
                                                    {/* TITLE START */}
                                                    <div className="section-head">
                                                        <h3>Condensed</h3>
                                                        <div className="wt-separator-outer">
                                                            <div className="wt-separator bg-black" />
                                                        </div>
                                                    </div>
                                                    {/* TITLE END */}
                                                    <div className='table-responsive'>
                                                        <table className="table table-condensed">
                                                            <thead>
                                                                <tr>
                                                                    <th>Firstname</th>
                                                                    <th>Lastname</th>
                                                                    <th>Email</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>John</td>
                                                                    <td>Doe</td>
                                                                    <td>john@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Mary</td>
                                                                    <td>Moe</td>
                                                                    <td>mary@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>July</td>
                                                                    <td>Dooley</td>
                                                                    <td>july@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>John</td>
                                                                    <td>Doe</td>
                                                                    <td>john@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Mary</td>
                                                                    <td>Moe</td>
                                                                    <td>mary@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>July</td>
                                                                    <td>Dooley</td>
                                                                    <td>july@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Mary</td>
                                                                    <td>Moe</td>
                                                                    <td>mary@example.com</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                {/* TABLE CONTEXTUAL CLASSES */}
                                                <div className="section-content m-b50">
                                                    {/* TITLE START */}
                                                    <div className="section-head">
                                                        <h3>Contextual Classes</h3>
                                                        <div className="wt-separator-outer">
                                                            <div className="wt-separator bg-black" />
                                                        </div>
                                                    </div>
                                                    {/* TITLE END */}
                                                    <div className='table-responsive'>
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Firstname</th>
                                                                    <th>Lastname</th>
                                                                    <th>Email</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Default</td>
                                                                    <td>Defaultson</td>
                                                                    <td>def@somemail.com</td>
                                                                </tr>
                                                                <tr className="success">
                                                                    <td>Success</td>
                                                                    <td>Doe</td>
                                                                    <td>john@example.com</td>
                                                                </tr>
                                                                <tr className="danger">
                                                                    <td>Danger</td>
                                                                    <td>Moe</td>
                                                                    <td>mary@example.com</td>
                                                                </tr>
                                                                <tr className="info">
                                                                    <td>Info</td>
                                                                    <td>Dooley</td>
                                                                    <td>july@example.com</td>
                                                                </tr>
                                                                <tr className="warning">
                                                                    <td>Warning</td>
                                                                    <td>Refs</td>
                                                                    <td>bo@example.com</td>
                                                                </tr>
                                                                <tr className="active">
                                                                    <td>Active</td>
                                                                    <td>Activeson</td>
                                                                    <td>act@example.com</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                {/* TABLE CONDENSED */}
                                                <div className="section-content m-b50">
                                                    {/* TITLE START */}
                                                    <div className="section-head">
                                                        <h3>Bordered </h3>
                                                        <div className="wt-separator-outer">
                                                            <div className="wt-separator bg-black" />
                                                        </div>
                                                    </div>
                                                    {/* TITLE END */}
                                                    <div className='table-responsive'>
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Firstname</th>
                                                                    <th>Lastname</th>
                                                                    <th>Email</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>John</td>
                                                                    <td>Doe</td>
                                                                    <td>john@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Mary</td>
                                                                    <td>Moe</td>
                                                                    <td>mary@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>July</td>
                                                                    <td>Dooley</td>
                                                                    <td>july@example.com</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                {/* TABLE CONTEXTUAL CLASSES */}
                                                <div className="section-content m-b50">
                                                    {/* TITLE START */}
                                                    <div className="section-head">
                                                        <h3>Hover </h3>
                                                        <div className="wt-separator-outer">
                                                            <div className="wt-separator bg-black" />
                                                        </div>
                                                    </div>
                                                    {/* TITLE END */}
                                                    <div className='table-responsive'>
                                                        <table className="table table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>Firstname</th>
                                                                    <th>Lastname</th>
                                                                    <th>Email</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>John</td>
                                                                    <td>Doe</td>
                                                                    <td>john@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Mary</td>
                                                                    <td>Moe</td>
                                                                    <td>mary@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>July</td>
                                                                    <td>Dooley</td>
                                                                    <td>july@example.com</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                {/* TABLE CONDENSED */}
                                                <div className="section-content m-b50">
                                                    {/* TITLE START */}
                                                    <div className="section-head">
                                                        <h3>Basic</h3>
                                                        <div className="wt-separator-outer">
                                                            <div className="wt-separator bg-black" />
                                                        </div>
                                                    </div>
                                                    {/* TITLE END */}
                                                    <div className='table-responsive'>
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Firstname</th>
                                                                    <th>Lastname</th>
                                                                    <th>Email</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>John</td>
                                                                    <td>Doe</td>
                                                                    <td>john@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Mary</td>
                                                                    <td>Moe</td>
                                                                    <td>mary@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>July</td>
                                                                    <td>Dooley</td>
                                                                    <td>july@example.com</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                {/* TABLE CONTEXTUAL CLASSES */}
                                                <div className="section-content">
                                                    {/* TITLE START */}
                                                    <div className="section-head">
                                                        <h3>Striped Rows</h3>
                                                        <div className="wt-separator-outer">
                                                            <div className="wt-separator bg-black" />
                                                        </div>
                                                    </div>
                                                    {/* TITLE END */}
                                                    <div className='table-responsive'>
                                                        <table className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Firstname</th>
                                                                    <th>Lastname</th>
                                                                    <th>Email</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>John</td>
                                                                    <td>Doe</td>
                                                                    <td>john@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Mary</td>
                                                                    <td>Moe</td>
                                                                    <td>mary@example.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>July</td>
                                                                    <td>Dooley</td>
                                                                    <td>july@example.com</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
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

export default Table;