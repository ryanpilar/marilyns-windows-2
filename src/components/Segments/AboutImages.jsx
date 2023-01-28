const AboutImages = () => {
  const images = [
    { image: require("./../../images/blog/default/thum3.jpg") },
    { image: require("./../../images/blog/default/thum6.jpg") },
    { image: require("./../../images/blog/default/thum7.jpg") },
    { image: require("./../../images/blog/default/thum8.jpg") },
  ];
  return (
    <div className="wt-post-media clearfix m-b30">
      <div class="row">
        <div className=" ">
          {images.map((item, index) => (
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="add-box-shadow p-a10 m-a10">
                <div
                  key={index}
                  className="portfolio-item wt-img-effect zoom-slow "
                >
                  <img
                    className="img-responsive"
                    src={item.image.default}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutImages;
