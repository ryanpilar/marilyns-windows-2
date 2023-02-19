import React from "react";

const Banner = ({ bgimage, title, posLeft, posRight }) => {
  return (
    <>
      <div
        className="wt-bnr-inr overlay-wraper bg-parallax bg-parallax-fallback bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(" + bgimage + ")" }}
      >
        <div className="overlay-main bg-black opacity-04 " />
        <div
          className={`container ${posLeft ? `flex-bottom-left` : ""} ${
            posRight ? `flex-bottom-right` : ""
          }`}
        >
          {title && (
            <>
              <div
                className={`${posLeft ? "text-left" : ""} ${
                  posRight ? "text-right" : ""
                }`}
              >
                <h1 className="text-white hatton text-uppercase one-word-per-line m-b5 p-b5">
                  {title}
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Banner;
