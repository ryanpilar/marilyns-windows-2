import React from "react";

const Banner = ({
  bgimage,
  title,
  posLeft,
  posRight,
  titleTag = "h1",
  titleDecorative = false,
}) => {
  const bannerStyle = bgimage ? { backgroundImage: `url(${bgimage})` } : undefined;
  const TitleTag = titleTag;

  return (
    <>
      <div
        className="wt-bnr-inr overlay-wraper bg-parallax bg-parallax-fallback bg-top-center"
        data-stellar-background-ratio="0.5"
        style={bannerStyle}
      >
        {/* <div className="overlay-main bg-black opacity-04 " /> */}
        <div className="overlay-main" />
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
                <TitleTag
                  className="text-white hatton text-uppercase one-word-per-line banner-main-title m-b5 p-b5"
                  aria-hidden={titleDecorative ? "true" : undefined}
                >
                  {title}
                </TitleTag>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Banner;
