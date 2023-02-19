
import AboutImage from "./AboutImage";

const AboutImages = ({ images }) => {

  return (
    <div className="wt-post-media clearfix m-b30">
      <div className="row">
        <div className=" ">
          {images.map((item, index) => (

            <AboutImage image={item} key={index}/>

          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutImages;
