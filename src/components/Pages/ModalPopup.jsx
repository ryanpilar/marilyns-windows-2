import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import SidebarNav from './../Segments/SidebarNav';

var bnrimg = require('./../../images/banner/4.jpg');

class ModalPopup extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                <Banner title="Committed to delivering high quality projects and innovate design solutions." pagename="Modal Popup" bgimage={bnrimg.default}/>
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        <div className="container">
                            <div className="row">
                            <SidebarNav />
                                <div className="col-md-9 col-sm-9">
                                    <div className="section-content">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <h3>Modals</h3>
                                            <div className="wt-separator-outer">
                                                <div className="wt-separator bg-black" />
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* TRIGGER THE MODAL WITH A BUTTON */}
                                        <button type="button" className="site-button  text-uppercase letter-spacing-2 font-weight-800  m-b30 m-r5" data-toggle="modal" data-target="#Default-Modal">Default Modal</button>
                                        {/* MODAL */}
                                        <div id="Default-Modal" className="modal fade" role="dialog">
                                            <div className="modal-dialog">
                                                {/* MODAL CONTENT*/}
                                                <div className="modal-content">
                                                    <div className="modal-header bg-secondry">
                                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                                        <h4 className="modal-title text-black">Modal Header</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Some text in the modal.</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="site-button button-sm text-uppercase letter-spacing-2" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TRIGGER THE MODAL WITH A BUTTON */}
                                        <button type="button" className="site-button text-uppercase letter-spacing-2 font-weight-800  m-b30 m-r5" data-toggle="modal" data-target="#Small-Modal">Small Modal</button>
                                        {/* MODAL */}
                                        <div id="Small-Modal" className="modal fade" role="dialog">
                                            <div className="modal-dialog modal-sm">
                                                {/* MODAL CONTENT */}
                                                <div className="modal-content">
                                                    <div className="modal-header bg-secondry">
                                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                                        <h4 className="modal-title text-black">Modal Header</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Some text in the modal.</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="site-button button-sm text-uppercase letter-spacing-2" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TRIGGER THE MODAL WITH A BUTTON */}
                                        <button type="button" className="site-button  text-uppercase letter-spacing-2 font-weight-800  m-b30 m-r5" data-toggle="modal" data-target="#large-Modal">Large Modal</button>
                                        {/* MODAL */}
                                        <div id="large-Modal" className="modal fade" role="dialog">
                                            <div className="modal-dialog modal-lg">
                                                {/* MODAL CONTENT */}
                                                <div className="modal-content">
                                                    <div className="modal-header bg-secondry">
                                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                                        <h4 className="modal-title text-black">Modal Header</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Some text in the modal.</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="site-button button-sm text-uppercase letter-spacing-2" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TRIGGER THE MODAL WITH A BUTTON */}
                                        <button type="button" className="site-button text-uppercase letter-spacing-2 font-weight-800 m-b30" data-toggle="modal" data-target="#with-form">With form</button>
                                        {/* MODAL */}
                                        <div id="with-form" className="modal fade" role="dialog">
                                            <div className="modal-dialog">
                                                {/* Modal content*/}
                                                <div className="modal-content">
                                                    <div className="modal-header bg-secondry">
                                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                                        <h4 className="modal-title text-black">Modal Header</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form id="demo-form" className="form-horizontal mb-lg" noValidate>
                                                            <div className="form-group mt-lg">
                                                                <label className="col-sm-3 control-label">Name</label>
                                                                <div className="col-sm-9">
                                                                    <input name="name" className="form-control" placeholder="Type your name..." required type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-3 control-label">Email</label>
                                                                <div className="col-sm-9">
                                                                    <input name="email" className="form-control" placeholder="Type your email..." required type="email" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-3 control-label">URL</label>
                                                                <div className="col-sm-9">
                                                                    <input name="url" className="form-control" placeholder="Type an URL..." type="url" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-3 control-label">Comment</label>
                                                                <div className="col-sm-9">
                                                                    <textarea rows={5} className="form-control" placeholder="Type your comment..." required defaultValue={""} />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="site-button text-uppercase button-sm letter-spacing-2 m-r15" data-dismiss="modal">Close</button>
                                                        <button type="button" className="site-button text-uppercase button-sm letter-spacing-2">Save Changes </button>
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

export default ModalPopup;