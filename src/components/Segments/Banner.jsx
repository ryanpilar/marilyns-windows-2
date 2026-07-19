import React from "react";

export const BannerBackgroundImage = ({ src }) => {
  if (!src) {
    return null;
  }

  return (
    <img
      className="banner-background-image"
      src={src}
      alt=""
      aria-hidden="true"
      width={1920}
      height={900}
      loading="eager"
      fetchpriority="high"
    />
  );
};

const Banner = ({
  bgimage,
  title,
  posLeft,
  posRight,
  titleTag = "h1",
  titleDecorative = false,
}) => {
  const TitleTag = titleTag;

  return (
    <>
      <div
        className="wt-bnr-inr overlay-wraper"
      >
        <BannerBackgroundImage src={bgimage} />
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
