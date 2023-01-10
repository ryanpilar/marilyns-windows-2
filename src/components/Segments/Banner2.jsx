import React from "react";
import { NavLink } from "react-router-dom";

class Banner2 extends React.Component {
  render() {
    return (
      <>
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(" + this.props.bgimage + ")" }}
        >
          <div className="overlay-main bg-black opacity-02" />
          <div className='overlay-secondary' />
          <div>
          <div className="m-a10 p-a30 ">

          <div className="container">
            {/* <div className=''> */}
            <div className="wt-bnr-inr-entry">
              <div className='banner-bg-white'>
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h1>{this.props.heading}</h1>
                  <h2 className="text-white text-uppercase letter-spacing-5 font-18 font-weight-300">
                    {this.props.title}
                  </h2>
                </div>
              </div>
              </div>


            </div>
            {/* </div> */}
          </div>

          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Banner2;
