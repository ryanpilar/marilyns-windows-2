// import React from 'react';
// import GoogleMaps from "simple-react-google-maps"
// import Header2 from '../Common/Header2';
// import Footer from '../Common/Footer';
// import Banner from './../Segments/Banner';

// var bnrimg = require('./../../images/banner/6.jpg');

// class ContactUs extends React.Component {
//     render() {
//         return (
//             <>
//                 <Header2 />
//                 <div className="page-content">
//                 <Banner title="Inspired design for people" pagename="Contact us" bgimage={bnrimg.default}/>
//                     {/* SECTION CONTENTG START */}
//                     <div className="section-full p-tb80 tm-shortcode-wrap">
//                         {/* LOCATION BLOCK*/}
//                         <div className="container">
//                             {/* TITLE START */}
//                             <div className="section-head text-left text-black">
//                                 <h2 className="text-uppercase font-36">Where to Find us </h2>
//                                 <div className="wt-separator-outer">
//                                     <div className="wt-separator bg-black" />
//                                 </div>
//                             </div>
//                             {/* TITLE END */}
//                             {/* GOOGLE MAP & CONTACT FORM */}
//                             <div className="section-content">
//                                 {/* CONTACT FORM*/}
//                                 <div className="wt-box">
//                                     <form className="contact-form cons-contact-form" method="post" action="form-handler.php">
//                                         <div className="contact-one p-a40 p-r150">
//                                             <div className="form-group">
//                                                 <input name="username" type="text" required className="form-control" placeholder="Name" />
//                                             </div>
//                                             <div className="form-group">
//                                                 <input name="email" type="text" className="form-control" required placeholder="Email" />
//                                             </div>
//                                             <div className="form-group">
//                                                 <textarea name="message" rows={3} className="form-control " required placeholder="Message" defaultValue={""} />
//                                             </div>
//                                             <button name="submit" type="submit" value="Submit" className="site-button black radius-no text-uppercase">
//                                                 <span className="font-12 letter-spacing-5">Submit</span>
//                                             </button>
//                                             <div className="contact-info bg-black text-white p-a30">
//                                                 <div className="wt-icon-box-wraper left p-b30">
//                                                     <div className="icon-sm"><i className="iconmoon-smartphone-1" /></div>
//                                                     <div className="icon-content text-white ">
//                                                         <h5 className="m-t0 text-uppercase">Phone number</h5>
//                                                         <p>(456) 789 10 12</p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="wt-icon-box-wraper left p-b30">
//                                                     <div className="icon-sm"><i className="iconmoon-email" /></div>
//                                                     <div className="icon-content text-white">
//                                                         <h5 className="m-t0  text-uppercase">Email address</h5>
//                                                         <p>Moderninfo@gmail.com</p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="wt-icon-box-wraper left">
//                                                     <div className="icon-sm"><i className="iconmoon-travel" /></div>
//                                                     <div className="icon-content text-white">
//                                                         <h5 className="m-t0  text-uppercase">Address info</h5>
//                                                         <p>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                        
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="section-full">
//                         <div className="gmap-outline">
//                         <GoogleMaps
//                                 apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
//                                 style={{height: "460px", width: "100%"}}
//                                 zoom={12}
//                                 center={{lat: 34.073280, lng: -118.251410}}
//                                 markers={{lat: 34.073280, lng: -118.251410}} //optional
//                                 />
//                         </div>
//                     </div>
//                     {/* SECTION CONTENT END */}
//                 </div>

//                 <Footer />
//             </>
//         );
//     };
// };

// export default ContactUs;