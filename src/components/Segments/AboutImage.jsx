import { useState } from "react";

const AboutImage = ( {image} ) => {

  const [blackOpacity, setBlackOpacity] = useState({
    isHover: false,
  });

  const handleHover = () => {
    setBlackOpacity({ isHover: !blackOpacity.isHover });
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
    <div className="add-box-shadow p-a10 m-a10">
      <div className="portfolio-item wt-img-effect ">
        <div
          className={blackOpacity.isHover ? "" : "wt-img-black-bg"}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className={blackOpacity.isHover ? "" : "img-opacity"}>
            <img
              className=""
              src={image.secure_url}
              alt={image.context.custom.alt}
              data-pin-description={image.context.custom.dataPin}
              caption={image.context.custom.caption}

              width={1000}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutImage;
