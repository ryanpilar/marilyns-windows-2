import React from "react";
import { NavLink } from "react-router-dom";

class Banner extends React.Component {
  render() {
    return (
      <>
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center "
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(" + this.props.bgimage + ")" }}
        >
          <div className="overlay-main bg-black opacity-02 " />
          {/* <div className='overlay-secondary' /> */}
          {/* <div> */}
          {/* <div className="m-a10 p-a15 bdr-1 bdr-primary"> */}

          <div className="container ">
            {this.props.quote && (
              <>
                <blockquote className="transparentBanner m-lr20">
                  {/* <div className="wt-bnr-inr-entry"> */}
                    <div className="banner-bg-white ">
                      <div className="banner-title-outer">
                        <div className="banner-title-name p-lr20">
                          
                          <h1 className="p-lr20 text-white font-weight-500 font-50">{this.props.heading}</h1>

                          <h2 className="text-white letter-spacing-5 font-18 font-weight-300 p-lr20">
                            {this.props.quote}
                            
                          </h2>

                          {this.props.quote2 && (
                            <h2 className="text-white letter-spacing-5 font-18 font-weight-300 p-lr20">
                            {this.props.quote2}
                            
                          </h2>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* BREADCRUMB ROW */}
                    <div className="p-tb20"></div>
                    {/* BREADCRUMB ROW END */}
                  {/* </div> */}
                </blockquote>
              </>
            )}
            {/* </div> */}
          </div>

          {/* </div> */}
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default Banner;
